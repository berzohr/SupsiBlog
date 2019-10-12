package ch.supsi.webapp.web.model;

import com.sun.org.apache.xpath.internal.operations.Quo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Quote {
    @Id
    @GeneratedValue
    private int id;

    private int answerId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

    @ManyToOne
    @JoinColumn(name = "blogpost_id")
    private BlogPost blogPost;

    @Column(columnDefinition = "TEXT")
    private String text;

    private Date date;

//    @ManyToMany
//    private List<Quote> answers;

    public Quote(){};
    public Quote(User user, Date date, int answerId){
        this.users = user;
        this.date = date;
        this.answerId = answerId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAnswerId() {
        return answerId;
    }

    public User getUser() {
        return users;
    }

    public void setUser(User user) {
        this.users = user;
    }

    public BlogPost getBlogPost() {
        return blogPost;
    }

    public void setBlogPost(BlogPost blogPost) {
        this.blogPost = blogPost;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    //    public List<Quote> getAnswers() {
//        return answers;
//    }
//
//    public void setAnswers(List<Quote> answers) {
//        this.answers = answers;
//    }
}
