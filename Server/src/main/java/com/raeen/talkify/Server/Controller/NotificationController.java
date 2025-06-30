package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.Model.Notification;
import com.raeen.talkify.Server.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{userId}")
    public List<Notification> getUserNotifications(@PathVariable Long userId) {
        return notificationService.getNotificationsForUser(userId);
    }

    @PostMapping("/mark-read/{notificationId}")
    public void markNotificationAsRead(@PathVariable Long notificationId) {
        notificationService.markAsRead(notificationId);
    }

    @PostMapping("/mark-all-read/{userId}")
    public void markAllNotificationsAsRead(@PathVariable Long userId) {
        notificationService.markAllAsRead(userId);
    }
}
