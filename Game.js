class Game {
  constructor() {
    this.statistic = new Statistic();
    this.userChoice = new UserChoice("");

    document.querySelectorAll(".select img").forEach(item =>
      item.addEventListener("click", () => {
        document
          .querySelectorAll(".select img")
          .forEach(item => item.classList.remove("active"));
        item.classList.add("active");
        this.userChoice = new UserChoice(item.dataset.option);
      })
    );

    document
      .querySelector(".start")
      .addEventListener("click", this.startGame.bind(this));

    this.pUserChoice = document.querySelector('[data-summary="your-choice"]');
    this.pComputerChoice = document.querySelector('[data-summary="ai-choice"]');
    this.h2WhoWin = document.querySelector('[data-summary="who-win"] ');
    this.pGames = document.querySelector(".numbers span");
    this.pWins = document.querySelector(".wins span");
    this.pLosses = document.querySelector(".losses span");
    this.pDraws = document.querySelector(".draws span");
    this.render();
  }
  render = (
    userChoice = "",
    computerChoice = "",
    whoWins = "",
    statistic = ["", "", "", ""]
  ) => {
    this.pUserChoice.textContent = userChoice;
    this.pComputerChoice.textContent = computerChoice;
    this.h2WhoWin.textContent = whoWins;
    this.pGames.textContent = statistic[0];
    this.pWins.textContent = statistic[1];
    this.pLosses.textContent = statistic[2];
    this.pDraws.textContent = statistic[3];
  };
  startGame() {
    if (this.userChoice.getUserChoice() === "") return alert("Dokonaj wyboru!");
    const computerChoice = new ComputerChoice();
    const result = Result.checkWhoWon(
      this.userChoice.getUserChoice(),
      computerChoice.getComputerChoice()
    );
    document
      .querySelectorAll(".select img")
      .forEach(item => item.classList.remove("active"));
    this.statistic.addToStatistic(result);

    this.render(
      this.userChoice.getUserChoice(),
      computerChoice.getComputerChoice(),
      result,
      this.statistic.getStatistic()
    );
    this.userChoice = new UserChoice("");
  }
}
