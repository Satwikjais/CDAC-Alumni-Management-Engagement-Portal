package com.cdacalumni.contentservice.controller;

import com.cdacalumni.contentservice.dto.OpportunityDTO;
import com.cdacalumni.contentservice.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/opportunities")
public class OpportunityController {
    @Autowired
    private OpportunityService opportunityService;

    @PostMapping
    public ResponseEntity<OpportunityDTO> createOpportunity(@RequestBody OpportunityDTO dto) {
        return ResponseEntity.ok(opportunityService.createOpportunity(dto));
    }

    @GetMapping
    public ResponseEntity<List<OpportunityDTO>> getAllOpportunities() {
        return ResponseEntity.ok(opportunityService.getAllOpportunities());
    }
}
