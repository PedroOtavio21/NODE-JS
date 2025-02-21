// Importação de módulos principais
const os = require('node:os')
const fs = require('node:fs')
const path = require('node:path')

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo(){
    const system = systemPlatformMap[os.platform()]
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60
    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60
    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60
    const uptimeSeconds = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSeconds}`

    const ramTotal = os.totalmem() / 1024 / 1024 / 1024
    const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
    const ramUsagePercent = ramUsage / ramTotal * 100

    return {system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}
}

function showLog({system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}){
    console.log("Detalhes do sistema:")
    console.log(`Sistema Operacional: ${system}`)
    console.log(`Arquitetura: ${arch}`)
    console.log(`Processador: ${cpu}`)
    console.log(`Tempo de atividade do sistema: ${uptime}`)
    console.log(`Uso de memória ram: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)`)
}

function saveLog({system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}) {
    const log = `DETALHES DO SISTEMA | Sistema Operacional: ${system} | Arquitetura: ${arch} | Processador: ${cpu} | 
    Tempo de atividade do sistema: ${uptime} | Uso de memória ram: ${ramUsage.toFixed(2)} GB / 
    ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)\n---\n`

    const logDir = path.join('/', "log")

    if (fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    const logPath = path.join(logDir, 'log.txt')
    fs.appendFileSync(logPath, log)
}

setInterval(() => {
    const systemInfo = getSystemInfo()
    showLog(systemInfo)
    saveLog(systemInfo)
}, 1000)