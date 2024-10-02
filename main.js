let btn = document.querySelector("#sub-btn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");




const quotes = [
    {quote:`"The only way to do great work is to love what you do."`,
        person: `"Steve Jobs"`},

    {quote:`"In three words I can sum up everything I've learned about life: it goes on."`,
        person: `"Robert Frost"`},

    {
        quote:`"In three words I can sum up everything I've learned about life: it goes on."`,
        person: `"Robert Frost"`
    }, {
        quote:`"Be yourself; everyone else is already taken."`,
        person: `"Oscar Wilde"`
    }, {
        quote:`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
        person: `"Ralph Waldo Emerson"`
    },{
        quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
        person: `"Winston Churchill"`
    },{
        quote:`"The best way to predict the future is to invent it."`,
        person: `"Alan Kay"`
    },{
        quote:`"Life is what happens when you're busy making other plans."`,
        person: `"John Lennon"`
    },{
        quote:`"you miss 100% of the shots you don't take."`,
        person: `"Franklin D. Roosevelt"`},
    
    {quote:`"The only limit to our realization of tomorrow is our doubts of today."`,
        person: `"Wayne Gretzky"`},

    {quote:`"Happiness is not something ready made. It comes from your own actions.."`,
        person: `"Dalai Lama"`},
]

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});


