require('../src/db/mongoose')
const Task = require('../src/models/tasks')

//5f4b3166f9cfb2018c451349

// Task.findByIdAndDelete('5f4b3166f9cfb2018c451349').then((task) => {
//     console.log(task)
//     return Task.countDocuments(task)
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f420da299cd2eee40e68c78').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})