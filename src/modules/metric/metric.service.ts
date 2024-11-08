
import { AthleteRepository } from '../athlete/athlete.repository.js'
import { v4 as uuidv4 } from 'uuid'
import { MetricRepository } from './metric.repository.js'

export class MetricService {
  private metricRepo = new MetricRepository()
  private athleteRepo = new AthleteRepository()

  async createMetric(athleteId: string, data: any) {
    const { metricType, value, unit } = data
    const athlete = await this.athleteRepo.getById(athleteId)
    if (!athlete) throw new Error('Athlete not found')

    if (!metricType || !value || !unit) throw new Error('MetricType, value, and unit are required')
    const valueFloat = parseFloat(value)
    if (isNaN(valueFloat)) throw new Error('Value must be a valid number')

    return this.metricRepo.create({
      id: uuidv4(),
      athleteId,
      metricType,
      value: valueFloat,
      unit,
      timestamp: new Date()
    })
  }

  async getMetricsByAthleteId(athleteId: string, metricType?: string) {
    return this.metricRepo.getByAthleteId(athleteId, metricType)
  }

  async deleteMetric(athleteId: string, metricId: string) {
    const athlete = await this.athleteRepo.getById(athleteId)
    if (!athlete) throw new Error('Athlete not found')
    
    const metric = await this.metricRepo.getById(metricId)
    if (!metric) throw new Error('Metric not found')
    
    return this.metricRepo.delete(metricId)
  }
}
