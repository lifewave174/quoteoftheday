//let's declare our variables first

const quote=document.querySelector(".quote>p");
const generateButton=document.querySelector(".generateButton");
const copyButton=document.querySelector(".copyButton")

//generate random quote

const quotesArray=[
    "“In the depth of winter, I finally learned that within me there lay an invincible summer.”",
    "“Man is the only creature who refuses to be what he is.”",
    "“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.”",
    "“Nobody realizes that some people expend tremendous energy merely to be normal.”",
    "“You know what charm is: a way of getting the answer yes without having asked any clear question.”",
    "“The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.”",
    "“Blessed are the hearts that can bend; they shall never be broken.”",
    "“I may not have been sure about what really did interest me, but I was absolutely sure about what didn't.",
    "“Real generosity towards the future lies in giving all to the present.”",
    "“An intellectual? Yes. And never deny it. An intellectual is someone whose mind watches itself. I like this, because I am happy to be both halves, the watcher and the watched. 'Can they be brought together?' This is a practical question. We must get down to it. 'I despise intelligence 'really means: 'I cannot bear my doubts.'”",
    "“I opened myself to the gentle indifference of the world.”",
    "“The purpose of a writer is to keep civilization from destroying itself.”",
    "“In order to understand the world, one has to turn away from it on occasion”",
    "“I do not believe in God and I am not an atheist.”",
    "“Fiction is the lie through which we tell the truth.”",
    "“There is not love of life without despair about life.”",
    "“Seeking what is true is not seeking what is desirable.”",
    "“If something is going to happen to me, I want to be there.”",
    "“Every act of rebellion expresses a nostalgia for innocence and an appeal to the essence of being.”",
    "“There is scarcely any passion without struggle.”",
    "“I rebel; therefore I exist.”",
    "“Life can be magnificent and overwhelming -- that is the whole tragedy. Without beauty, love, or danger it would almost be easy to live. ”",
    "“Freedom is nothing but a chance to be better.”",
    "“I know that man is capable of great deeds. But if he isn't capable of great emotion, well, he leaves me cold.”",
    "“The evil that is in the world almost always comes from ignorance, and good intentions may do as much harm as malevolence if they lack understanding.”",
    "“The truth is that everyone is bored, and devotes himself to cultivating habits.”"
]

generateButton.addEventListener("click",()=>{
    let quoteOfTheDay=Math.floor(Math.random()*quotesArray.length);
    quote.textContent=quotesArray[quoteOfTheDay];
    quote.style.backgroundColor="rgba(51, 49, 49, 0.411)";
    quote.parentElement.style.display="block"
    quote.parentElement.style.display="flex"
    quote.parentElement.style.justifyContent="center"
    quote.style.padding="6px"
    quote.style.textAlign="center"
})











