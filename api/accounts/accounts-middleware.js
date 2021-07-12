const { json } = require('express')
const Accounts = require('./accounts-model')

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  const trimmedName = name.trim()
  console.log(name, trimmedName)
  if(!trimmedName || !budget){
    console.log('missing value')
    next({
      status: 400,
      message: 'name and budget are required'
    })
  } else if (typeof name !== 'string') {
    console.log('not string')
    next({
      status: 400,
      message: 'name of account must be a string'
    })
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    console.log('name length')
    next({
      status: 400,
      message: 'name of account must be between 3 and 100'
    })
  } else if (typeof budget !== 'number') {
    next({
      status: 400,
      message: 'budget of account must be a number'
    })
  } else {
    next()
  }
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
