// with the require not having a ./ leading, node knows this is a built in module (or installed one)
const os = require('os')

// info about current user

const user = os.userInfo()

console.log(user)


//method returns system uptime in seconds


console.log(`this system uptime is: ${os.uptime()} seconds, ${os.uptime()/60} minutes, ${os.uptime()/60/60} hours, or ${os.uptime()/60/60/24} days.`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}

console.log(currentOS)