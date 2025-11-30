const register = (event)=>{
    event.preventDefault();
    // lay thong tin ND
    let email=document.querySelector("#signup-email").value.trim();
    let username=document.querySelector("#signup-username").value.trim();
    let password = document.querySelector("#signup-password").value.trim();
    let confirmPassword = document.querySelector("#signup-confirm-password").value.trim();
    // kiem tra thong tin 

    // regular expression
    let emailcase= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    let namecase=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    let passwordcase=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,19})\S$/;

    if(!email||!password||!confirmPassword||!username){
        alert("BAN vui long nhap day du");
        return;
    }
    if(password!=confirmPassword){
        alert("MAT KHAU PHAI GIONG NHAU");
        return;
    }
    if(!password.match(passwordcase)){
        alert("mat khau phai co tren 7 ky tu , co chu thuong , chu in hoa va so");
        return;
    }
    if(!email.match(emailcase)){
        alert("dia chi email ko hop le");
        return;
    }
    if(!username.match(namecase)){
        alert("ten pbai co tren 3 ky tu, co chu thuong va chu in hoa");
        return;
    }

    // Tao tai khoan
    let user={
        name:username,
        email:email,
        password:password
    }


    let users=localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):{};
    if(users[email]){
        alert("tai khoan da ton tai");
    }else{
        users[email]=user;
        localStorage.setItem('users',JSON.stringify(users));
        alert("DANG KY THANG CONG");
        window.location.href='./login.html';
    }
}

document.querySelector("#signup-form").addEventListener("submit",register);