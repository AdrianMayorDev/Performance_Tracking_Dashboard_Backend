import { AthleteController } from './athlete.controller.js'
import { Hono } from 'hono'

const athleteRoutes = new Hono()

athleteRoutes.post('/athletes', AthleteController.createAthlete)
athleteRoutes.get('/athletes', AthleteController.getAthletes)
athleteRoutes.get('/athletes/:id', AthleteController.getAthleteById)
athleteRoutes.put('/athletes/:id', AthleteController.updateAthlete)
athleteRoutes.delete('/athletes/:id', AthleteController.deleteAthlete)

export default athleteRoutes
