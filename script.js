
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

subBtn.onclick = () =>
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


}








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
  // window.scroll = 'no-scroll';
  // document.querySelector('#home').style.display = 'block';
  // document.querySelector('#about').style.display = 'block';
  // document.querySelector('#education').style.display = 'block';
  // document.querySelector('#contact').style.display = 'block';
}

function fadeOut()
{
  setInterval(loading, 2000);
}


window.onload = fadeOut;

// document.querySelector('#home').style.display = 'none';
// document.querySelector('#about').style.display = 'none';
// document.querySelector('#education').style.display = 'none';
// document.querySelector('#contact').style.display = 'none';


