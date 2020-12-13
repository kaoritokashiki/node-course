require('../src/db/mongoose')
const User = require('../src/models/user')


// 5fd593da7127dce9440fa4b3
User.findByIdAndUpdate('5fd593da7127dce9440fa4b3', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result);
}).catch(() => {
    console.log(e);
})