const allUser = [
    {
        name: "Rishi",
        gender: "male"
    },
    {
        name: "Riya",
        gender: "female"
    },
    {
        name: "Rohit",
        gender: "male"
    }]

for(let i = 0; i < allUser.length; i++){
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["name"])
    }
}