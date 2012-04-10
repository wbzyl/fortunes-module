function fortunes() {
  return quotes[randomInteger(0, size)]
}

var quotes = [
  "Zdanie to największa forma literacka.",
  "Znasz hasło do swojego wnętrza?",
  "Jedną z cech głupstwa jest logika.",
  "Kobiety rozumieją lepiej żywe istoty, mężczyźni martwe.",
  "Miłość robi odkrycia, rozpusta wynalazki.",
  "Tylko nieuzasadniona zarozumiałość jest uzasadniona."
]

var size = quotes.length

// This function returns a random integer in the range [low..high)

function randomInteger(low, high) {
  return Math.floor(low + Math.random() * (high - low))
}

module.exports = fortunes
