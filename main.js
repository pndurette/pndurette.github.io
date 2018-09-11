function quote(quotes) {
    // Write a random quote from an array of quotes
    // quotes: a string that can be evaled as an array of string
    quote = quotes[Math.floor(Math.random()*quotes.length)];
    document.write(quote)
}
