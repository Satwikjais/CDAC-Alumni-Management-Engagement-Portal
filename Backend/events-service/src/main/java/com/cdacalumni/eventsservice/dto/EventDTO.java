package com.cdacalumni.eventsservice.dto;

import java.time.LocalDateTime;

public class EventDTO {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime eventDate;
    private String location;
    private String imageUrl;
    private Integer capacity;
    private Integer registrations;

    public EventDTO() {}

    public EventDTO(Long id, String title, String description, LocalDateTime eventDate, String location, String imageUrl, Integer capacity, Integer registrations) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.location = location;
        this.imageUrl = imageUrl;
        this.capacity = capacity;
        this.registrations = registrations;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDateTime getEventDate() { return eventDate; }
    public void setEventDate(LocalDateTime eventDate) { this.eventDate = eventDate; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Integer getCapacity() { return capacity; }
    public void setCapacity(Integer capacity) { this.capacity = capacity; }

    public Integer getRegistrations() { return registrations; }
    public void setRegistrations(Integer registrations) { this.registrations = registrations; }
}
