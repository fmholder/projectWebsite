function showDescription(id) {
    let st = "string";
    let image = "path";
    
    switch(id) {
        case 1 :
            st = "I had to build a Node.js console app that generates random messages each time a user runs the program and log the version project with Git/GitHub. The theme was, 'What should I make for dinner tonight?'"
            imageScript = "resources/kikki.ico";
            break;
        case 2 :
            st = "Description for box 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "./resources/images/kikki portrait.jpg";
            break;
        case 3 :
            st = "Description for box 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "resources/kikki.ico";
            break;
        case 4 :
            st = "Description for box 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "resources/kikki.ico";
            break;
        case 5 :
            st = "Description for box 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "resources/kikki.ico";
            break;
        default :  
            st = "---";
    }// switch
    document.getElementById('descBox').innerHTML = st;
    document.getElementById('projectImage').src= imageScript;
    document.getElementsByClassName(mobile-description).innerHTML = st;
}// function

// below is from Conding2GO https://www.youtube.com/watch?v=m7YDWNz65iI
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar(media)

