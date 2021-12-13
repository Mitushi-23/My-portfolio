//code for generating cards
let text = `{
"portfolio":[["assets/projects/iNotebook.png",
"iNotebook",
"https://inotebook23.herokuapp.com",
"iNotebook is a MERN Stack project which allows the user to signup or login, to store their notes safely.",
"https://github.com/Mitushi-23/iNotebook",
"data-aos='slide-right'"],
  
  ["assets/projects/tic-tac-toe.png",
"Tic Tac Toe",
"https://mitushi-23.github.io/Tic-Tac-Toe/",
"This is a single player and a multiplayer TIC-TAC-TOE Game. It is made using simple HTML,CSS and JS.",
"https://github.com/Mitushi-23/Tic-Tac-Toe",
"data-aos='fade-up'"],

["assets/projects/breakout.png",
"BreakOut",
"https://mitushi-23.github.io/BreakOut/",
"This is BreakOut Game which can be played on desktop using arrow keys and mouse. It is made using Canvas, and some HTML and CSS.",
"https://github.com/Mitushi-23/BreakOut",
"data-aos='fade-left'"],

["assets/projects/digitalClock.png",
"Digital Clock",
"https://digital-timeclock.netlify.app/",
"This project is made using React JS, which shows the time for different countries. It is under construction, more features to be added.",
"https://github.com/Mitushi-23/Digital-Clock",
"data-aos='flip-up'"],

    
["assets/projects/analogClock.png",
"Analog Clock",
"https://mitushi-23.github.io/Analog-Clock/",
"This is a simple analog and digital clock which shows the time of India. It is made using simple HTML,CSS and JS.",
"https://github.com/Mitushi-23/Analog-Clock",
"data-aos='fade-down'"],

["assets/projects/textApp.png",
"My TextApp",
"https://mytextapp.netlify.app/",
"This project is made using ReactJs. It converts text to upperCase or lowerCase, removes extra spaces, copy the text, count the number of characters and words,capitalize the text and also downloads the generated new text.",
"https://github.com/Mitushi-23/Text-App",
"data-aos='slide-up'"],

["assets/projects/scientificCalculator.png",
"Scientific Calculator",
"https://mitushi-23.github.io/Scientific-Calculator/",
"This is a scientific calculator which can perform many operations on numbers. It is made using HTML,CSS and JS.",
"https://github.com/Mitushi-23/Scientific-Calculator",
"data-aos='zoom-out'"],

["assets/projects/NewsApp.png",
"NewsApp",
"",
"This project is made using React JS, I have fetched API Key to collect the latest news and had shown on this App.To preview this app you have to clone it.",
"https://github.com/Mitushi-23/NewsApp",
"data-aos='fade-up'"],

["assets/projects/msteams_automator.png",
"Microsoft Teams Attendance Automator",
"",
"It manifests the meeting organizers to easily sort the absentees and presentees according to their scholar number. It also generates attendance of each student in percentage and highlights it if it is less than the threshold value.To view this visit the github repo given below.",
"https://github.com/Python-ProT/msteams-attendance",
"data-aos='flip-left'"]

]}`

const data = JSON.parse(text)

const cards = document.querySelector('.cardholder')
for (var i = 0; i < data['portfolio'].length; i++) {
  let code = `
    <div class="card" ${data['portfolio'][i][5]}>
    <div class="card__inner">
        <div class="card__face card__face--front">
        
        <div class="project">
        <img class="profile" src="${data['portfolio'][i][0]}" alt="" >
        <a href="${data['portfolio'][i][2]}" target="_blank"><h2 class="title">${data['portfolio'][i][1]}</h2></a>
        <p class="game">${data['portfolio'][i][3]}</p>
        <h3 class="repo">Github Repo-</h3>
        <a href="${data['portfolio'][i][4]}" target="_blank"><p class="game repo_link">${data['portfolio'][i][4]}</p></a>
        </div>
        </div>
       
</div>
      `
  cards.innerHTML += code
}
AOS.init({
  duration: 1200,
})

//flip code

// let card = document.querySelectorAll('.card__inner');
// // let social = document.querySelectorAll('.icon');
// for(let i=0;i<card.length;i++){
// card[i].addEventListener("click", function (e) {
//   card[i].classList.toggle('is-flipped');
// });

// social[i].addEventListener("click", function (e) {
//     social[i].classList.toggle('no-flip');
//   });
// }
