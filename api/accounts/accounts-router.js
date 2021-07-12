const router = require('express').Router()
const Accounts = require('./accounts-model')
const { checkAccountId, checkAccountPayload } = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.status(200).json(accounts)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await Accounts.getById(id)
    res.status(200).json(account)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const account = req.body
    const newlyCreatedAccount = await Accounts.create(account)
    res.status(201).json(newlyCreatedAccount)
  } catch(err) {
    console.log(err)
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
  const { id } = req.params
  const account = req.body
  const updatedPost = await Accounts.updateById(id, account)
  res.status(200).json(updatedPost)
  } catch(err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedAccount = await Accounts.deleteById(id)
    res.status(200).json(deletedAccount)
  } catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
      message: err.message
  })
})

module.exports = router;
