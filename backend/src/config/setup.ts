import 'reflect-metadata'
import Container from 'typedi'
import constants from './constants'
import EVMDebugModel from '../models/Debug/EVMDebugModel'

/**
*  Setup script
*
*/
const setup = () => {
// === set injection engine
Container.set([
      { id: constants.ids.debugModel, value: new EVMDebugModel()}
   ])

}

export default setup
