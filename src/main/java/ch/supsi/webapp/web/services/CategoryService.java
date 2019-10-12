package ch.supsi.webapp.web.services;

import ch.supsi.webapp.web.model.Category;
import ch.supsi.webapp.web.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;


    public List<Category> get() {
        List<Category> categories = new ArrayList<>();
        repository.findAll().iterator().forEachRemaining(categories::add);
        return categories;
    }

    public Optional<Category> getById(int id) {
        return repository.findById(id);
    }

    public void post(Category post) {
        repository.save(post);
    }

    public void remove(int id) {
        repository.deleteById(id);
    }

    public void put(int id, Category category) {
        category.setId(id);
        repository.save(category);
    }

    public boolean exist(int id) {
        return repository.existsById(id);
    }

    @PostConstruct
    public void init(){
        if(repository.findAll().size() == 0) {
            repository.save(new Category("Cultura"));
            repository.save(new Category("Scienza"));
            repository.save(new Category("Sport"));
        }
    }
}
