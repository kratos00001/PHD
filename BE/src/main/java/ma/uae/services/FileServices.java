package ma.uae.services;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import ma.uae.models.FileDate;
import ma.uae.reposetory.FilesReposetory;
import ma.uae.students.model.Student;
import ma.uae.students.repository.StudentRepository;
import ma.uae.utils.FilesUtiles;

import java.net.MalformedURLException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;



@Service
@AllArgsConstructor
public class FileServices {
	
	@Autowired
	private final FilesReposetory repository;

		
	
	public FileDate uploadFile(MultipartFile file) throws IOException {
		
		FileDate fileData = repository.save(FileDate.builder().name(file.getOriginalFilename())
				.type(file.getContentType()).fileData(FilesUtiles.compressFile(file.getBytes())).build());
		if (fileData != null) {
			return fileData;
		}
		return null;
	}
	
	public byte[] downloadfileById(String fileId) {
		Optional<FileDate> dbImageData = repository.findById(Long.parseLong(fileId));
		byte[] images = FilesUtiles.decompressFile(dbImageData.get().getFileData());
		return images;
	}
	
	

}
