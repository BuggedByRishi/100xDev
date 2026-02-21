// async fn()
// some sync task
// want my work which async return 
// some other sync task 

function someSyncTask1() {
    console.log("Some Sync Task 1");
}
function someSyncTask2() {
    console.log("Some Sync Task2");
}
setTimeout(function() {
    someSyncTask2();
},1000)

someSyncTask1();