var questions = [
  {
    category: "Brainrot",
    question: "What do you do when the voices win?",
    choices: ["Touch grass", "Start mewing", "Obey the council"],
    answer: "Obey the council",
  },
  {
    category: "Dumbassology",
    question: "If you eat yourself, do you become twice as big or disappear?",
    choices: ["Become a god", "Disappear", "Unlock infinite food glitch"],
    answer: "Unlock infinite food glitch",
  },
  {
    category: "Life Skills",
    question: "What is the best way to survive a breakup?",
    choices: ["Hit the gym", "Become Batman", "Post Sigma edits at 3 AM"],
    answer: "Post Sigma edits at 3 AM",
  },
  {
    category: "Advanced Stupidity",
    question: "A mosquito lands on your balls. What do you do?",
    choices: ["Accept your fate", "Dodge like a ninja", "Parry that mf"],
    answer: "Parry that mf",
  },
  {
    category: "Philosophy",
    question: "If water is wet, is a fish swimming or just existing?",
    choices: [
      "Swimming",
      "Existing with extra steps",
      "Paying rent underwater",
    ],
    answer: "Paying rent underwater",
  },
  {
    category: "Economics",
    question: "You're broke but want a Lamborghini. What's the move?",
    choices: ["Get a job", "Rob a GTA NPC", "Manifest aggressively"],
    answer: "Rob a GTA NPC",
  },
  {
    category: "Science",
    question: "What happens if you microwave a microwave?",
    choices: [
      "Infinite microwave",
      "The universe crashes",
      "Windows error sound",
    ],
    answer: "The universe crashes",
  },
];

function getRandomQuestion(questionArray = questions) {
  let value = Math.floor(Math.random() * questionArray.length);
  return questionArray[value];
}

function getRandomComputerChoice(answerArray) {
  let length = answerArray.length;
  let value = Math.floor(Math.random() * length);
  return answerArray[value];
}

function getResults(question, computerChoice) {
  if (question.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
