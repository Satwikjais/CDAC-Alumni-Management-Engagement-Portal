package com.cdacalumni.eventsservice.service;

import com.cdacalumni.eventsservice.dto.EventDTO;
import com.cdacalumni.eventsservice.entity.Event;
import com.cdacalumni.eventsservice.entity.EventRegistration;
import com.cdacalumni.eventsservice.repository.EventRepository;
import com.cdacalumni.eventsservice.repository.EventRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventRegistrationRepository registrationRepository;

    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = new Event();
        event.setTitle(eventDTO.getTitle());
        event.setDescription(eventDTO.getDescription());
        event.setEventDate(eventDTO.getEventDate());
        event.setLocation(eventDTO.getLocation());
        event.setImageUrl(eventDTO.getImageUrl());
        event.setCapacity(eventDTO.getCapacity() != null ? eventDTO.getCapacity() : 100);

        Event savedEvent = eventRepository.save(event);
        return convertToDTO(savedEvent);
    }

    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return convertToDTO(event);
    }

    public List<EventDTO> getAllEvents() {
        return eventRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        event.setTitle(eventDTO.getTitle());
        event.setDescription(eventDTO.getDescription());
        event.setEventDate(eventDTO.getEventDate());
        event.setLocation(eventDTO.getLocation());
        event.setImageUrl(eventDTO.getImageUrl());
        event.setCapacity(eventDTO.getCapacity());
        event.setUpdatedAt(LocalDateTime.now());

        Event updatedEvent = eventRepository.save(event);
        return convertToDTO(updatedEvent);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    public String registerForEvent(Long eventId, String email, String name, String phone) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if (registrationRepository.findByEventIdAndEmail(eventId, email).isPresent()) {
            throw new RuntimeException("Already registered for this event");
        }

        if (event.getRegistrations() >= event.getCapacity()) {
            throw new RuntimeException("Event capacity full");
        }

        EventRegistration registration = new EventRegistration();
        registration.setEventId(eventId);
        registration.setEmail(email);
        registration.setName(name);
        registration.setPhone(phone);

        registrationRepository.save(registration);
        event.setRegistrations(event.getRegistrations() + 1);
        eventRepository.save(event);

        return "Registered successfully";
    }

    private EventDTO convertToDTO(Event event) {
        return new EventDTO(
                event.getId(),
                event.getTitle(),
                event.getDescription(),
                event.getEventDate(),
                event.getLocation(),
                event.getImageUrl(),
                event.getCapacity(),
                event.getRegistrations()
        );
    }
}
