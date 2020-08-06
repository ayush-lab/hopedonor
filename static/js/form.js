const username=document.querySelector('#name');
const age=document.querySelector('#age');
const mobile=document.querySelector('#mobile');
const weight=document.querySelector('#weight');
const Username=document.querySelector('#username');
const Password=document.querySelector('#password');
const Confirm=document.querySelector('#confirm-password');



// ------------------ERRORS ---------------------

//age mssg
const age_msg=document.querySelector('.age-msg-form');
//mobile msg
const mobile_msg=document.querySelector('.mobile-msg-form');
//wight msg
const weight_msg=document.querySelector('.weight-msg-form');
//username
const Username_msg=document.querySelector('.Username-msg-form');
//password

const Password_msg=document.querySelector('.password-msg-form');

//confirm-password
const Confirm_msg=document.querySelector('.confirm-msg-form');
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



//Age

age.addEventListener('focus', function(){

    if(age.value===""){
        age.classList.add('empty-input');
        age.classList.remove('success-input');
    }
   
   
   
      })

age.addEventListener('input',function(){
    if(age.value<18){
        age.classList.add('empty-input','messages');
        age.classList.remove('success-input','age-msg');
        age_msg.innerHTML="You must be at least 18 years old."
    }
    else{
        age.classList.remove('empty-input','messages');
        age.classList.add('success-input','age-msg');
        age_msg.innerHTML="";

    }

    if(age.value==="" || age.value.length===1){
        age.classList.add('empty-input','messages');
        age.classList.remove('success-input','age-msg');
        age_msg.innerHTML="You must be at least 18 years old.";
    }
      
})



// Mobile Number

mobile.addEventListener('focus', function(){

    if(mobile.value===""){
        mobile.classList.add('empty-input');
        mobile.classList.remove('success-input');
    }
   
   
   
      })

mobile.addEventListener('input',function(){
    if(mobile.value.length<6){
        mobile.classList.add('empty-input','messages');
        mobile.classList.remove('success-input','age-msg');
        mobile_msg.innerHTML="Mobile Number has to be at least 6 characters long";
    }
    else{
        mobile.classList.remove('empty-input','messages');
        mobile.classList.add('success-input','age-msg');
        mobile_msg.innerHTML="";

    }

    if(mobile.value==="" || mobile.value.length===1){
        mobile.classList.add('empty-input','messages');
        mobile.classList.remove('success-input','age-msg');
        mobile_msg.innerHTML="Mobile Number has to be at least 6 characters long"
    }
        
})


// Weight has to be more than 50kg approx


weight.addEventListener('input',function(){
    if(weight.value<50){
        weight.classList.add('empty-input','messages');
        weight.classList.remove('success-input','age-msg');
        weight_msg.innerHTML=" Your weight must be more than 50kg as per the guidelines";
    }
    else{
        weight.classList.remove('empty-input','messages');
        weight.classList.add('success-input','age-msg');
        weight_msg.innerHTML="";

    }

    if(weight.value==="" || weight.value.length===1){
        weight.classList.add('empty-input','messages');
        weight.classList.remove('success-input','age-msg');
        weight_msg.innerHTML=" Your weight must be more than 50kg as per the guidelines";
    }
        
})


//Username Credential

Username.addEventListener('focus', function(){

    if(Username.value===""){
        Username.classList.add('empty-input');
        Username.classList.remove('success-input');
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

