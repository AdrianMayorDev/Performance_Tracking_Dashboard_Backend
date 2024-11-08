
import type { Context } from 'hono'
import { MetricService } from './metric.service.js'

const metricService = new MetricService()

export class MetricController {
  static async createMetric(c: Context) {
    const { id: athleteId } = c.req.param()
    const data = await c.req.json()
    try {
      const result = await metricService.createMetric(athleteId, data)
      return c.json(result)
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400)
    }
  }

  static async getMetricsByAthleteId(c: Context) {
    const { id: athleteId } = c.req.param()
    const metricType = c.req.query('metricType')
    const metrics = await metricService.getMetricsByAthleteId(athleteId, metricType)
    return c.json(metrics)
  }

  static async deleteMetric(c: Context) {
    const { athleteId, metricId } = c.req.param()
    try {
      await metricService.deleteMetric(athleteId, metricId)
      return c.json({ message: 'Metric deleted successfully' })
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404)
    }
  }
}
