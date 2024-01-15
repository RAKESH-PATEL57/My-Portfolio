
//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header #nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    console.log(offset);

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header #nav a[href*=" + id + "]").classList.add("active");
      });

      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }

     //animation that repeats on scroll
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// dark mode light
// let darkModeIcon = document.querySelector("#darkMode-icon");
// darkModeIcon.onclick = () => {
//   darkModeIcon.classList.toggle("bx-sun");
//   document.body.classList.toggle("dark-mode");
// };
let subBtn = document.getElementById("subbtn");

subBtn.addEventListener("click", (e) => 
{

  let userMsg = document.getElementById("message").value;
  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMobNumber = document.getElementById("mobile_number").value;
  let userESub = document.getElementById("email_subject").value;

  if(userMsg == '' )
  {
    alert("Please enter all the required details😊");
  }
  
  else
  {
    e.preventDefault();
    var params = {
      name: userName,
      email: userEmail,
      mobile_number: userMobNumber,
      email_subject: userESub,
      message: userMsg,
    };
    
    const serviceId = "service_n6ww68e";
    const templateID = "template_hon8jwj";
    
    emailjs.send(serviceId, templateID, params).then((res) => {
    userName = "";
    userEmail = "";
    userMobNumber = "";
    userESub = "";
    userMsg = "";
    // console.log(res);
    alert("Your message sent successefully");
  })
  
  .catch(err => console.log(err));
  
  }


})








// Adding Gsap Animations   

// var tl = gsap.timeline();

// tl.from("header a",{
//   y:-200,
//   opacity:0,
//   duration:0.8,
// }, home)

// tl.from("#nav",{
//   y:-200,
//   opacity:0,
//   duration:1,
// }, home)

// tl.from("#left-intro",{
//   x:-700,
//   duration:2,
//   opacity:0
// }, home)


// tl.from("#home-profile-pic .arrow-one",{
//   rotate:-90,
//   duration:2,
//   opacity:0,
//   // scale:0
// }, home)

// tl.from("#home-profile-pic img",{
//   duration:2,
//   opacity:0,
//   scale:0.5
// }, home)


// tl.from(".home-sci",{
//   duration:1,
//   opacity:0,
//   scale:0.5,
//   stagger:0.1
// })


// tl.from(".home-sci *",{
//   y:-100,
//   duration:1,
//   delay:0.5,
//   opacity:0,
//   stagger:0.2
// })
// tl.from("#education ",{
//   y:-100,
//   duration:1,
//   delay:0.5,
//   opacity:0,
//   stagger:0.2,
//   scrollTrigger:true
// })



//********************* loading section   ******************************
function loading()
{
  document.querySelector('.loading-page').classList.add('loding-off');
  document.body.classList.add('loding-of');
}

function fadeOut()
{
  setInterval(loading, 2000);
}


window.onload = fadeOut;

// projects section  

let card = document.querySelector(".card");
// let cursorF = document.querySelector(".cursor1");
// let weather = document.querySelector("#weather");

// function on(){

//   card.addEventListener("mousemove", function(e){
//     gsap.to(cursorF,{
//       x:e.x ,
//       y:e.y
//     })
//     cursorF.style.left = ( e.x - 130 )+ "px";
//     cursorF.style.top = ( e.y - 280 ) + "px";
//   })
  
// }
// card.addEventListener("mouseenter",function(){
//   on();
//   gsap.to(cursorF,{
//       scale:1,
//       opacity:1
//   })
// })

// card.addEventListener("mouseleave",function(){
//   gsap.to(cursorF,{
//       scale:0,
//       opacity:0
//   })
// })  

// cursorF.onclick = () =>{
//     // weather.href="https://rakesh-patel57.github.io/Weather-Web/";
//     window.open("https://rakesh-patel57.github.io/Weather-Web/", "_blank");
// } 

card.onclick = () => {
  window.open("https://rakesh-patel57.github.io/Weather-Web/", "_blank");
}







// profile-pic animation btn 
// let animationStartBtn = document.querySelector('#animation-start');
// let firstArrow = document.querySelector('.arrow-one-part');
// let secondArrow = document.querySelector('.arrow-two-part');
// let thirdArrow = document.querySelector('.arrow-three-part');
// let fourthArrow = document.querySelector('.arrow-four-part');

// animationStartBtn = () => {
  
//   document.body.classList.toggle('home-profile-pic-animationStartOff');
//   console.log("click");
// }

// animationStartBtn.addEventListener ('click', () =>
// {
//   if(animationStartBtn.innerHTML == "Off-Animation")
//   {
//     animationStartBtn.innerHTML= "Animate" 
//   }
//   else
//   {
//     animationStartBtn.innerHTML= "Off-Animation"
//   }


//   firstArrow.classList.toggle('home-profile-pic-animationStartOff');
//   secondArrow.classList.toggle('home-profile-pic-animationStartOff');
//   thirdArrow.classList.toggle('home-profile-pic-animationStartOff');
//   fourthArrow.classList.toggle('home-profile-pic-animationStartOff');
//   console.log("click");
// })
