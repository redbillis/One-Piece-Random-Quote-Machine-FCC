const QUOTES = [
    {
      quote: "You Want To Keep Everyone From Dying? That’s Naïve. It’s War. People Die",
      author: "Monkey D. Luffy"
    }, {
      quote: "Justice Will Prevail, You say? But Of Course, It Will! Whoever Wins This War Becomes Justice!",
      author: "Donquixote Doflamingo"
    }, {
      quote: "People’s Dreams... Have No Ends",
      author: "Marshall 'Blackbeard' D. Teach"
    }, {
      quote: "Only I Can Call My Dream Stupid!",
      author: "Roronoa Zoro"
    }, {
      quote: "When You Aim High, You Sometimes Come Across Fights Not Worth Fighting",
      author: "Marshall 'Blackbeard' D. Teach"
    }, {
      quote: "When Do You Think People Die? When They Are Shot In The Heart With A Pistol? No. When They Are Ravaged By An Uncurable Disease? No. When They Drink A Soup Made From Poisonous Mushrooms? No. It’s When... They Are Forgotten!",
      author: "Dr.Hiriluk"
    }, {
      quote: "I Won’t Die, Partner",
      author: "Gol D. Roger"
    }, {
      quote: "One Piece, Does Exist!",
      author: "Edward 'Whitebeard' Newgate"
    }, {
      quote: "Stop Counting Only Those Things You Have Lost! What Is Gone, Is Gone! So Ask Yourself This. What Is There... That Still Remains To You?!",
      author: "Jinbei"
    }, {
      quote: "Inherited Will, The Destiny Of Age, The Dreams Of Its People. As Long As People Continue To Pursue The Meaning Of Freedom, These Things Will Never Cease!",
      author: "Gol D. Roger"
    }
  ];
  
  // Window Loading
  window.onload = init;
  function init() {
    generateQuote();
  }
  
  function generateQuote() {
    // Random index selection from QUOTEBANK
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTES[randomIndex];
    
    let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + randomQuoteData;
    // Add the Quote
    
    // Add the Author
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote + "\n";
    document.getElementById("author").innerText = randomQuoteData.author;
  }