package com.raeen.talkify.Server.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "group_members")
public class GroupMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "group_id")
    private Long groupId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "joined_at")
    private LocalDateTime joinedAt;

    // Constructors
    public GroupMember() {}
    // For test where you set id manually

    public GroupMember(Long id, Long groupId, Long userId) {
        this.id = id;
        this.groupId = groupId;
        this.userId = userId;
        this.joinedAt = LocalDateTime.now();
    }
        // For service where id is auto-generated

    public GroupMember(Long groupId, Long userId) {
    this.groupId = groupId;
    this.userId = userId;
    this.joinedAt = LocalDateTime.now();
}


    // Getters and Setters
    public Long getId() { return id; }

    public Long getGroupId() { return groupId; }
    public void setGroupId(Long groupId) { this.groupId = groupId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public LocalDateTime getJoinedAt() { return joinedAt; }
    public void setJoinedAt(LocalDateTime joinedAt) { this.joinedAt = joinedAt; }
}
