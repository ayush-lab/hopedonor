const heading = document.querySelector('.main-heading');


const heading_text=heading.textContent;

const heading_char=heading_text.split("");

// upward arrow

function upwardarrow() {
    var upward_ref=document.querySelector('.upward-arrow');
    var upward= document.querySelector('.fa-long-arrow-up');
    var introPosition=upward.getBoundingClientRect().bottom;
   
 
    var screenPosition=window.innerHeight;
    var introPosition_ref=upward_ref.getBoundingClientRect().bottom;
    screenPosition=screenPosition;
   
        if(introPosition < screenPosition){
            upward.classList.add('arrow-appear');
        }
        console.log(screenPosition);
        console.log(introPosition_ref);
        console.log(introPosition_ref);

        if(introPosition_ref >screenPosition){
            upward.classList.remove('arrow-appear');
        }
       
        
}
    window.addEventListener('scroll', upwardarrow);


    heading.textContent="";


for(let i=0;i<heading_char.length; i++){

    
    heading.innerHTML = heading.innerHTML+ "<i>" + heading_char[i] + "</i>";


}

let char =0;




var counter = 300;
var myFunction = function() {
    counter = 300;
    
     
    const span = document.querySelectorAll('i')[char];
    span.classList.add('faded');
    

    char++;
   
  
    if(char==heading_char.length){
        
    //complete();
   
    heading.classList.add('gone');
    let anime =setTimeout(Myfunction,2000);
    char=0;
    counter=2000;
  
                                }

    setTimeout(myFunction, counter);

}

setTimeout(myFunction, counter);






 function Myfunction(){
     heading.classList.remove('gone');
     for(var i=0;i<heading_char.length;i++){
        const spaned = document.querySelectorAll('i')[i];
        spaned.classList.remove('faded');
                                           }

    
 }



