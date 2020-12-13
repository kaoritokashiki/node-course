require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete("5fd5834d2b75e0e6aa39eb88").then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false})

}).then((result) => {
    console.log(result);

}).catch((e) => {
    console.log(e);
})