package io.antigravity.gamingstats.infrastructure.persistence;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "matches")
public class MatchEntity extends PanacheEntity {

    @ManyToOne
    public GameEntity game;

    public LocalDateTime playedAt;

    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL, orphanRemoval = true)
    public List<StatisticEntity> statistics = new ArrayList<>();
}
