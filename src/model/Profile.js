
let data = {
  name: "Pedro Henrique Vinhas",
  avatar: "https://github.com/pedrovinhas.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 4,
  "vacation-per-year": 4,
  "value-hour": 75,
};

module.exports = {
    get() {
        return data;
    },
    update(newData) {
        data = newData;
    }
}