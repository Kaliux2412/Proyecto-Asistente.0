//  Seccion de tipo de vida y edad del usuario


const startBtn = document.querySelector(".start-btn")
const popupInfo = document.querySelector(".popup-info")
const exitBtn = document.querySelector(".exit-btn")
const content = document.querySelector(".main")
const continueBtn = document.querySelector(".continue-btn")
const quizSection = document.querySelector(".quiz-section")
const quizBox = document.querySelector(".quiz-box")
const resultBox = document.querySelector(".result-box")
const endQuiz = document.querySelector(".guarBtn")


startBtn.onclick = () =>{
    popupInfo.classList.add('active')
    content.classList.add('active')
}
exitBtn.onclick = () =>{
    popupInfo.classList.remove('active')
    content.classList.remove('active')
    
}
continueBtn.onclick = () => {
    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    content.classList.remove('active')
    quizBox.classList.add('active')
    ShowQuestions(0)
    questionCounter(1)
    headerScore()
}

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
const nextBtn = document.querySelector(".next-btn")
nextBtn.onclick = () =>{
    if(questionCount < questions.length - 1){
        questionCount++;
        ShowQuestions(questionCount)
        questionNumber++
        questionCounter(questionNumber)
        nextBtn.classList.remove("active")
    }
    else{
        console.log('Preguntas Completadas')
        showResult()
    }
    
}
const optionList = document.querySelector(".option-list")
function ShowQuestions (index){
    const questionText = document.querySelector(".question-text")
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`
    
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`
    optionList.innerHTML = optionTag
    const option =  document.querySelectorAll(".option")
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}
function optionSelected(answer){
    let userAnswer = answer.textContent
    let corretAnswer = questions[questionCount].answer
    let allOptions = optionList.children.length
    if(userAnswer === corretAnswer){
        answer.classList.add('correct')
        userScore++;
        headerScore()
    }
    else{
        answer.classList.add('incorrect')
        for(let i = 0; i < allOptions; i++){
            if(optionList.children[i].textContent === corretAnswer){
                optionList.children[i].setAttribute('class', 'option correct')
            }
        }
    }
    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled')
    }
    nextBtn.classList.add("active")
}
function questionCounter (number){
    const questionTotal = document.querySelector(".question-total")
    questionTotal.textContent = `${number} of ${questions.length} Questions`
}
function headerScore (){
    const ScoreText = document.querySelector('.header-score')
    ScoreText.textContent = `Puntos: ${userScore} / ${questions.length}`
    fetch('http://localhost:3001/puntos/' + userScore)
    .then(puntos => puntos.json())
    .then(puntos =>{
        console.log(puntos)
    })
}
function showResult(){
    quizBox.classList.remove('active')
    resultBox.classList.add('active')
    const scoreText = document.querySelector('.score-text')
    scoreText.textContent = `Tu resultado es ${userScore} de ${questions.length}`
    const porcentajeBox = document.querySelector('.circular-progress')
    const porcentaje = document.querySelector('.progress-value')
    let progressStartValue = -1;
    let progressEndValue = (Math.round((userScore / questions.length) * 100));
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        console.log(progressStartValue)

        porcentaje.textContent = `${progressStartValue}%`;
        porcentajeBox.style.background = `conic-gradient(#1b78c5 ${progressStartValue * 3.6}deg, rgba(255,255,255, .1) 0deg)`;
        
        if(progressStartValue  == progressEndValue){
            clearInterval(progress)
        }
    }, speed)
}
let questions = [
    {
        number: 1,
        question: "¿Cuál fue la primera enfermedad erradicada gracias a las vacunas?",
        answer:"A. La viruela",
        options: [
            "A. La viruela",
            "La cólera",
            "El sarampión",
            "La fiebre"
        ]
    },
    {
        number: 2,
        question: "¿Cuánto mide el intestino? (grueso y delgado juntos)",
        answer:"B. Alrededor de 9 metros",
        options: [
            "A. Casi 3 metros",
            "B. Alrededor de 9 metros",
            "C. Como 5 metros",
            "D. 2 metros enredados"
        ]
    },    {
        number: 3,
        question: "¿Qué significa la OMS?",
        answer:"D. Organización Mundial de la Salud",
        options: [
            "A. Organización Mental de la Salud",
            "B. Organismo Mundial de la Salud",
            "C. Organización de la Materia de la Salud",
            "D. Organización Mundial de la Salud"
        ]
    },
    {
        number: 4,
        question: "Uno de los principales problemas que provoca el alcoholismo es:",
        answer:"C. Padecer de enfermedades en el hígado",
        options: [
            "A. Causar manifestaciones violentas en las personas que lo padecen",
            "B. Perdida de memoria",
            "C. Padecer de enfermedades en el hígado",
            "D. Causa baja presión arterial"
        ]
    },
    {
        number: 5,
        question: "La enfermedad de Crohn tiene síntomas comunes como...",
        answer:"D. Todas las anteriores",
        options: [
            "A. Perdida de peso",
            "B. Dolor en el abdomen",
            "C. Diarrea y cólicos",
            "D. Todas las anteriores"
        ]
    },    {
        number: 6,
        question: "Principalmente, ¿para qué sirven los antibióticos?",
        answer:"A. Son eficaces en las infecciones bacterianas",
        options: [
            "A. Son eficaces en las infecciones bacterianas",
            "B. Su uso abusivo provoca la muerte",
            "C. Son medicamentos que podemos tomar sin necesidad de ir a un médico",
            "D. Son muy útiles para combatir las infecciones causadas por virus"
        ]
    }
]



