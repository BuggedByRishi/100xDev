const RecordingOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const RecordingTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
 
const RecordingThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    RecordingOne,
    RecordingTwo,
    RecordingThree
]).then((messages) => {
    console.log(messages)
})