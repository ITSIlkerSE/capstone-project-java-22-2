package de.neuefische.backend.security;

import de.neuefische.backend.security.service.AppUserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration

public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final AppUserDetailService appUserDetailService;

    public SecurityConfig(AppUserDetailService appUserDetailService) {
        this.appUserDetailService = appUserDetailService;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/api/user/register").permitAll()
                .antMatchers(HttpMethod.POST, "/api/component/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/component/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/component/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/component/**").permitAll()
                .and().httpBasic()
                .and().httpBasic().and().csrf().disable();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authorize) throws Exception {
        authorize.userDetailsService(appUserDetailService);
    }

}
