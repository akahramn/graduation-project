const BaseService = require('./base-service');
const Student = require('../models/student-model')

require('mongoose')

class StudentService extends BaseService {


}

module.exports = new StudentService(Student)