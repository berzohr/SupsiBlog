package ch.supsi.webapp.web.services;

import ch.supsi.webapp.web.model.Role;
import ch.supsi.webapp.web.model.User;
import ch.supsi.webapp.web.repository.RoleRepository;
import ch.supsi.webapp.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    public List<User> get() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(users::add);
        return users;
    }

    public Optional<User> getById(int id) {
        return userRepository.findById(id);
    }
    public void post(User post) {
        userRepository.save(post);
    }
    public void remove(int id) {
        userRepository.deleteById(id);
    }

    public void put(int id, User user) {
        user.setId(id);
        userRepository.save(user);
    }

    public boolean exist(int id) {
        return userRepository.existsById(id);
    }

    @PostConstruct
    public void init(){
        if(userRepository.count() == 0) {
            Role admin = new Role("ROLE_ADMIN");
            admin = roleRepository.save(admin);
            Role user = new Role("ROLE_USER");
            user = roleRepository.save(user);
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String password = "1234";
            password = encoder.encode(password);

            User adminUser = new User("admin", password, "admin@test.com", admin, "Administrator", "");
            userRepository.save(adminUser);
            User userU = new User("user", password, "user@test.com", user, "User",  "");
            userRepository.save(userU);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        List<GrantedAuthority> auth = AuthorityUtils.createAuthorityList (user.getRole().getName());
        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), true, true, true, true, auth);
    }

    public User findUserByUsername(String username){
        List<User> users = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(users::add);
        for (User u : users){
            if(u.getUsername().equals(username))
                return u;
        }
        return null;
    }

    public boolean registerUser(String username, String password, String email, String name, String surname){
        if(findUserByUsername(username) ==  null){
            Role user = findRoleByName("USER");
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            password = encoder.encode(password);

            User newUser = new User(username, password, email, user, name, surname);
            userRepository.save(newUser);
            return true;
        } else {
            return false;
        }
    }

    private Role findRoleByName(String rolename){
        List<Role> roles = new ArrayList<>();
        roleRepository.findAll().iterator().forEachRemaining(roles::add);
        for (Role r : roles){
            if(r.getName().contains(rolename))
                return r;
        }
        return null;
    }
}
