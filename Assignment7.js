console.log("assignment");

fetch("https://reqres.in/api/users?page=2").then(response => response.json())
.then(responseJSON => List(responseJSON.data)).catch(err => console.log(err));

function List(users){
    console.log(users);
    const curr_main = document.querySelector("main");
for(let user of users){
    const section = document.createElement("section");
    section.innerHTML = `
    <div>
     ${user.first_name}
     ${user.last_name}
        <br>
     ${user.email}
    </div>
    <br>
    <img src="${user.avatar}"/>
    
    
    `;
    curr_main.appendChild(section);
    
}
}