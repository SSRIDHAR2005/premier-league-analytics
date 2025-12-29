# Football Analytics Dashboard

A modern, production-ready React frontend for a full-stack football analytics application. This dashboard provides comprehensive player statistics with advanced search, filtering, and sorting capabilities.

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Features

- Real-time data fetching from Spring Boot backend
- Search players by name
- Filter by team and position
- Sort by goals, assists, xG, and xAG
- Responsive design for mobile and desktop
- Clean loading and error states
- Statistics overview cards
- Professional table layout with hover effects

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Spring Boot backend running at `http://localhost:8080`

## Installation

1. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── FilterControls.tsx    # Team and position filter dropdowns
│   ├── PlayerTable.tsx        # Main data table with sorting
│   └── SearchBar.tsx          # Search input component
├── pages/
│   └── Dashboard.tsx          # Main dashboard page with state management
├── services/
│   └── api.ts                 # API service for backend communication
├── App.tsx                    # Root component
└── main.tsx                   # Application entry point
```

## Backend Integration

The frontend expects the Spring Boot backend to be running at `http://localhost:8080` with the following endpoint:

- `GET /players` - Returns an array of player objects

### Expected API Response Format

```json
[
  {
    "name": "Player Name",
    "nation": "Country",
    "pos": "Position",
    "age": 25,
    "mp": 38,
    "starts": 35,
    "min": 3150,
    "gls": 20,
    "ast": 10,
    "pk": 2,
    "crdy": 5,
    "crdr": 0,
    "xg": 18.5,
    "xag": 8.3,
    "team": "Team Name"
  }
]
```

## CORS Configuration

Ensure your Spring Boot backend is configured to allow CORS requests from the frontend origin. Add the following to your Spring Boot application:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Features in Detail

### Search
Type in the search bar to filter players by name in real-time.

### Filters
- **Team Filter**: Select a specific team to view only their players
- **Position Filter**: Filter players by their position (GK, DF, MF, FW, etc.)

### Sorting
Click on column headers (Goals, Assists, xG, xAG) to sort the table. Click again to reverse the sort order.

### Statistics Cards
View aggregated statistics for the current filtered view:
- Total number of players
- Combined goals
- Combined assists

## Troubleshooting

### Backend Connection Issues

If you see a connection error:
1. Verify the Spring Boot backend is running at `http://localhost:8080`
2. Check CORS configuration in the backend
3. Test the endpoint directly: `curl http://localhost:8080/players`

### Build Issues

If you encounter build errors:
1. Clear node_modules: `rm -rf node_modules package-lock.json`
2. Reinstall dependencies: `npm install`
3. Try rebuilding: `npm run build`
