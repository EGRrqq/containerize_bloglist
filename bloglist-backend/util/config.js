const MONGO_URL = process.env.MONGO_URL || 'mongodb://the_username:the_password@localhost:3456/the_database'
const PORT = process.env.PORT || 3003

module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  PORT//: 3003
}