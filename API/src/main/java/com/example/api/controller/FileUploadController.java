package com.example.api.controller;

import com.example.api.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file")MultipartFile file){
        // 파일을 업로드 서비스에 전달하여 비동기적으로 처리
        fileUploadService.processFileUpload(file);

        // 클라이언트에게 성공적인 응답 반환
        return ResponseEntity.ok("파일 업로드 시작");
    }
}
