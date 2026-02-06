package io.antigravity.gamingstats.web.rest;

import io.antigravity.gamingstats.infrastructure.persistence.GameEntity;
import jakarta.annotation.security.RolesAllowed;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/games")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RolesAllowed("USER")
public class GameResource {

    @GET
    public List<GameEntity> listAll() {
        return GameEntity.listAll();
    }

    @POST
    @Transactional
    public Response create(GameEntity game) {
        game.persist();
        return Response.status(Response.Status.CREATED).entity(game).build();
    }

    @GET
    @Path("/{id}")
    public GameEntity get(@PathParam("id") Long id) {
        return GameEntity.findById(id);
    }
}
