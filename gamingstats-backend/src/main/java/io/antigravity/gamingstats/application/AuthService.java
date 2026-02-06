package io.antigravity.gamingstats.application;

import io.antigravity.gamingstats.infrastructure.persistence.UserEntity;
import io.smallrye.jwt.build.Jwt;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.eclipse.microprofile.jwt.Claims;
import io.quarkus.elytron.security.common.BcryptUtil;

import java.util.Arrays;
import java.util.HashSet;

@ApplicationScoped
public class AuthService {

    @Transactional
    public void register(String username, String password) {
        if (UserEntity.find("username", username).firstResult() != null) {
            return; // Already exists, just return (or we could throw a custom exception with a
                    // mapper)
        }
        UserEntity user = new UserEntity();
        user.username = username;
        user.password = BcryptUtil.bcryptHash(password);
        user.role = "USER";
        user.persist();
    }

    public String login(String username, String password) {
        UserEntity user = UserEntity.find("username", username).firstResult();
        if (user == null || !BcryptUtil.matches(password, user.password)) {
            throw new RuntimeException("Invalid credentials");
        }

        return Jwt.issuer("https://example.com/issuer")
                .upn(username)
                .groups(new HashSet<>(Arrays.asList(user.role)))
                .claim(Claims.full_name.name(), username)
                .sign();
    }
}
