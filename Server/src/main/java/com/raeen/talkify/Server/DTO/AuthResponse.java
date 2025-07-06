package com.raeen.talkify.Server.DTO;
import com.raeen.talkify.Server.Model.User;

public class AuthResponse {
    private String token;
    private User user;


    public AuthResponse(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public User getUser() {
        return user;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
