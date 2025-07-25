package com.raeen.talkify.Server.DTO;

public class AuthRequest {
    private String email;
    private String password;

    public AuthRequest() {
}

    public AuthRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
