histogram = [0, 0, 0, 0]

for (var i = 0; i < 100000; i++) {
  histogram[randomInteger(0, 4)] += 1
}

console.log(histogram)

function randomInteger(low, high) {
  return Math.floor(low + Math.random() * (high - low))
}
