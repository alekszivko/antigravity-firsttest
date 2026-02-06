-- Seed Initial User (password is 'password' hashed with Bcrypt)
INSERT INTO users (id, username, password, role) VALUES (nextval('hibernate_sequence'), 'admin', '$2a$10$e0myzXyCQX7PrjS8ST9S7uKQzHZD8ueGfJdO./.F.3.D8Y9A.K.K', 'USER');

-- Seed Initial Games
INSERT INTO games (id, title, genre) VALUES (nextval('hibernate_sequence'), 'Counter-Strike 2', 'FPS');
INSERT INTO games (id, title, genre) VALUES (nextval('hibernate_sequence'), 'Dota 2', 'MOBA');
INSERT INTO games (id, title, genre) VALUES (nextval('hibernate_sequence'), 'Valorant', 'FPS');
