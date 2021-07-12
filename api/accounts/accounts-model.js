const db = require('../../data/db-config')

const getAll = async () => {
  const accounts = await db('accounts')
  return accounts
}

const getById = async (id) => {
  const account = await db('accounts').where('id', id).first()
  return account
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
