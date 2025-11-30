const login = (event)=>{
    event.preventDefault();
    let email=document.querySelector("#login-email").value.trim();
    let password=document.querySelector("#login-password").value.trim();
    let checkbox=document.querySelector("#login-checkbox").value.trim();

    if(!email||!password){
        alert("vui long nhap day du" );
        return;
    }
    let users=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):{};

    let storeUsers=users[email];
    if(storeUsers&&storeUsers.password===password){
        window.location.href='index.html'
    }else{
        alert("tai khoan chua ton tai");
    }
}
document.querySelector("#login-form").addEventListener("submit",login);