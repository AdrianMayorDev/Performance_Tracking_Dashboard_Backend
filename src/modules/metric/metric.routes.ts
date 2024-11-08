import { MetricController } from './metric.controller.js'
import { Hono } from 'hono'

const metricRoutes = new Hono()

metricRoutes.post('/metrics/:id', MetricController.createMetric)
metricRoutes.get('/metrics/:id', MetricController.getMetricsByAthleteId)
metricRoutes.delete('/metrics/:athleteId/:metricId', MetricController.deleteMetric)

export default metricRoutes
