function register(){

fetch("/register",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:name.value,

email:email.value,

password:password.value

})

});

}

function login(){

fetch("/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email:email.value,

password:password.value

})

})

.then(()=>{

location="dashboard.html";

});

}

function addTask(){

fetch("/tasks",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title:task.value

})

});

}
