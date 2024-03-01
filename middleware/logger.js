let date = new Date()
console.log(date);

const currentDay = date.getDay()
console.log(currentDay);

const currentHour = date.getHours();
console.log(currentHour);

const logger = (req, res, next) => {
    if (currentHour >= 9 && currentHour < 17 && currentDay >= 1 && currentDay <= 5) {
        next();
    } else {
        res.send("<h1>Sorry, we are closed.</h1>");
    }
}

module.exports = logger