const userLeft = false;
const userWatchingCatMeme = false;

function userPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name : 'User Left',
                message : ':('
            })
        }
        else if(userWatchingCatMeme){
            reject({
                name: 'User watching Cat Meme',
                message: 'WebSimplified > Cat'
            })
        }else {
            resolve('Thumps up and Subscribe')
        }
    })
}

userPromise().then((message) => {
    console.log('Success: ',message);
}).catch((error) => {
    console.log(error.name, '' , error.message)
})