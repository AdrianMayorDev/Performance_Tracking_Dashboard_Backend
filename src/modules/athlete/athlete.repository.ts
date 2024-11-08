import prisma from '../../prisma/client.js'

export class AthleteRepository {
  async create(data: any) {
    return prisma.athlete.create({ data })
  }

  async getAll() {
    return prisma.athlete.findMany()
  }

  async getById(id: string) {
    return prisma.athlete.findUnique({
      where: { id },
      include: { metrics: true }
    })
  }

  async update(id: string, data: any) {
    return prisma.athlete.update({
      where: { id },
      data
    })
  }

  async delete(id: string) {
    return prisma.athlete.delete({
      where: { id }
    })
  }

  async deleteMetrics(athleteId: string) {
    return prisma.performanceMetric.deleteMany({
      where: { athleteId }
    })
  }
}
