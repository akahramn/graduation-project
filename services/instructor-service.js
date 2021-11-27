const BaseService = require('./base-service');
const Instructor = require('../models/instructor-model')

require('mongoose')

class InstructorService extends BaseService {


}

module.exports = new InstructorService(Instructor)