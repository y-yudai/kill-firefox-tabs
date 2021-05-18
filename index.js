'use strict'
const fkill = require('fkill')
const psList = require('ps-list')

module.exports = async (options = {}) => {
  const list = await psList()

  const processes = {
    firefox: process.platform === 'darwin' ? 'Firefox' : 'firefox',
  }

  const kill_limit =
    parseInt(options.memory) > 50 ? parseInt(options.memory) / 100 : 0.2

  const pids = list
    .filter(
      (x) =>
        Object.keys(processes).some((name) =>
          x.cmd.includes(processes[name])
        ) &&
        x.cmd.includes('-childID') &&
        x.memory > kill_limit
    )
    .map((x) => x.pid)
  return fkill(pids, { force: true })
}
