// package gestion;

// import java.util.Collections;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AuthenticationProvider;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.stereotype.Component;

// import gestion.dto.UtilisateurDTO;
// import gestion.service.UtilisateurService;

// @Component
// public class CustomAuthenticationProvider implements AuthenticationProvider {
//     @Autowired
// 	UtilisateurService users;
// 	@Override
//     public Authentication authenticate(Authentication auth) 
//       throws AuthenticationException {
//         String username = auth.getName();
//         String password = auth.getCredentials()
//             .toString();

//         if (users.login(new UtilisateurDTO()))) {
//             return new UsernamePasswordAuthenticationToken
//               (username, password, Collections.emptyList());
//         } else {
//             throw new 
//               BadCredentialsException("External system authentication failed");
//         }
//     }

//     @Override
//     public boolean supports(Class<?> auth) {
//         return auth.equals(UsernamePasswordAuthenticationToken.class);
//     }
// }