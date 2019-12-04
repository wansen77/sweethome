'use strict'
module.exports = {
  NODE_ENV: '"production"',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/eric-project/'
    : '/',
  API_PATH: '"https://vue-course-api.hexschool.io"',
  CUSTOM_PATH: '"wansen77"'
}
