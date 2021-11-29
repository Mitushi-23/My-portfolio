//code for generating cards
let text = `{
"portfolio":[["projects/tic-tac-toe.png",
"Tic Tac Toe",
"https://mitushi-23.github.io/Tic-Tac-Toe/",
"This is a single player and a multiplayer TIC-TAC-TOE Game. It is made using simple HTML,CSS and JS.",
"https://github.com/Mitushi-23/Tic-Tac-Toe",
"data-aos='fade-right'"],

["projects/breakout.png",
"BreakOut",
"https://mitushi-23.github.io/BreakOut/",
"This is BreakOut Game which can be played on desktop using arrow keys and mouse. It is made using Canvas, and some HTML and CSS.",
"https://github.com/Mitushi-23/BreakOut",
"data-aos='fade-up'"],

["projects/digitalClock.png",
"Digital Clock",
"https://digital-timeclock.netlify.app/",
"This project is made using React JS, which shows the time for different countries. It is under construction, more features to be added.",
"https://github.com/Mitushi-23/Digital-Clock",
"data-aos='flip-up'"],

    
["projects/analogClock.png",
"Analog Clock",
"https://mitushi-23.github.io/Analog-Clock/",
"This is a simple analog and digital clock which show~s the time of India. It is made using simple HTML,CSS and JS.",
"https://github.com/Mitushi-23/Analog-Clock",
"data-aos='fade-down'"],

["projects/textApp.png",
"My TextApp",
"https://mytextapp.netlify.app/",
"This project is made with React JS. It can convert any text to upperCase or lowerCase, can remove extra spaces, copy the text and also can count the number of characters and words.",
"https://github.com/Mitushi-23/Text-App",
"data-aos='slide-up'"],

["projects/scientificCalculator.png",
"Scientific Calculator",
"https://mitushi-23.github.io/Scientific-Calculator/",
"This is a scientific calculator which can perform many operations on numbers. It is made using HTML,CSS and JS.",
"https://github.com/Mitushi-23/Scientific-Calculator",
"data-aos='zoom-out'"],

["projects/NewsApp.png",
"NewsApp",
"",
"This project is made using React JS, I have fetched API Key to collect the latest news and had shown on this App.To preview this app you have to clone it.",
"https://github.com/Mitushi-23/NewsApp",
"data-aos='fade-up'"]]

}`

const data = JSON.parse(text)

const cards = document.querySelector('.cardholder')
for (var i = 0; i < data['portfolio'].length; i++) {
  let code = `
    <div class="card" ${data['portfolio'][i][5]}>
    <div class="card__inner">
        <div class="card__face card__face--front">
        
        <img class="profile" src="${data['portfolio'][i][0]}" alt="" >
        <div class="project">
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
