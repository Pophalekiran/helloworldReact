package com.example.helloworld.auth;

public record LoginResponse(boolean authenticated, String username) {
}
