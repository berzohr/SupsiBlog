package ch.supsi.webapp.web.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Blog {
    @Id
    @GeneratedValue
    private int id;

    @OneToMany(mappedBy = "blog")
    private List<BlogPost> blogPosts;

    @Column(columnDefinition = "TEXT")
    private String name;

    public Blog() {
    }

    public Blog(List<BlogPost> blogPosts) {
        this.blogPosts = blogPosts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<BlogPost> getBlogPost() {
        return blogPosts;
    }

    public void setBlogPost(List<BlogPost> blogPosts) {
        this.blogPosts = blogPosts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

