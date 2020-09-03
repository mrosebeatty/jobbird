const Sequelize = require('sequelize')
const db = require('../db')

const UserJob = db.define('userjobs', {
  notes: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('0', '1', 'interview', 'rejected', 'offer'),
    allowNull: false
  },
  contacts: {
    type: Sequelize.STRING,
    allowNull: false
  },
  columnId: {
    type: Sequelize.STRING
  }
})

module.exports = UserJob
