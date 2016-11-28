var animal = 'dog'
var animals = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animals
}

function add2(n) {


  // Feel free to move things around!
  const two = 2
  return n + two
}

function funkyFunction() {
  return function theFunk() {
    return "FUNKY!"
  }

  return theFunk()

}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
funkyFunction()
