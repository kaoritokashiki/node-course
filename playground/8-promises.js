const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}
// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(sum, 5).then((sum2) => {
//         console.log(sum2);
//     }).catch(() => {
//         console.log(e);
//     })
// }).catch((e) => {
//     console.log(e);
// })

add(1, 99).then((sum) => {
    return add(sum, 50)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e);
})