const mongoose = require('mongoose')

async function main() {

    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            //'mongodb+srv://boss:thebigboss@merchant.xf1svqa.mongodb.net/?retryWrites=true&w=majority&appName=merchant'
            'mongodb+srv://boss:thebigboss@merchant.xf1svqa.mongodb.net/merc-api',
        )
        
        console.log(`connection stabilished, Boss.`)
    } catch (error) {
        console.log(`something's wrong, Boss, check ${error}.`)
    }

}

module.exports = main