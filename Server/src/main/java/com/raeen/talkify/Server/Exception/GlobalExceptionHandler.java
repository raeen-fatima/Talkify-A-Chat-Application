package com.raeen.talkify.Server.Exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // Handle ResponseStatusException (400, 404, 409, etc.)
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<?> handleResponseStatusException(ResponseStatusException ex, HttpServletRequest request) {
        HttpStatus status = HttpStatus.valueOf(ex.getStatusCode().value());

        return ResponseEntity.status(status).body(
            Map.of(
                "timestamp", LocalDateTime.now(),
                "status", status.value(),
                "error", ex.getReason(),
                "path", request.getRequestURI()
            )
        );
    }

    // Handle RuntimeException with custom messages
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntime(RuntimeException ex, HttpServletRequest request) {
        String message = ex.getMessage();
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        if (message != null) {
            if (message.contains("User not found")) {
                status = HttpStatus.NOT_FOUND;
            } else if (message.contains("Invalid email or password")) {
                status = HttpStatus.UNAUTHORIZED;
            } else if (message.contains("already exists")) {
                status = HttpStatus.CONFLICT;
            }
        }

        return ResponseEntity.status(status).body(
            Map.of(
                "timestamp", LocalDateTime.now(),
                "status", status.value(),
                "error", message,
                "path", request.getRequestURI()
            )
        );
    }

    // Handle any unexpected exceptions (fallback)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGeneric(Exception ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
            Map.of(
                "timestamp", LocalDateTime.now(),
                "status", 500,
                "error", "Something went wrong",
                "details", ex.getMessage(),
                "path", request.getRequestURI()
            )
        );
    }
}
