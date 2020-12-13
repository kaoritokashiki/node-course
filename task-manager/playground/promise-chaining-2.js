require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete("5fd5834d2b75e0e6aa39eb88").then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false})

// }).then((result) => {
//     console.log(result);

// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fd58edf0e3984e811423ed8').then((count) => (
    console.log(count)
)).catch((e) => {
    console.log(e);
})