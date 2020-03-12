const cloud = require("wx-server-sdk");
cloud.init();
const db = cloud.database({
  env: "weather-98a5be"
});
exports.main = async (event, context) => {
  return db.collection("hotCities").get();
};
