package com.example.helloworld.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    private static final Logger logger = LoggerFactory.getLogger(CorsConfig.class);
    private final String allowedOrigin;

    public CorsConfig(
            @Value("${app.cors.allowed-origin:http://localhost:5173}") String allowedOrigin
    ) {
        this.allowedOrigin = allowedOrigin;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        logger.info("Configuring CORS for origin: {}", allowedOrigin);
        registry.addMapping("/api/**")
                .allowedOrigins(allowedOrigin)
                .allowedMethods("POST")
                .allowedHeaders("Content-Type");
    }
}
