const joi = require('joi')

const configSchema = joi.object().keys({
  redisStore: {
    secret: joi.string().required(),
    url: joi.string()
  }
})

const config = {}

config.redisStore = {
  url: process.env.REDIS_STORE_URL,
  secret: process.env.REDIS_STORE_SECRET
}

const result = joi.validate(config, configSchema);

if (result.error) {
  throw result.error
}

module.exports = config