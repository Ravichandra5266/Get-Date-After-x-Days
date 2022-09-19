const add = require("date-fns/addDays");

const xDays = (days) => {
  const addDate = add(new Date(2020, 7, 22), days);
  return `${addDate.getDate()}-${
    addDate.getMonth() + 1
  }-${addDate.getFullYear()}`;
};

module.exports = xDays;
