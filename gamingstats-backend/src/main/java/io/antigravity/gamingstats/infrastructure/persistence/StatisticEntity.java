package io.antigravity.gamingstats.infrastructure.persistence;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "statistics")
public class StatisticEntity extends PanacheEntity {

    @ManyToOne
    @JoinColumn(name = "match_id")
    public MatchEntity match;

    public String playerName;
    public Integer score;
    public String result;
}
