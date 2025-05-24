// -----------------------------------------------------------------
// date.js – Custom Utility for Date Formatting
// -----------------------------------------------------------------
// Exports functions to return the current date or day of the week
// in a human-readable format for use in the to-do list header.
// -----------------------------------------------------------------

// Return full date: e.g., "Monday, August 21"
exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

// Return weekday only: e.g., "Monday"
exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);
};
