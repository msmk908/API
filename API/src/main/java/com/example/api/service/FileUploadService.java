package com.example.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileUploadService {

    @Autowired
    private TaskExecutor taskExecutor;

    public void processFileUpload(MultipartFile file){
        taskExecutor.execute(() -> {
            try{
                // 파일을 저장할 경로 설정
                Path filePath = Paths.get("C:/Users/codepc/uploads/" + file.getOriginalFilename());

                // 파일을 실제로 저장
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                
                // 파일 저장 후 추가 처리 기능
                // 예: 데이터베이스에 파일 정보 저장

                System.out.println("파일 업로드 완료: " + file.getOriginalFilename());
            } catch(IOException e){
                e.printStackTrace();
            }
        });
    }

}
