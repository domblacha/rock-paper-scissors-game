class Statistic {
  constructor() {
    this.stats = [];
  }
  addToStatistic = (result) => {
    this.stats.push(result);
  };

  getStatistic = () => {
    let games = this.stats.length;
    let wins = this.stats.filter((item) => item === "Uzytkownik").length;
    let losses = this.stats.filter((item) => item === "Komputer").length;
    let remis = this.stats.filter((item) => item === "Remis").length;
    return [games, wins, losses, remis];
  };
}
