package com.cdacalumni.contentservice.service;

import com.cdacalumni.contentservice.dto.OpportunityDTO;
import com.cdacalumni.contentservice.entity.Opportunity;
import com.cdacalumni.contentservice.repository.OpportunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OpportunityService {
    @Autowired
    private OpportunityRepository opportunityRepository;

    public OpportunityDTO createOpportunity(OpportunityDTO dto) {
        Opportunity opportunity = new Opportunity();
        opportunity.setTitle(dto.getTitle());
        opportunity.setType(dto.getType());
        opportunity.setCompany(dto.getCompany());
        opportunity.setLocation(dto.getLocation());
        opportunity.setDescription(dto.getDescription());
        opportunity.setLink(dto.getLink());
        opportunity.setPostedBy(dto.getPostedBy());
        // Always save postedByRole as lowercase for consistent filtering
        if (dto.getPostedByRole() != null) {
            opportunity.setPostedByRole(dto.getPostedByRole().toLowerCase());
        } else {
            opportunity.setPostedByRole(null);
        }
        opportunity = opportunityRepository.save(opportunity);
        return toDTO(opportunity);
    }

    public List<OpportunityDTO> getAllOpportunities() {
        return opportunityRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    private OpportunityDTO toDTO(Opportunity entity) {
        OpportunityDTO dto = new OpportunityDTO();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setType(entity.getType());
        dto.setCompany(entity.getCompany());
        dto.setLocation(entity.getLocation());
        dto.setDescription(entity.getDescription());
        dto.setLink(entity.getLink());
        dto.setPostedBy(entity.getPostedBy());
        dto.setPostedByRole(entity.getPostedByRole());
        return dto;
    }
}
