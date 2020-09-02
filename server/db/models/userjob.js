const Sequelize = require('sequelize')
const db = require('../db')

const UserJob = db.define('userjobs', {
  notes: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('0', '1', '2', '3', '4'),
    allowNull: true
  },
  contacts: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = UserJob
