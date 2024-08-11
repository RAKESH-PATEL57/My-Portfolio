import projects from "./json/projects.json" with{ type: "json" };
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

    // console.log(offset);

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header #nav a[href*=" + id + "]").classList.add("active");
      });

    
    }

  
  });

  // sticky header

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

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


});


//********************* loading section   ******************************
function loading()
{
  document.querySelector('.loading-page').classList.add('loding-off');
  document.body.classList.add('loding-of');
}

function fadeOut()
{
  setInterval(loading, 1);
}


window.onload = fadeOut;

// projects section  
let projectsContainer = document.querySelector(".projects-list");

projects.forEach((projectDetails, index) => {
  const projecCard = `
      <div class="project-card">
        <div class="projectLinkImg loading toTargetLoadingElement">
            <div class="projectImgBtn">
                <a target="_blank" href="${projectDetails.githubLink}" class="btn">Code</a>
                <a target="_blank" href="${(projectDetails.liveLink)}" class="btn">Live Demo</a>
            </div>
            <img loading="lazy" src="${projectDetails.imageLink}" alt="${projectDetails.name}_Website"></img>
        </div>
        <div class="projectDetails">
              <h1 class="loading toTargetLoadingElement">${projectDetails.name}</h1>
              <ul>
                ${project_Features_Skills(projectDetails.features_Skills)}
              </ul>   
        </div>
      </div>`;
      projectsContainer.insertAdjacentHTML("beforeend",projecCard);     
    });
    
    
    function project_Features_Skills(features_Skills)
    {
    let liList = "";

    features_Skills.forEach((details) => {
      liList += `<li class="loading toTargetLoadingElement testy">${details.points}</li>`;
    });

    return liList;

  }

  //************/ Animate when scrolling [[     Start     ]]   *********************

  let allSectionNames = document.querySelectorAll(".sectionNames")

  let allSkillsImg = document.querySelectorAll(".skills-img");
  let allProjectCard = document.querySelectorAll(".project-card");

  function animteProjectCard()
  {
    const trigger = window.innerHeight;

    allSkillsImg.forEach((currSkillImg) => {
      const skillImg = currSkillImg.getBoundingClientRect().bottom;

      if(skillImg < trigger) 
      {
        currSkillImg.classList.add("skillImgAnimate");
      }
      else
      {
        currSkillImg.classList.remove("skillImgAnimate");
      }
    });
    allProjectCard.forEach((projectCard) => {
      const projectCardTop = projectCard.getBoundingClientRect().top;

      if(projectCardTop < trigger) 
      {
        projectCard.classList.add("projectAnimate");
      }
      else
      {
        projectCard.classList.remove("projectAnimate");
      }
    });
  }

  window.addEventListener("scroll",() =>{
    animteProjectCard();
  });

  //************/ Animate when scrolling [[      End      ]]   *********************
  
  //*******************************   loader [start]  ******************************
  
  let allLoading = document.querySelectorAll(".toTargetLoadingElement");
  
   let time;
   let i = 0;
   time = setInterval(() => {
      removeLoader(allLoading[i]);
      i++;
      if(i == allLoading.length)
      {
        clearInterval(time);
      }
  
  }, 50);

function removeLoader(loadingremove)
{  
  loadingremove.classList.remove("loading");
}

//*******************************   loader [end]  *******************************
