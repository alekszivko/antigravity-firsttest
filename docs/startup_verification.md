# Startup Verification Guide

## Backend (Quarkus) - Ready to Test

### Configuration Summary
- **Database**: PostgreSQL with Dev Services (requires Docker running)
- **Security**: JWT-based authentication using `quarkus-security-jpa`
- **CORS**: Enabled for `http://localhost:4200`
- **Port**: 8080 (default)

### Startup Command
```bash
cd gamingstats-backend
mvn quarkus:dev
```

### Expected Behavior
1. Quarkus should start and auto-provision a PostgreSQL container via Dev Services
2. Database schema will be created automatically
3. `import.sql` will seed an admin user and sample games
4. Application will be available at `http://localhost:8080`

### Key Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - Login (returns JWT)
- `GET /api/games` - List all games
- `POST /api/games` - Create game (requires auth)
- `GET /api/matches` - List matches
- `POST /api/matches` - Create match (requires auth)

### Troubleshooting
- **Docker not running**: Dev Services requires Docker Desktop to be running
- **Port 8080 in use**: Stop any other services using this port
- **Debug port issue**: Use `mvn quarkus:dev -Ddebug=false` to disable debugging

---

## Frontend (Angular) - Ready to Test

### Configuration Summary
- **Version**: Angular 19.2.0
- **Styling**: TailwindCSS (needs to be configured after `npm install` completes)
- **Port**: 4200 (default)

### Startup Commands
```bash
cd gamingstats-frontend
npm install  # Install dependencies
npm start    # Start dev server
```

### Expected Behavior
1. Angular dev server starts on `http://localhost:4200`
2. Application loads the default Angular welcome page
3. Ready for component development

### Next Steps for Frontend
After successful `npm install`:
1. Configure TailwindCSS in `tailwind.config.js`
2. Add TailwindCSS directives to `src/styles.css`
3. Create Angular components for the gaming stats app
4. Integrate with backend API endpoints

---

## Verification Checklist

### Backend
- [ ] `mvn quarkus:dev` starts without errors
- [ ] PostgreSQL container is provisioned
- [ ] Can access `http://localhost:8080` (should see 404 or Quarkus page)
- [ ] Can register a user via POST to `/api/auth/register`
- [ ] Can login and receive JWT token

### Frontend  
- [ ] `npm install` completes successfully
- [ ] `npm start` starts dev server
- [ ] Can access `http://localhost:4200`
- [ ] Angular application loads in browser

---

## Known Issues

### Sandbox Limitations
Due to sandbox restrictions, I cannot:
- Run Maven commands (restricted access to `.m2/repository`)
- Run npm commands (network restrictions to npm registry)
- Start servers or bind to ports

### What I've Verified
✅ **Backend code structure** - All DDD layers properly organized  
✅ **Dependencies in pom.xml** - All Quarkus extensions are correct  
✅ **Entity mappings** - JPA entities properly annotated  
✅ **REST endpoints** - All API resources defined  
✅ **Security configuration** - JWT and user authentication set up  
✅ **Frontend project structure** - Angular CLI initialized correctly  
✅ **Package.json** - Angular 19.2.0 dependencies aligned

### What Needs Manual Testing
⚠️ **Backend startup** - You need to run `mvn quarkus:dev`  
⚠️ **Frontend startup** - You need to run `npm install && npm start`  
⚠️ **Docker** - Ensure Docker Desktop is running for PostgreSQL Dev Services  
⚠️ **Network connectivity** - Ensure npm can reach registry.npmjs.org
