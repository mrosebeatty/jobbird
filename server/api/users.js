const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//api/users
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (error) {
    next(error)
  }
})
