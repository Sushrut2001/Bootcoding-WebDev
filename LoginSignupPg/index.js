// console.log("working");
let signupBtn = document.getElementById('signupBtn');
let loginBtn = document.getElementById('loginBtn');
let nameFld = document.getElementById('nameFld');
let forgetPass = document.getElementById('forgetPass')
let sBtn = document.getElementById("sBtn");
let lBtn = document.getElementById("lBtn");

loginBtn.addEventListener('click', () => {
    nameFld.style.maxHeight= 0;
    forgetPass.innerHTML = "Forget Password!<a href='#'>Click here</a>"
    sBtn.classList.add('disable');
    lBtn.classList.remove('disable')
})
 
signupBtn.addEventListener('click', ()=>{
    nameFld.style.maxHeight = "60px";
    forgetPass.innerHTML = "Already have an account?<a href'#'>Click here</a>"
    lBtn.classList.add('disable');
    sBtn.classList.remove('disable');
})
