package ch.supsi.webapp.web.services;

import ch.supsi.webapp.web.model.Blog;
import ch.supsi.webapp.web.model.BlogPost;
import ch.supsi.webapp.web.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {
    @Autowired
    private BlogPostRepository blogRepository;

    public List<BlogPost> get(){
        List<BlogPost> blogPosts = new ArrayList<>();
        blogRepository.findAll().iterator().forEachRemaining(blogPosts::add);
        return blogPosts;
    }

    public Optional<BlogPost> getById(int id){
        return blogRepository.findById(id);
    }

    public void post(BlogPost post){
        blogRepository.save(post);
    }

    public void remove(int id){
        BlogPost post = blogRepository.getOne(id);
        post.setVisible(false);
        blogRepository.save(post);
    }

    public void put(int id, BlogPost blogPost){
        blogPost.setId(id);
        blogRepository.save(blogPost);
    }

    public boolean exist(int id){
        return blogRepository.existsById(id);
    }
}
