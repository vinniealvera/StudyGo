const questions = [
    {
      question: "During study time for exams, do you choose?",
      answers: [
        { text: "Reading notes, reading book titles and subtitles, and looking at diagrams and illustrations", correct: 0 },
        { text: "Asking someone to give you questions, or memorizing silently by yourself", correct: 1 },
        { text: "Making notes on cards and creating models or diagrams", correct: 2 }
      ]
    },

    {

        question: "What do you do while listening to music?",
        answers: [
            {text: "Daydreaming (visualizing objects that match the music being listened to)", correct: true}, 
            {text: "Singing along to the music", correct: true},
            {text: "Moving to the music, tapping your feet to the rhythm, etc.", correct: true},
        ]
    
    },
    
    {
        question: "When you're solving a problem, do you:",
        answers: [
            {text: "Make a list, organize steps, and check them off as you complete each one", correct: true}, 
            {text: "Call a friend or expert to discuss the problem", correct: true},
            {text: "Break down (analyze) the problem or go through all the steps you can think of", correct: true},
        ]
    },
    
    {
        question: "If you want to read for entertainment, do you prefer:",
        answers: [
            {text: "Travel books with lots of pictures in them", correct: true}, 
            {text: "Mystery stories full of conversations", correct: true},
            {text: "Books that can answer your questions and solve your problems", correct: true},
        ]
    },
    
    {
        question: "To learn how computers work, do you prefer:",
        answers: [
            {text: "Watching a film about how computers work", correct: true}, 
            {text: "Listening to someone explain how computers work", correct: true},
            {text: "Dismantling a computer and trying to figure out how it works yourself", correct: true},
        ]
    },
    
    {
        question: "You have just entered a science museum, what do you do first?",
        answers: [
            {text: "Look around and find a map showing the locations of various exhibits.", correct: true}, 
            {text: "Talk to the museum attendant and ask them about the exhibited objects.", correct: true},
            {text: "Look at the first interesting object and then read the directions to locate other objects.", correct: true},
        ]
    },
    
    {
    
        question: "What type of restaurant do you dislike?",
        answers: [
            {text: "Restaurants with overly bright lighting.", correct: true}, 
            {text: "Restaurants with excessively loud music.", correct: true},
            {text: "Restaurants with uncomfortable chairs.", correct: true},
        ]
    
    
    
    },
    
    {
        question: "Do you prefer to participate in:",
        answers: [
            {text: "Painting classes", correct: true}, 
            {text: "Music classes", correct: true},
            {text: "Sports classes", correct: true},
        ]
    },
    
    {
    
        question: "What do you usually do when you feel happy?",
        answers: [
            {text: "Grin (smile)", correct: true}, 
            {text: "Shout with joy", correct: true},
            {text: "Jump with excitement", correct: true},
        ]
    },
    
    {
        question: "If you were at a party, what would you most likely remember the next day?",
        answers: [
            {text: "The faces of the people at the party, but not their names.", correct: true}, 
            {text: "The names of the people at the party, but not their faces.", correct: true},
            {text: "Something you did and said during the party.", correct: true},
        ]
    },
    

  ];
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let answerCount = [0, 0, 0];
  
  function startQuiz() {
    currentQuestionIndex = 0;
    answerCount = [0, 0, 0];
    nextButton.innerText = "Next";
    showQuestion();
  }
  

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
  
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(index));
      answerButtonsElement.appendChild(button);
    });
  
    nextButton.style.display = "none";
  }


  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.style.display = "none";
  }
  
  function selectAnswer(selectedIndex) {
    answerCount[selectedIndex]++;
  
    const selectedButton = event.target;
    Array.from(answerButtonsElement.children).forEach((button, index) => {
      button.disabled = true;
      if (index === selectedIndex) {
        button.classList.add("selected");
      }
    });
  
    nextButton.style.display = "block";
  }

  function showResult() {
    resetState();
    questionElement.innerText = "";
  
    let resultCategory = "";
    let resultCount = 0;
  
    if (answerCount[0] > resultCount) {
      resultCount = answerCount[0];
      resultCategory = " ~~ Visual Learner ~~. Visual learners prefer using their sense of sight to process information effectively. They understand and remember information better through visual aids such as images, diagrams, charts, or visual models. They respond well to visual presentations, slide shows, or concept maps that help them visualize and recall the subject matter.";
    }
    if (answerCount[1] > resultCount) {
      resultCount = answerCount[1];
      resultCategory = "~~ Kinesthetic Learner ~~ .Kinesthetic learners, also known as tactile or hands-on learners, prefer using body movements and hands-on activities in the learning process. They learn best through direct experience and engaging in physical activities such as field practice, experiments, or simulations. Kinesthetic learners tend to remember information better when they have the opportunity to do or interact directly with the learning materials.";
    }
    if (answerCount[2] > resultCount) {
      resultCount = answerCount[2];
      resultCategory = "~~ Auditory Learner ~~ . Auditory learners learn by listening to verbal information. They process and remember information better through hearing and speaking. Auditory learners often benefit from learning methods that involve lectures, group discussions, oral repetition, or listening to audio recordings. They can easily recall verbal instructions and have a knack for expressing ideas verbally.";
    }
  
    const resultElement = document.createElement("div");
    resultElement.classList.add("result");
    // resultElement.innerText = `Congratulations! You're a ${resultCategory} with ${answerCount[0]} choice(s) of answer A, ${answerCount[1]} choice(s) of answer B, and ${answerCount[2]} choice(s) of answer C.`;
    resultElement.innerText = `Congratulations! You're a ${resultCategory}`;
    answerButtonsElement.appendChild(resultElement);
    nextButton.innerText = "Go to home page";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  