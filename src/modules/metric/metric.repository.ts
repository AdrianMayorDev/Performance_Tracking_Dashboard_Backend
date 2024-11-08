import prisma from '../../prisma/client.js'

export class MetricRepository {
  async create(data: any) {
    return prisma.performanceMetric.create({ data })
  }

  async getByAthleteId(athleteId: string, metricType?: string) {
    return prisma.performanceMetric.findMany({
      where: {
        athleteId,
        ...(metricType && { metricType })
      }
    })
  }

  async getById(metricId: string) {
    return prisma.performanceMetric.findUnique({
      where: { id: metricId }
    })
  }

  async delete(metricId: string) {
    return prisma.performanceMetric.delete({
      where: { id: metricId }
    })
  }
}
