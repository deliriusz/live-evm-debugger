import 'reflect-metadata'
import Container from 'typedi'
import api from './api'
import constants from './config/constants'
import setup from './config/setup'
import { DebugModel } from './types/models'

const PORT = +(process.env.PORT ?? 4000)

setup()

const model = Container.get<DebugModel>(constants.ids.debugModel)
console.log(model.getDebugTrace())

api({port: PORT})

console.log(`Backend server started on port ${PORT}`)
