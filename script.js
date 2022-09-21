const btn = document.querySelector(".button");
const quote = document.querySelector(".quote");
const person = document.querySelector(".name");
const image = document.querySelector(".image");

const quotes = [
    {
        quote: `"The best way to find yourself is to lose yourself in the service of others"`,
        person: ` Mahatma Gandhi`,
        image: `mahatma gandi.jpg`
    }, {
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        person: ` Alber Einstein`,
        image: `albert.jpg`
    }, {
        quote: `"At this best, man is the noblest of all animals; separated from law and justice he is the worst."`,
        person: `Aristotle`,
        image: `aristotle.jpg`
    }, {
        quote: `"Your time is limited, so dont waste it living someone else's life."`,
        person: ` Steve Jobs`,
        image: `steve jobs.jpg`
    }, {
        quote: `"Tell me and I forget. Teach ma and I remember. Involve me and I learn."`,
        person: ` Benjamin Francklin`,
        image: `benjamin.jpg`
    }, {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`,
        image: `oprah.jpg`
    }, {
        quote: `"It does not matter how slowly you go as long as you do not stop."`,
        person: `Confucius`,
        image: `confucius.jpg`
    }, {
        quote: `"Our lives begin to end the day we become silent about things that matter."`,
        person: `Martin Luther King Jr.`,
        image: `martin.jpg`
    }, {
        quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
        person: `Dalai Lama`,
        image: `dalai.png`
    }, {
        quote: `"The journey of thousands miles begins with one step"`,
        person: `Lao Tzu`,
        image: `Lao.jpg`
    }
];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    image.removeAttribute('src');
    image.setAttribute('src', `authors/${quotes[random].image}`);
    image.setAttribute('alt', quotes[random].person);
});