package ch.supsi.webapp.web.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Role {
    @Id
    @GeneratedValue
    private int id;

    @Column(columnDefinition = "TEXT")
    private String name;

    @OneToMany(mappedBy = "role")
    private List<User> users;

    public Role(){}
    public Role(String name){
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

