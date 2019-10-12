package ch.supsi.webapp.web.controller;

import ch.supsi.webapp.web.model.BlogPost;
import ch.supsi.webapp.web.services.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BlogpostController {
    private List<BlogPost> blogPosts = new ArrayList<>();

    @Autowired
    private BlogPostService service;

    /*
        REST POST
     */
    @RequestMapping(value="/blogposts", method= RequestMethod.POST)
    public ResponseEntity<BlogPost> add(@RequestBody BlogPost blogPost){
        service.post(blogPost);
        return new ResponseEntity<BlogPost>(blogPost, HttpStatus.CREATED);
    }

    /*
        REST GET
     */
    @RequestMapping(value="/blogposts", method= RequestMethod.GET)
    public List<BlogPost> getAllBlogPost(){
        return service.get();
    }

    /*
        REST GET ID
     */
    @RequestMapping(value="/blogposts/{id}", method=RequestMethod.GET)
    public ResponseEntity<BlogPost> getBlogPost(@PathVariable int id) {
        //blogPosts.forEach(e -> Integer.compare(e.getId(),id));
        if(service.exist(id)) {
            BlogPost blogPost = (BlogPost) service.getById(id).get();
            return new ResponseEntity<BlogPost>(blogPost, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
        REST PUT
     */
    @RequestMapping(value="/blogposts/{id}", method= RequestMethod.PUT)
    public ResponseEntity<BlogPost> update(@PathVariable int id, @RequestBody BlogPost jsonPost) {
        if(service.exist(id)) {
            service.put(id, jsonPost);
            BlogPost blogPost = (BlogPost) service.getById(id).get();
            return new ResponseEntity<BlogPost>(blogPost, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
        REST DELETE
     */
    @RequestMapping(value="/blogposts/{id}", method= RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<String> delete(@PathVariable int id){
        if(service.exist(id)) {
            service.remove(id);
            return  new ResponseEntity<>("{\"success\": true}", HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
