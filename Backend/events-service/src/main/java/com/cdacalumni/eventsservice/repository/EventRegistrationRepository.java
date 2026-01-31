package com.cdacalumni.eventsservice.repository;

import com.cdacalumni.eventsservice.entity.EventRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {
    List<EventRegistration> findByEventId(Long eventId);
    Optional<EventRegistration> findByEventIdAndEmail(Long eventId, String email);
}
