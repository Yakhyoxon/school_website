const fullDate = document.getElementById('full-date');

const mont = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
]

const date = new Date();

const years = date.getFullYear();
const months = date.getMonth();
const days = date.getDate();
const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const minut = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

fullDate.textContent = `${years} ${mont[months]} ${days} | ${hour}:${minut}`;


