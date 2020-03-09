const { Role } = require('route-access-control');

const admin = new Role('admin');
const student = new Role('student');
const teacher = new Role('teacher');
module.exports = { admin, student, teacher };
