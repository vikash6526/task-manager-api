require('../src/db/mongoose')
const User = require('../src/models/users')

//5f4b2bddfcb25f28b9b8cbac

// User.findByIdAndUpdate('5f4b3075ab7655191583b1cd', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f4b3075ab7655191583b1cd', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})