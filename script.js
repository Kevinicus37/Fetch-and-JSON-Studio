// TODO: add code here
window.addEventListener("load", function(){
    const container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            
            let jsonArr = [];
            for (let i = 0; i < json.length; i++){
                jsonArr.push(json[i]);
            }
            
            jsonArr.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (let i = 0; i < jsonArr.length; i++){
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>${jsonArr[i].firstName} ${jsonArr[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${jsonArr[i].hoursInSpace}</li>
                        <li>Active: ${jsonArr[i].active ? "<span style='color:green'>" + jsonArr[i].active + "</span>" : jsonArr[i].active}</li>
                        <li>Skills: ${jsonArr[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${jsonArr[i].picture}">
                </div>`
            }

            document.querySelector("h1").innerHTML += ` (${json.length})`;
        });
    });
})