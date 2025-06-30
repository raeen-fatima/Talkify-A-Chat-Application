package com.raeen.talkify.Server.Service;

import com.raeen.talkify.Server.DTO.AuthRequest;
import com.raeen.talkify.Server.DTO.AuthResponse;
import com.raeen.talkify.Server.Model.User;
import com.raeen.talkify.Server.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthenticationService {

@Autowired
UserRepository userRepository;

@Autowired
PasswordEncoder passwordEncoder;

@Autowired
JwtService jwtService;

@Autowired
AuthenticationManager authenticationManager;


    // Register method
    public AuthResponse register(User request) {
        if (request.getEmail() == null || request.getEmail().isBlank() ||
            request.getPassword() == null || request.getPassword().isBlank() ||
            request.getName() == null || request.getName().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Required fields missing");
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User with this email already exists");
        }

        if (request.getRole() == null || request.getRole().isBlank()) {
            request.setRole("USER");
        }

        request.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(request);

        String token = jwtService.generateToken(request.getEmail());
        return new AuthResponse(token);
    }

    // Login method
    public AuthResponse login(AuthRequest request) {
        // Validate inputs
        if (request.getEmail() == null || request.getPassword() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email and password are required");
        }

        // Check if user exists
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        // Authenticate credentials
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (BadCredentialsException ex) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());
        return new AuthResponse(token);
    }
}
