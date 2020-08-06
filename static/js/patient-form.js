const username=document.querySelector('#name');
const Username=document.querySelector('#username');
const Password=document.querySelector('#password');
const Confirm=document.querySelector('#confirm-password');
const weight=document.querySelector('#weight');



// ------------------ERRORS ---------------------

//age mssg
const age_msg=document.querySelector('.age-msg-form');

//wight msg
const weight_msg=document.querySelector('.weight-msg-form');
//username
const Username_msg=document.querySelector('.Username-msg-form');
//password

const Password_msg=document.querySelector('.password-msg-form');

//confirm-password
const Confirm_msg=document.querySelector('.confirm-msg-form');
//------------------------------------------------


//------------------------------------------------


username.addEventListener('focus', function(){

    if(username.value===""){
        username.classList.add('empty-input');
        username.classList.remove('success-input');
    }
   

                                            })

username.addEventListener('keydown',function(){
    if(username.value!=""){
        username.classList.remove('empty-input');
        username.classList.add('success-input');
        
    }

    if(username.value==="" || username.value.length===1){
        username.classList.add('empty-input');
        username.classList.remove('success-input');
    }
})



Username.addEventListener('input',function(){
    if(Username.value.length<6){
        Username.classList.add('empty-input','messages');
        Username.classList.remove('success-input','age-msg');
        Username_msg.innerHTML="Your Username has to be at least 6 characters long";
    }
    else{
        Username.classList.remove('empty-input','messages');
        Username.classList.add('success-input','age-msg');
        Username_msg.innerHTML="";

    }

    if(Username.value==="" || age.value.length===1){
        Username.classList.add('empty-input','messages');
        Username.classList.remove('success-input','age-msg');
        Username_msg.innerHTML="Your Username has to be at least 6 characters long";
    }
      
})


Password.addEventListener('input',function(){
    if(Password.value.length<6){
        Password.classList.add('empty-input','messages');
        Password.classList.remove('success-input','age-msg');
        Password_msg.innerHTML="Your Password has to be at least 6 characters long";
    }
    else{
        Password.classList.remove('empty-input','messages');
        Password.classList.add('success-input','age-msg');
        Password_msg.innerHTML="";

    }

    if(Password.value==="" || age.value.length===1){
        Password.classList.add('empty-input','messages');
        Password.classList.remove('success-input','age-msg');
        Password_msg.innerHTML="Your Password has to be at least 6 characters long";
    }
      
})


Confirm.addEventListener('input',function(){
    if(Confirm.value!= Password.value){
        Confirm.classList.add('empty-input','messages');
        Confirm.classList.remove('success-input','age-msg');
        Confirm_msg.innerHTML="It did not match. Try Again.";
    }
    else{
        Confirm.classList.remove('empty-input','messages');
        Confirm.classList.add('success-input','age-msg');
        Confirm_msg.innerHTML="";

    }

    if(Confirm.value==="" || age.value.length===1){
        Confirm.classList.add('empty-input','messages');
        Confirm.classList.remove('success-input','age-msg');
        Confirm_msg.innerHTML="It did not match. Try Again.";
    }
      
})





// DISABLED FORM FEATURE 

var undo = document.querySelectorAll('#main fieldset');
const next_button=document.querySelectorAll('.btn-next');
var start=0;

console.log(undo);

for(var i =0; i<next_button.length;i++){
   
    next_button[i].addEventListener('click',(event)=>{

        undo[event.target.value].disabled=false;
        
    })
}

