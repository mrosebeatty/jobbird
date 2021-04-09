const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//Gets information on specific user //Route api/users/userId
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})
