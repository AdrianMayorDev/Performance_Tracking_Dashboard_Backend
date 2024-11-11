# Performance Tracking Dashboard Backend

This is the backend of the Performance Tracking Dashboard project, developed with Node.js, TypeScript, Hono and Prisma. It provides an API to manage athletes and their performance metrics.

## Requirements

-   Node.js (version 14 or higher)
-   PostgreSQL

## Installation

1. Clone the repository:

```sh
git clone https://github.com/AdrianMayorDev/Performance_Tracking_Dashboard_Backend.git
cd Performance_Tracking_Dashboard_Backend
```

2. Install the dependencies:

```sh
npm install
npm run dev
```

3. Set up the environment variables:
   Create a .env file in the root of the project with the following content, adjusting the values ​​according to your configuration:

```sh
DATABASE_URL="postgresql://postgres:8989@localhost:5433/athletesTest?schema=public"
SERVER_PORT=3000
```

4. Run the database migrations:

```sh
npx prisma migrate dev --name init
```

5. Generate the Prisma client:

```sh
npx prisma generate
```

## Usage

1. Start the server in development mode:

```sh
npm run dev
```

2. Open your browser and go to `http://localhost:3000` to verify that the server is running.

## Endpoints

### Athletes

-   Create an athlete

```
POST /athletes
```

Request body:

```json
{
	"name": "John Doe",
	"age": 25,
	"team": "Team A"
}
```

-   Get all athletes

```
GET /athletes
```

-   Get an athlete by ID

```
GET /athletes/:id
```

-   Update an athlete

```
PUT /athletes/:id
```

Request body:

```json
{
	"name": "John Doe",
	"age": 26,
	"team": "Team B"
}
```

-   Delete an athlete

```
DELETE /athletes/:id
```

Request body

```json
{
	"name": "John Doe",
	"age": 26,
	"team": "Team B"
}
```

## Metrics

-   Create a metric

```
POST /metrics/:athleteId
```

Request body:

```json
{
	"metricType": "Speed",
	"value": 9.58,
	"unit": "s"
}
```

-   Get metrics by athlete ID

```
GET /metrics/:athleteId
```

-   Delete a metric

```
DELETE /metrics/:atheleteId/:metricId
```

## Project structure

```
src/
├── application/
│ ├── dtos/
│ │ ├── AthleteDTO.ts
│ │ └── PerformanceMetricDTO.ts
│ └── services/
│ ├── AthleteService.ts
│ └── MetricService.ts
├── domain/
│ ├── entities/
│ │ ├── Athlete.ts
│ │ └── PerformanceMetric.ts
│ ├── repositories/
│ │ ├── AthleteRepository.ts
│ │ └── PerformanceMetricRepository.ts
├── infrastructure/
│ ├── prism/
│ │ ├── PrismaAthleteRepository.ts
│ │ └── PrismaPerformanceMetricRepository.ts
│ ├── server/
│ │ └── Server.ts
│ └── config/
│ └── env.ts
├── interfaces/
│ ├── controllers/
│ │ ├── AthleteController.ts
│ │ └── MetricController.ts
│ └── routes/
│ ├── AthleteRoutes.ts
│ └── MetricRoutes.ts
└── prism/
 └── client.ts
```
