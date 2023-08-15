// This is for about section transition from skill to course to education*******************************************8 

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function btnclick(event){
    for(var tablink of tablinks){
       tablink.classList.remove("active-link")
    }

    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

     event.currentTarget.classList.add("active-link");
    //  console.log(event);
     const target=event.target.dataset.target;
      document.querySelector(`.tab-contents#${target}`).classList.add("active-tab")

   
      
}


for(var tablink of tablinks){
    tablink.addEventListener("click",btnclick);
}




//This javascript code is for open of menu and closing of menu***************************************************** 

var sidemenu=document.getElementById("sidemenu");
var openicon=document.getElementsByClassName("fa-bars")
var closeicon=document.getElementsByClassName("fa-xmark")

for(var openicon_ of openicon){
    openicon_.addEventListener('click',function(){
        sidemenu.style.right="0px";
   })
//    console.log(openicon_);
}

for(var closeicon_ of closeicon)
{
    closeicon_.addEventListener('click',function(){
        sidemenu.style.right="-200px";
   })
}

// reset form after submitting******************************************************************************

var form=document.querySelector("#myform")
var button=document.querySelector("#subbutton")
var successmessage= document.querySelector("#msg");

button.addEventListener('click',(event)=>{
    event.preventDefault();
    if(!form.reportValidity()){
        return;
    }
    successmessage.innerHTML="Message Successfully Sent";
    form.reset();
     
    setTimeout(()=>{ 
        successmessage.innerHTML=" "  
    },4000)
   
})


//  dark to light and vice-versa theme****************************************************************************
// image and logo theme change**********************************************************************************

var themeicon=document.querySelector(".fa-sun");
var logotheme=document.querySelector(".logo");
var headerdiv=document.querySelector("#header")

themeicon.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme")
    if(themeicon.classList.contains("fa-sun")) {
        themeicon.classList.remove("fa-sun");        
        themeicon.classList.add("fa-moon");  
        logotheme.src="images/logo-light-theme.png" 
        headerdiv.style.backgroundImage="url('./images/light.png')"
    }else{
        themeicon.classList.remove("fa-moon"); 
        themeicon.classList.add("fa-sun");  
        logotheme.src="images/logo-dark-theme.png" 
        headerdiv.style.backgroundImage="url('./images/dark.png')"
    }

    
})

// avoiding automatic scrolling in phone screens using regex

var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile){
    window.addEventListener("load",()=>{
        setTimeout(()=>{
            window.scrollTo(0,1);
            window.scrollTo(0,0);
        },0)
    })
}







