const quotes = [
  {
    quote:"성공은 자연연소의 결과가 아니다. 먼저 자기 자신에게 불을 지펴야 한다.",
    author:"Reggie Leach",
  },
  {
    quote:"성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다.",
    author:"Henry David Thoreau",
  },
  {
    quote:"게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
    author:"Mahatma Gandhi",
  },
  {
    quote:"나는 삶에서 언제나 치열함을 추구하라고, 삶을 만끽하라고 배웠다.",
    author:"Nina Berberova",
  },
  {
    quote:"인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
    author:"Grace Hansen",
  },
  {
    quote:"배우는 거부 당하기 위해 헤맨다. 거부 당하지 않으면 스스로를 거부한다.",
    author:"Charlie Chaplin",
  },
  {
    quote:"어떤 일을 달성하기로 결심했으면 그 어떤 지겨움과 혐오감도 불사하고 완수하라. 고단한 일을 해낸 데서 오는 자신감은 실로 엄청나다.",
    author:"Arnold Bennett",
  },
  {
    quote:"행복하게 여행하려면 가볍게 여행해야 한다.",
    author:"Antoine de Saint-Exupery",
  },
  {
    quote:"삶의 완전한 의미를 이해하는 것은 배우의 의무, 해석하는 것은 배우 문제, 표현하는 것은 배우의 노력이다.",
    author:"James Dean",
  },
  {
    quote:"만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
    author:"Julia Sorel",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText= todaysQuote.author;


