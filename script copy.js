function showDescription2(id) {
  // Change this so that it will look like the Books thing with the
  // second JavaScript with just the information
  // so that I can just reference throughout the whole website.
  // I have a feeling that I will end up putting up some sort of
  // example of data storage in like SQL or something soon.

  let st = "string";
    let image = "path";
    
    switch(id) {
        case 1 :
            st = "I had to build a Node.js console app that generates random messages each time a user runs the program and log the version project with Git/GitHub. The theme was, 'What should I make for dinner tonight?'"
            imageScript = "./resources/kikki.ico";
            break;
        case 2 :
            st = "For this project, I built a personal portfolio site, a static website where I can share the projects that I built in this Path.<br>The requirements was to have at least one interactive feature, a Git version control, and to make it responsive for a mobile device."
            imageScript = "./resources/images/kikki portrait.jpg";
            break;
        case 3 :
            st = "Description for box 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "./resources/kikki.ico";
            break;
        case 4 :
            st = "Description for box 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "./resources/kikki.ico";
            break;
        case 5 :
            st = "Description for box 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe sint. Numquam ad labore quos maiores mollitia ea magni consectetur?"
            imageScript = "./resources/kikki.ico";
            break;
        default :  
            st = "---";
    }// switch
    document.getElementById('descBox').innerHTML = st;
    document.getElementById('projectImage').src= imageScript;
    document.getElementsByClassName(mobile-description).innerHTML = st;
}// function