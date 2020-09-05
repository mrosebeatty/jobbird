const router = require('express').Router()
module.exports = router
const {UserJob, Job, User} = require('../db/models')

//**MADISON WORKS */
//Get all data from userjobs table associated with a userId  ROUTE /api/userjobs/userId
router.get('/:userId', async (req, res, next) => {
  try {
    const test1 = await User.findAll({
      where: {
        id: req.params.userId
      },
      include: [
        {
          model: Job,
          through: {
            model: UserJob
          }
        }
      ]
    })
    console.log('this is test1', test1)
    res.json(test1)
  } catch (error) {
    next(error)
  }
})

//DELETE LATER??? USELESS
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
//_________________________________

//Get all job items from a user  ROUTE /api/userjobs/userId
router.get('/', async (req, res, next) => {
  try {
    //pulling what we have saved under user
    const userJobs = await UserJob.findAll({})
    res.json(userJobs || []) //results are in an array
  } catch (error) {
    next(error)
  }
}) //api/user/userjobs

//api/userjobs/userId
router.get('/:userId', async (req, res, next) => {
  try {
    const test1 = await UserJob.findAll({
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
    res.json(test1)
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
//THIS ROUTE WORKS - ADDS RECORD TO THE THROUGH TABLE
router.post('/:userId/:jobId/add', async (req, res, next) => {
  try {
    const [newJob] = await UserJob.findOrCreate({
      where: {
        userId: req.params.userId,
        jobId: req.params.jobId,
        status: '0'
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
