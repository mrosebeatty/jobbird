const db = require('../db')
const UserJob = require('./userjob')
const User = require('./user')
const Job = require('./job')

//Associations
// User.hasMany(Job)
// Job.belongsTo(User)

User.belongsToMany(Job, {through: UserJob})
Job.belongsToMany(User, {through: UserJob})
//Created to associate a list with a user

module.exports = {db, Job, User, UserJob}
