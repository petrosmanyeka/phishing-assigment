package com.Mapoto.phishing.Reposito;

import com.Mapoto.phishing.Entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserReposi extends JpaRepository<AppUser,Long> {
}
