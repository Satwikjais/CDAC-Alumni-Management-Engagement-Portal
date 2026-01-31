package com.cdacalumni.contentservice.service;

import com.cdacalumni.contentservice.dto.BlogDTO;
import com.cdacalumni.contentservice.entity.Blog;
import com.cdacalumni.contentservice.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public BlogDTO createBlog(BlogDTO blogDTO) {
        Blog blog = new Blog();
        blog.setTitle(blogDTO.getTitle());
        blog.setContent(blogDTO.getContent());
        blog.setAuthor(blogDTO.getAuthor());
        blog.setImageUrl(blogDTO.getImageUrl());
        blog.setViews(0);

        Blog savedBlog = blogRepository.save(blog);
        return convertToDTO(savedBlog);
    }

    public BlogDTO getBlogById(Long id) {
        Blog blog = blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));
        blog.setViews(blog.getViews() + 1);
        blogRepository.save(blog);
        return convertToDTO(blog);
    }

    public List<BlogDTO> getAllBlogs() {
        return blogRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public BlogDTO updateBlog(Long id, BlogDTO blogDTO) {
        Blog blog = blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        blog.setTitle(blogDTO.getTitle());
        blog.setContent(blogDTO.getContent());
        blog.setAuthor(blogDTO.getAuthor());
        blog.setImageUrl(blogDTO.getImageUrl());
        blog.setUpdatedAt(LocalDateTime.now());

        Blog updatedBlog = blogRepository.save(blog);
        return convertToDTO(updatedBlog);
    }

    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }

    private BlogDTO convertToDTO(Blog blog) {
        return new BlogDTO(
                blog.getId(),
                blog.getTitle(),
                blog.getContent(),
                blog.getAuthor(),
                blog.getImageUrl(),
                blog.getViews()
        );
    }
}
