export const setItem = (key, value) => {
    return new Promise(function (resolve, reject) {
        try {
            resolve(localStorage.setItem(key, value))
        }
        catch (e) {
            console.log(e)
            reject('ERROR , work could not be completed')
        }
    })
}

export const getItem = (key) => {
    return new Promise(function (resolve, reject) {
        try {
            resolve(localStorage.getItem(key))
        }
        catch (e) {
            console.log(e)
            reject('ERROR , work could not be completed')
        }
    })
}