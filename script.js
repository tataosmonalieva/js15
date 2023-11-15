
const form =document.querySelector(`.form`)
const last =document.querySelector(`#last`);
const first =document.querySelector(`#first`);
const user=document.querySelector(`#user`);
const email =document.querySelector(`#email`);
const password =document.querySelector(`#password`);
const confirmPassword =document.querySelector(`#confirmPassword`);


form.addEventListener("submit",() =>{
    if(last.value===''||first.value===''){
        alert('Заполните все поля')
    }else if(last.value.length<=3||first.value.length<=3||user.value.length<=3){
        alert('dlina bolshe 3')
    }else if(password.value!==confirmPassword.value){
        alert('vvedite pravilno')
    }else {
        alert(`user,vse verno`)
    }
})

