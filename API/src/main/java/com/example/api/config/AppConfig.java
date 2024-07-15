package com.example.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

@Configuration
public class AppConfig {

    @Bean
    public MultipartResolver multipartResolver(){
        return new StandardServletMultipartResolver();
    }

    @Bean
    public TaskExecutor asyncTaskExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10); // 최소 스레드 개수
        executor.setMaxPoolSize(20); // 최대 스레드 개수
        executor.setQueueCapacity(100); // 대기 큐 크기
        executor.setThreadNamePrefix("FileUpload-"); // 스레드 이름 접두사
        executor.initialize();
        return executor;
    }

}
