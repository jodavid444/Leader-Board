export default class Kraken {
  scores = [];

  gameID = '5LfqHaZOJBWoBRbTGCeS';

  addNewScore = (score) => {
    this.scores.push(score);
  }

  clearArray = () => {
    this.scores = this.scores.splice(0, this.scores.length);
  }
}