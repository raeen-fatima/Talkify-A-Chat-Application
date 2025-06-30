package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.DTO.AuthRequest;
import com.raeen.talkify.Server.DTO.AuthResponse;
import com.raeen.talkify.Server.Model.User;
import com.raeen.talkify.Server.Service.AuthenticationService;
import com.raeen.talkify.Server.Controller.AuthController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody User user) {
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
