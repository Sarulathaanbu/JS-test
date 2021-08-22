function getNumber(a) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

  if (a % 3 === 0 && a % 5 === 0) {
    console.log("Jackpot")
  } else if (a % 3 === 0) {

    console.log("This is divisible by 3")
  } else if (a % 5 === 0) {
    console.log("This is divisible by 5")
  }
}
getNumber(3);
