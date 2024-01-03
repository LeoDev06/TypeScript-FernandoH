const { getUUID } = require('../plugins/getId.plugin');
const { getAge } = require('../plugins/getAge.plugin');
const { http } = require('../plugins/httpClient.plugin');
const buildLogger = require('../plugins/loggerWinston.plugin')
const buildLogger2 = require('../plugins/loggerWinston2.plugin')

module.exports ={
  getUUID,
  getAge,
  buildLogger,
  buildLogger2,
  http,
}