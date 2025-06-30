package com.raeen.talkify.Server.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;       // Who should see this notification
    private String message;    // Notification text

    @Column(name = "is_read")
    private boolean read = false;

    private LocalDateTime createdAt;

    public Notification() {}

    public Notification(Long userId, String message, LocalDateTime createdAt) {
        this.userId = userId;
        this.message = message;
        this.createdAt = createdAt;
    }
    public void setId(Long id) {
    this.id = id;
}

   //for testing purposes
    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isRead() {
        return read;
    }

    public void setRead(boolean read) {
        this.read = read;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
