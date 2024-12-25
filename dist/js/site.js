
let questions = [
  {
    id: 1,
    question: "	Which layer of the uterus is shed during menstruation? ",
    answer: "Endometrium",
    options: [
      "Perimetrium",
      "Myometrium",
      "Endometrium",
      "Ectometrium"
    ]
  },
  {
    id: 2,
    question: "Trace the flow of blood for a nephron.",
    answer: "afferent arteriole, glomerulus, efferent arteriole, peritubular capillaries",
    options: [
      "peritubular capillaries, efferent arteriole, glomerulus, afferent arteriole",
      "efferent arteriole, glomerulus, afferent arteriole, peritubular capillaries",
      "afferent arteriole, glomerulus, efferent arteriole, peritubular capillaries",
      "afferent arteriole, glomerulus, peritubular capillaries, efferent arteriole"
    ]
  },
  {
    id: 3,
    question: "	In which structure do sperm mature after they are produced?    ",
    answer: "the epididymis",
    options: [
      "the prostate gland",
      "the epididymis",
      "the bulbourethral glands",
      "the seminal vesicles"
    ]
  }
,
  {
    id: 4,
    question: "Which structure and its secretion are correctly matched?  ",
    answer: "seminal vesicles – fructose",
    options: [
      "prostate – fibrinolysin",
      "	bulbourethral gland – thick, acidic fluid",
      "epididymis – testosterone",
      "seminal vesicles – fructose"
    ]
  },
  {
    id: 5,
    question: "Which of the following is a primary function of the glomerulus?    ",
    answer: "Filtration",
    options: [
      "Filtration",
      "Reabsorption",
      "Secretion",
      "Transport"
    ]
  }
];


let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function previous() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    question_count--;
  show(question_count);
  }
  if(question_count==0){
    show(question_count);
  }
  console.log(question_count);

  
  // check if the answer is right or wrong
  
  
}

function submit() {

   
  // if the question is last then redirect to final page
  
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    
    location.href = "end.html";
  
  console.log(question_count);

  // let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  
  // question_count++;
  // show(question_count);
}



function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
