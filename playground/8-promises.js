const doWorkPriomise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7, 4, 1])
        resolve([2, 3, 2])
        reject('Things went wrong!')
    }, 2000)
})

doWorkPriomise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log('Error', error);
})