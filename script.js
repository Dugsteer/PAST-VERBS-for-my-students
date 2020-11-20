const text1 = document.getElementById("text1");

firstArray = [
  "What countries have you travelled to? Describe your best travelling experience.",
  "What hobbies do you have? Which one is your favourite?",
  "Do you think it’s better to live in a house or a flat? Explain.",
  "Name three very challenging jobs. Explain your choice.",
  "Name three movie genres and describe them.",
  "What qualities do you value in your friends? Why?",
  "Do you consider yourself to be a leader?",
  "What's the best way to exercise? Or is exercise not important?",
  "What's your perfect Winter holiday?",
  "How do you handle stress?",
  "Have you ever got lost? Describe what happened",
  "Have you ever been a victim of crime? Explain.",
  "Is watching TV bad for people’s physical and mental health? Explain.",
  "Can video games be dangerous? Explain.",
  "What was the most memorable toy you played with when you were little? Explain.",
  "Would you move to another country if you had the opportunity?",
  "Which TWO superpowers would you choose?",
  "Do you think volunteering is good for people (the volunteers)? Why?",
  "What countries would you be afraid to travel to? Why?",
  "What makes you particularly happy?",
  "What is the most relaxing activity according to you? Why?",
  "Do you agree with capital punishment in any circumstances? Explain.",
  "Have you ever been in a car accident? Describe what happened.",
  "What is your dream job?",
  "What advice would you give a newlywed couple? Why?",
  "What Do You Like About Yourself Most? Why?",
  "If a friend asked you to lie and you knew you would get into trouble, would you do it?",
  "Would ever you help a friend to cheat in an exam?",
  "When do you Google?",
  "What has been your best moment this year?",
  "Are you a brave person? Explain.",
  "Mountain, beach or city. Which one is for you?",
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextOne() {
  shuffle(firstArray);
  if (firstArray.length === 0) {
    text1.innerHTML = "That's All Folks!";
    return false;
  } else {
    text1.innerHTML = firstArray.shift();
    console.log(firstArray);
  }
}
