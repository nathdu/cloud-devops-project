const fetch = require('sync-fetch')

function getIp() {
    const ip = fetch(`https://api.ipify.org?format=json`).json()
   
        console.log(ip.ip)
    return ip.ip
}

module.exports = { myIp: getIp };