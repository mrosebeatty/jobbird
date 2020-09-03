const router = require('express').Router()
module.exports = router
const {UserJob, Job, User} = require('../db/models')

//Get all data from userjobs table associated with a userId  ROUTE /api/userjobs/userId
router.get('/:userId', async (req, res, next) => {
  try {
    const test1 = await UserJob.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(test1)
  } catch (error) {
    next(error)
  }
})

//show all columns associated with a userId
//api/userjobs/userId/columns
router.get('/:id/columns', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    const userColumns = await UserJob.findOne({
      where: {
        id: user.columnId
      }
    })
    res.json(userColumns)
  } catch (error) {
    next(error)
  }
})

//api/userjobs/userId/columnId
router.post('/:userId/:columnId', async (req, res, next) => {
  try {
    const [column] = await UserJob.findOrCreate({
      where: {
        columnId: Number(req.params.columnId),
        userId: Number(req.params.userId)
      }
    })
    res.send(column)
  } catch (error) {
    next(error)
  }
})

//retrieve a single job      ROUTE /api/userjobs/:userId/:jobId
router.get('/:userId/:jobId', async (req, res, next) => {
  try {
    const singleJob = await UserJob.findOne({
      where: {
        userId: req.params.userId
      },
      include: [
        {
          model: Job,
          where: {jobId: req.params.jobId},
          required: false,
          attributes: [
            'jobId',
            'company',
            'url',
            'location',
            'title',
            'description'
          ]
        }
      ]
    })
    res.send(singleJob)
  } catch (error) {
    next(error)
  }
})

//delete an job from userjobs   /api/userjobs/:userId/:jobId
router.delete('/:userId/:jobId', async (req, res, next) => {
  try {
    await UserJob.destroy({
      where: {
        userId: req.params.userId,
        jobId: req.params.jobId
      }
    })
    res.sendStatus(204).end()
  } catch (error) {
    next(error)
  }
})

//add job to the userjobs    /api/userjobs/:userId/:jobId/add
router.post('/:userId/:jobId/add', async (req, res, next) => {
  try {
    const [newJob] = await UserJob.findOrCreate({
      where: {
        userId: Number(req.params.userId),
        jobId: Number(req.params.jobId)
      }
    })
    res.send(newJob)
  } catch (error) {
    next(error)
  }
})

//PUT route to update a job  ROUTE api/userjobs/:userId/:jobId
//update status // update activity/note ??

router.put('/:userId/:jobId', async (req, res, next) => {
  try {
    const updateJob = await UserJob.findOne({
      where: {
        userId: req.params.userId
      },
      include: [
        {
          model: Job,
          where: {jobId: req.params.jobId},
          required: false
        }
      ]
    })

    //to be completed
    res.send(updateJob)
  } catch (error) {
    next(error)
  }
})
