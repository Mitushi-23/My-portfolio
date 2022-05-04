//code for generating cards
let text = `{
    "portfolio":[["p2","MongoDb"],
    ["p3","ReactJS"],
    ["p1","ExpressJS"],
    ["p7","NodeJS"],
    ["p6","C/C++"],
    ["p5","JAVA"],
    ["p4","HTML5"],
    ["p4","CSS3"],
    ["p5","JavaScript"],
    ["p3","Figma"],
    ["p2","DSA"],
    ["p7","OOPs"]
]
    }`

const data = JSON.parse(text)
console.log(data['portfolio'].length)
const bar = document.querySelector('.progressHolder')
for (var i = 0; i < data['portfolio'].length; i += 2) {
  console.log(data['portfolio'][i])
  let code = `
  <div class="skillContain">
         <div class="progress border border-dark"
          style="height: 22px; border-radius: 10px"
        >
          <div
          class="progress-bar show-on-scroll ${data['portfolio'][i][0]}"
          role="progressbar"
          style="
            width: 0%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            background-color: rgb(233, 67, 155);
          "
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <h4 class="skill" style="padding: 10px;padding-top: 20px;">${
            data['portfolio'][i][1]
          }</h4>
        </div>
        </div>
        <div
          class="progress border border-dark"
          style="height: 22px; border-radius: 10px"
        >
          <div
          class="progress-bar show-on-scroll ${data['portfolio'][i + 1][0]}"
          role="progressbar"
          style="
            width: 0%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            background-color: rgb(233, 67, 155);
          "
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
        <h4 class="skill" style="padding: 10px;padding-top: 20px;">${
          data['portfolio'][i + 1][1]
        }</h4>
        </div>
        </div>
        </div>
        <br/>
        `
  bar.innerHTML += code
}
