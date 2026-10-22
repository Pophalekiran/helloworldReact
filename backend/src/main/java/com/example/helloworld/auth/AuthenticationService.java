package com.example.helloworld.auth;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private static final String USERNAME = "kiran";
    private static final String PASSWORD = "kiran";

    public LoginResponse authenticate(LoginRequest request) {
        if (!USERNAME.equals(request.username()) || !PASSWORD.equals(request.password())) {
            throw new InvalidCredentialsException();
        }

        return new LoginResponse(true, USERNAME);
    }
}
