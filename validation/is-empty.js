const isEmpty = value => {
  if (value === undefined) {
    console.log("its undefined");
    return true;
  } else if (value === null) {
    return true;
  } else if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  } else if (typeof value === "string" && value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = isEmpty;
