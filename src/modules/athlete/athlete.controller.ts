import { AthleteService } from './athlete.service.js'
import type { Context } from 'hono'

const athleteService = new AthleteService()


export class AthleteController {
    static async createAthlete(c: Context) {
        try {
            const data = await c.req.json()
            const result = await athleteService.createAthlete(data)
            return c.json(result)
        } catch (error) {
      return c.json({ error: (error as Error).message }, 400)
    }
  }

  static async getAthletes(c: Context) {
    const athletes = await athleteService.getAthletes()
    return c.json(athletes)
  }

  static async getAthleteById(c: Context) {
    const { id } = c.req.param()
    const athlete = await athleteService.getAthleteById(id)
    return athlete ? c.json(athlete) : c.json({ error: 'Athlete not found' }, 404)
  }

  static async updateAthlete(c: Context) {
    const { id } = c.req.param()
    const data = await c.req.json()
    try {
      const updatedAthlete = await athleteService.updateAthlete(id, data)
      return c.json(updatedAthlete)
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404)
    }
  }

  static async deleteAthlete(c: Context) {
    const { id } = c.req.param()
    try {
      await athleteService.deleteAthlete(id)
      return c.json({ message: 'Athlete deleted successfully' })
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404)
    }
  }
}
