import { AthleteRepository } from './athlete.repository.js'
import { v4 as uuidv4 } from 'uuid'

export class AthleteService {
  private athleteRepo = new AthleteRepository()

  async createAthlete(data: any) {
    const { name, age, team } = data
    if (!name || !age || !team) throw new Error('Name, age, and team are required')

    const ageInt = parseInt(age, 10)
    if (isNaN(ageInt)) throw new Error('Age must be a valid number')

    return this.athleteRepo.create({
      id: uuidv4(),
      name,
      age: ageInt,
      team
    })
  }

  async getAthletes() {
    return this.athleteRepo.getAll()
  }

  async getAthleteById(id: string) {
    return this.athleteRepo.getById(id)
  }

  async updateAthlete(id: string, data: any) {
    return this.athleteRepo.update(id, data)
  }

  async deleteAthlete(id: string) {
    await this.athleteRepo.deleteMetrics(id)  
    return this.athleteRepo.delete(id)
  }
}
