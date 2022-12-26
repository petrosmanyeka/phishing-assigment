package com.Mapoto.phishing.Contro;

import com.Mapoto.phishing.Entity.AppUser;
import com.Mapoto.phishing.Reposito.AppUserReposi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
public class AppUserContro {

    @Autowired
    private AppUserReposi appUserReposi;

    @PostMapping("/save")

    public String saveAppUsers(@RequestBody AppUser appUser){
        appUserReposi.save(appUser);
        return "user has been saved";
    }
    @GetMapping("/gets")
    public List<AppUser> getUser(){
        return appUserReposi.findAll();
    }
}
