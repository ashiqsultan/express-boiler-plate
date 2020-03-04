const checkRoleAdmin = role => (role === 'admin' ? true : false);
const checkRoleStudent = role => (role === 'student' ? true : false);
const checkRoleTeacher = role => (role === 'teacher' ? true : false);
module.exports = { checkRoleAdmin, checkRoleStudent, checkRoleTeacher };
