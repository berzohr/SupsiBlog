package ch.supsi.webapp.web.controller;

import ch.supsi.webapp.web.model.BlogPost;
import ch.supsi.webapp.web.model.Category;
import ch.supsi.webapp.web.model.Quote;
import ch.supsi.webapp.web.model.SearchModel;
import ch.supsi.webapp.web.services.BlogPostService;
import ch.supsi.webapp.web.services.CategoryService;
import ch.supsi.webapp.web.services.QuoteService;
import ch.supsi.webapp.web.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
public class HomeController {
    private List<BlogPost> blogPosts = new ArrayList<>();

    @Autowired
    private BlogPostService service;
    @Autowired
    private CategoryService categoriesService;
    @Autowired
    private UserService usersService;
    @Autowired
    private QuoteService quoteService;

    @GetMapping("/")
    public String index(Model model) {
        List<BlogPost> blogPosts = service.get();
        model.addAttribute("blogPosts", blogPosts);
        model.addAttribute("categories", categoriesService.get());
        model.addAttribute("categoryName", "All posts");
        return "index";
    }

    @GetMapping("/category/{id}")
    public String getPostCategories(@PathVariable int id, Model model){
        if(categoriesService.exist(id)){
            List<BlogPost> allBlogPosts = service.get();
            List<BlogPost> specificBlogPosts = new ArrayList<>();
            if(allBlogPosts.size() != 0){
                for (BlogPost b : allBlogPosts) {
                    if(b.getCategory().getId() == id){
                        specificBlogPosts.add(b);
                    }
                }
            }
            model.addAttribute("categories", categoriesService.get());
            model.addAttribute("blogPosts", specificBlogPosts);
            Optional<Category> category = categoriesService.getById(id);
            model.addAttribute("categoryName", category.get().getName());
            return "index";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blog/{id}")
    public String getBlogPostDettail(@PathVariable int id, Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(user.getAuthorities().iterator().next().getAuthority().contains("USER"));
        if (service.exist(id)) {
            if(service.getById(id).get().isVisible()){
                BlogPost blogPost = service.getById(id).get();
                model.addAttribute("blogPost", blogPost);
                model.addAttribute("categories", categoriesService.get());
                model.addAttribute("quotes", quoteService.get());
                return "blogpostDetails";
            }else if(user.getAuthorities().iterator().next().getAuthority().contains("USER")){
                throw new ResponseStatusException(HttpStatus.GONE);
            }else{
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/blog/{id}/trash")
    public String getBlogPostBin(@PathVariable int id, Model model) {
        if (service.exist(id)) {
            BlogPost blogPost = service.getById(id).get();
            model.addAttribute("blogPost", blogPost);
            model.addAttribute("categories", categoriesService.get());
            model.addAttribute("quotes", quoteService.get());
            return "blogpostDetails";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blog/new")
    public String getNewBlogPost(BlogPost blogPost, Model model) {
        model.addAttribute("blogPost", blogPost);
        model.addAttribute("categories", categoriesService.get());
        model.addAttribute("authors", usersService.get());
        model.addAttribute("categories", categoriesService.get());
        return "createBlogForm";
    }

    @PostMapping("/blog/new")
    public String sendNewBlogPost(@ModelAttribute("blogPost") BlogPost blogPost) {
        blogPost.setDate(new Date());
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        blogPost.setUser(usersService.findUserByUsername(user.getUsername()));
        blogPost.setVisible(true);
        service.post(blogPost);
        return "redirect:/";
    }

    @GetMapping("/blog/{id}/edit")
    public String getEditorById(@PathVariable int id, Model model) {

        if (service.exist(id) && service.getById(id).get().isVisible()) {
            BlogPost blogPost = (BlogPost) service.getById(id).get();
            model.addAttribute("blogPost", blogPost);
            model.addAttribute("categories", categoriesService.get());
            return "blogpostEditor";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("blog/{id}/edit")
    public String modifyBlogPostById(@PathVariable int id, @ModelAttribute("blogPost") BlogPost blogPost) {
        if (service.exist(id) && service.getById(id).get().isVisible()) {
            Date creation = service.getById(id).get().getDate();
            blogPost.setDate(creation);
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            blogPost.setUser(usersService.findUserByUsername(user.getUsername()));
            service.put(id, blogPost);
            return "redirect:/";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blog/{id}/delete")
    public String deleteBlogPost(@PathVariable int id) {
        if (service.exist(id)) {
            service.remove(id);
            return "redirect:/";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/blog/{id}/comment")
    public String comment(@PathVariable int id, Model model){
        model.addAttribute("blogPostId", id);
        model.addAttribute("categories", categoriesService.get());
        model.addAttribute("title", service.getById(id).get().getTitle());
        return "blogpostQuote";
    }

    @PostMapping("/blog/{id}/comment")
    public String addComment(@PathVariable int id, @ModelAttribute("quote") Quote quote){
        if(service.exist(id)){
            BlogPost post = service.getById(id).get();
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            quote.setUser(usersService.findUserByUsername(user.getUsername()));
            quote.setDate(new Date());
            quote.setBlogPost(post);
            quoteService.post(quote);
            return "redirect:/blog/"+id;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }


    }

    @GetMapping("/login")
    public String loginPage(){
        return "login";
    }

    @GetMapping("/register")
    public String registerPage(Model model) {
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") ch.supsi.webapp.web.model.User user) {
        usersService.registerUser(user.getUsername(), user.getPassword(), user.getEmail(), user.getName(), user.getSurname());
        return "redirect:/";
    }

    @GetMapping("/admin")
    public String adminPanel(Model model){
        List<BlogPost> blogPosts = service.get();
        List<ch.supsi.webapp.web.model.User> users = usersService.get();
        List<Category> categories = categoriesService.get();
        model.addAttribute("blogPosts", blogPosts);
        model.addAttribute("users", users);
        model.addAttribute("categories", categories);
        return "adminPanel";
    }

    @PostMapping("/admin")
    public String postAdminPanel(Model model){
        return "adminPanel";
    }

    @GetMapping("/blog/search")
    public @ResponseBody List<SearchModel> search(@RequestParam String q){

        List<BlogPost> blogPosts = service.get();
        List<SearchModel> blogFounded = new ArrayList<>();

        blogPosts.forEach(e -> {
            if(e.isVisible() && e.getTitle().toLowerCase().contains(q.toLowerCase())){
                blogFounded.add(new SearchModel(e.getId(), e.getTitle(), e.getText(), e.getUser().getUsername()));
            }else if(e.isVisible() && e.getText().toLowerCase().contains(q.toLowerCase())){
                blogFounded.add(new SearchModel(e.getId(), e.getTitle(), e.getText(), e.getUser().getUsername()));
            }
        });

        return blogFounded;
    }
}
