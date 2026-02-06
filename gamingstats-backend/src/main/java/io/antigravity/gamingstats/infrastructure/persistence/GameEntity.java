package io.antigravity.gamingstats.infrastructure.persistence;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "games")
public class GameEntity extends PanacheEntity {
    public String title;
    public String genre;
}
