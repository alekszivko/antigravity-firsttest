package io.antigravity.gamingstats.web.rest;

import io.antigravity.gamingstats.application.AuthService;
import io.antigravity.gamingstats.web.dto.AuthRequest;
import io.antigravity.gamingstats.web.dto.AuthResponse;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthResource {

    @Inject
    AuthService authService;

    @POST
    @Path("/register")
    public Response register(AuthRequest request) {
        authService.register(request.getUsername(), request.getPassword());
        return Response.status(Response.Status.CREATED).build();
    }

    @POST
    @Path("/login")
    public Response login(AuthRequest request) {
        try {
            String token = authService.login(request.getUsername(), request.getPassword());
            return Response.ok(new AuthResponse(token)).build();
        } catch (RuntimeException e) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(e.getMessage()).build();
        }
    }
}
