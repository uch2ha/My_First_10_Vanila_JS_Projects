
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("0_text")
const b_text = document.getElementById("1_text")
const c_text = document.getElementById("2_text")
const d_text = document.getElementById("3_text")
const submitBtn = document.getElementById("submit")

const arr = [];
const correctArrId = [];

loadQuiz();


async function loadQuiz(){
    
    const resp = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    const respData = await resp.json();
    const quizData = respData.results[0];
    
    questionEl.innerHTML = quizData.question;

    for(let i = 0; i<3; i++){
        arr.push(quizData.incorrect_answers[i])
    }

    arr.push(quizData.correct_answer);
    shuffle(arr);

    correctArrId.push(arr.indexOf(quizData.correct_answer))

    a_text.innerHTML =  arr[0];
    b_text.innerHTML =  arr[1];
    c_text.innerHTML =  arr[2];
    d_text.innerHTML =  arr[3];
    

    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

/* not needed for now

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}
*/


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if(answer == correctArrId[0]){
            quiz.innerHTML = 
            `<h2> Right! </h2>
            <button onclick="location.reload()">Next question</button>`;

        } else {
            quiz.innerHTML = 
            `<h2> Wrong! </h2>
            <button onclick="location.reload()">Next question</button>`; 
        
    
        }
        
    }
    
})



