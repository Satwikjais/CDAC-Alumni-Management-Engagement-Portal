package com.cdacalumni.contentservice.dto;

public class BlogDTO {
    private Long id;
    private String title;
    private String content;
    private String author;
    private String imageUrl;
    private Integer views;

    public BlogDTO() {}

    public BlogDTO(Long id, String title, String content, String author, String imageUrl, Integer views) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.imageUrl = imageUrl;
        this.views = views;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Integer getViews() { return views; }
    public void setViews(Integer views) { this.views = views; }
}
