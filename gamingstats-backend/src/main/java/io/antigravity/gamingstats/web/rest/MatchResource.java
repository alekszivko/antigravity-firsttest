package io.antigravity.gamingstats.web.rest;

import io.antigravity.gamingstats.infrastructure.persistence.MatchEntity;
import io.antigravity.gamingstats.infrastructure.persistence.StatisticEntity;
import jakarta.annotation.security.RolesAllowed;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.util.List;

@Path("/matches")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RolesAllowed("USER")
public class MatchResource {

    @GET
    public List<MatchEntity> listAll() {
        return MatchEntity.listAll();
    }

    @POST
    @Transactional
    public Response create(MatchEntity match) {
        if (match.playedAt == null) {
            match.playedAt = LocalDateTime.now();
        }

        // Ensure bidirectional relationship is set for JPA
        if (match.statistics != null) {
            for (StatisticEntity stats : match.statistics) {
                stats.match = match;
            }
        }

        match.persist();
        return Response.status(Response.Status.CREATED).entity(match).build();
    }

    @GET
    @Path("/{id}")
    public MatchEntity get(@PathParam("id") Long id) {
        return MatchEntity.findById(id);
    }
}
