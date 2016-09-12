var getLevel = function(studenGrade) {
  if (studenGrade > 100 || studenGrade < 0) {
    return "你的輸入分數不符合格式。";
  } else if (studenGrade >= 80 && studenGrade <= 100) {
    return "你的等第為：優等";
  } else if (studenGrade >= 70 &&  studenGrade < 80) {
    return "你的等第為：甲等";
  } else if (studenGrade >= 60 &&  studenGrade < 70) {
    return "你的等第為：乙等";
  } else {
    return "你的等第為：不及格";
  }
};

module.exports = getLevel;
