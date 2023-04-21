module.exports.getDate = function getDate() {
    let bdTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    return new Date(bdTime);
  }

  