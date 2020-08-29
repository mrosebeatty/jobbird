const db = require('./db')

// register models
const {User, Job, UserJob} = require('./models')

module.exports = {db, User, Job, UserJob}
