import { Hono } from 'hono'
import { cors } from 'hono/cors'
import athleteRoutes from './modules/athlete/athlete.routes.js'
import metricRoutes from './modules/metric/metric.routes.js'

const app = new Hono()


app.use(
  '*',
  cors({
    origin: 'http://localhost:5173', // Cambia esto al origen de tu frontend
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.route('/', athleteRoutes)
app.route('/', metricRoutes)

export default app