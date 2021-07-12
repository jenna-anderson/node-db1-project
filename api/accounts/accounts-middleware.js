const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  const { id } = req.params
  const account = await Accounts.getById(id)
  if (!account) {
    res.status(404).json({
      message: "account not found"
    })
  } else {
    next()
  }
}
