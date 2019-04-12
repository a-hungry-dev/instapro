//takes in value
const isEmpty = value =>
  value === undefined || //if value is undefined
  value === null || //if value is null
  (typeof value === "object" && Object.keys(value).length === 0) || //if value is an empty object
  (typeof value === "string" && value.trim().length === 0); //if value is empty string

module.exports = isEmpty;
