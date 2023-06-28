import { config } from '../default-wdio-conf.ts'

config.waitforTimeout = 40000
config.waitforInterval = 500
config.connectionRetryTimeout = 40000
config.connectionRetryCount = 3

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
  },
]

export { config }
