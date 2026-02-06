package io.antigravity.gamingstats.infrastructure.web;

import jakarta.annotation.Priority;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;
import jakarta.ws.rs.container.PreMatching;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
@PreMatching
@Priority(Priorities.AUTHENTICATION - 100)
public class CorsFilter implements ContainerRequestFilter, ContainerResponseFilter {

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        if (requestContext.getMethod().equalsIgnoreCase("OPTIONS")) {
            requestContext.abortWith(Response.ok()
                    .header("Access-Control-Allow-Origin", requestContext.getHeaders().getFirst("Origin"))
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization, x-requested-with")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build());
        }
    }

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
            throws IOException {
        String origin = requestContext.getHeaders().getFirst("Origin");
        if (origin != null && responseContext.getHeaders().getFirst("Access-Control-Allow-Origin") == null) {
            responseContext.getHeaders().add("Access-Control-Allow-Origin", origin);
            responseContext.getHeaders().add("Access-Control-Allow-Headers",
                    "origin, content-type, accept, authorization, x-requested-with");
            responseContext.getHeaders().add("Access-Control-Allow-Credentials", "true");
            responseContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        }
    }
}
