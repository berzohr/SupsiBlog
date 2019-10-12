package ch.supsi.webapp.web.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private int id;

    @Column(columnDefinition = "TEXT")
    private String name;

    @OneToMany(mappedBy = "category")
    private List<BlogPost> blogPosts;

    public Category(){}
    public Category(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id){
        this.id = id;
    }

    public int getId(){
        return this.id;
    }

}

