const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const but = document.getElementById('but');


firstArray = [
"an hour ago", "this morning", "yesterday", "last night", "last week", "two weeks ago", "last year", "two days ago", "last Saturday", "last Sunday", "in 2013", "a week ago", "when I was six", "yesterday afternoon", "when I was ten", "yesterday evening", "five years ago", "last summer", "a month ago", "in 2012", "last winter", "a long time ago", "ten years ago", "last month"

]

secondArray = [
    "be", "have", "go", "take", "get", "do", "leave", "start", "see", "buy", "live", "finish", "listen to", "watch", "meet", "learn", "choose", "feel", "keep", "wear", "think", "clean", "know", "like"
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function nextOne(){
    shuffle(firstArray);
    shuffle(secondArray);
    if (firstArray.length === 0){
        text1.innerHTML = "End";
        text2.innerHTML = "End";
        return false;
    } else {
        
    text1.innerHTML = firstArray.shift();
    text2.innerHTML = secondArray.shift();
}
}

