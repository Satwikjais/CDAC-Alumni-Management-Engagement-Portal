package com.cdacalumni.userservice.controller;

import com.cdacalumni.userservice.dto.MemberDTO;
import com.cdacalumni.userservice.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping
    public ResponseEntity<MemberDTO> createMember(@RequestBody MemberDTO memberDTO) {
        return ResponseEntity.ok(memberService.createMember(memberDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<MemberDTO> getMemberById(@PathVariable Long id) {
        return ResponseEntity.ok(memberService.getMemberById(id));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<MemberDTO> getMemberByEmail(@PathVariable String email) {
        return ResponseEntity.ok(memberService.getMemberByEmail(email));
    }

    @GetMapping
    public ResponseEntity<List<MemberDTO>> getAllMembers(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String batch,
            @RequestParam(required = false) String course,
            @RequestParam(required = false) String company) {
        return ResponseEntity.ok((List<MemberDTO>) memberService.getFilteredMembers(search, batch, course, company));
    }

    @GetMapping("/alumni/list")
    public ResponseEntity<List<MemberDTO>> getAllAlumni() {
        return ResponseEntity.ok(memberService.getAllAlumni());
    }

    @PutMapping("/{id}")
    public ResponseEntity<MemberDTO> updateMember(@PathVariable Long id, @RequestBody MemberDTO memberDTO) {
        return ResponseEntity.ok(memberService.updateMember(id, memberDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.ok("Member deleted successfully");
    }
}
