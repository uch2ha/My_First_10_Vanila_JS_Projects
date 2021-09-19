
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("0_text")
const b_text = document.getElementById("1_text")
const c_text = document.getElementById("2_text")
const d_text = document.getElementById("3_text")
const submitBtn = document.getElementById("submit")


const array = [];

const score = 0;

const currentQuiz = 0;




console.log(array)

loadQuiz();






async function loadQuiz(){
    
 
    const resp = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
    const respData = await resp.json();
    const quizData = respData;
    
    for(let i=0; i<5;i++){
        array.push({
            question:`${quizData.results[i].question}`,
            correct:`${quizData.results[i].correct_answer}`,
            incorrect3:`${quizData.results[i].incorrect_answers[0]}`,
            incorrect1:`${quizData.results[i].incorrect_answers[1]}`,
            incorrect2:`${quizData.results[i].incorrect_answers[2]}`,
        })

    }

    console.log(array)



/*

    questionEl.innerHTML = quizData.results[0].question;


    for(let i = 0; i<3; i++){
        arr.push(quizData.results[0].incorrect_answers[i])
    }

    arr.push(quizData.results[0].correct_answer);
    shuffle(arr);

    correctArr.push(arr.indexOf(quizData.results[0].correct_answer))

    console.log(arr)
    console.log(correctArr)

    
    a_text.innerHTML =  arr[0];
    b_text.innerHTML =  arr[1];
    c_text.innerHTML =  arr[2];
    d_text.innerHTML =  arr[3];
    


    array.push({
        question:`${quizData.results[0].question}`,
        correct:`${quizData.results[0].correct_answer}`,
        incorrect3:`${quizData.results[0].incorrect_answers[0]}`,
        incorrect1:`${quizData.results[0].incorrect_answers[1]}`,
        incorrect2:`${quizData.results[0].incorrect_answers[2]}`,
    })

    array.push({
        question:`${quizData.results[1].question}`,
        correct:`${quizData.results[1].correct_answer}`,
        incorrect3:`${quizData.results[1].incorrect_answers[0]}`,
        incorrect1:`${quizData.results[1].incorrect_answers[1]}`,
        incorrect2:`${quizData.results[1].incorrect_answers[2]}`,
    })

    console.log(array[2].question)
    */
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

/* not needed
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

    console.log(answer)
    console.log(correctArr[0])

    if (answer) {
        if(answer == correctArr[0]){
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



