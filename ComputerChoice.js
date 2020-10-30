class ComputerChoice {
  constructor() {
    this.options = ["paper", "rock", "scissors"];
    let _computerChoice = this.computerChoice();
    this.getComputerChoice = () => _computerChoice;
  }
  computerChoice = () => {
    const index = Math.floor(Math.random() * this.options.length);
    return this.options[index];
  };
}
