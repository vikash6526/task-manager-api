const bcrypt = require('bcryptjs')

const myfunction = async() => {
    try {
        const password = "Red1234!"
        const hashedPassword = await bcrypt.hash(password, 8)

        console.log(password)
        console.log(hashedPassword)

        const isMatch = await bcrypt.compare('Red1234!', hashedPassword)

        console.log(isMatch)
    } catch (e) {
        console.log(e)
    }
}

myfunction()