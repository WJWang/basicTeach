var order = function(userOrder) {
  switch (userOrder) {
    case "雞腿飯":
      console.log("雞腿飯 90元");
      break;
    case "魚排飯":
      console.log("魚排飯 95元");
      break;
    case "排骨飯":
      console.log("排骨飯 80元");
      break;
    default:
      console.log("你輸入的餐點不存在");
  }
};

module.exports = order;
