class Result {
  static checkWhoWon = (userChoice, computerChoice) => {
    //'U' - userWon
    //'C' - computerWon
    //'R' - remis

    if (userChoice === computerChoice) return "Remis";
    else if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
    )
      return "Uzytkownik";
    else return "Komputer";
  };
}
