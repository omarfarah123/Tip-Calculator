//tipCalculator
function tipCalculator(quality, total){
  switch(quality){
    case "bad":
      return (5/100) * total;
    case "ok":
      return (15/100) * total;
    case "good":
      return (20/100) * total;
    case "excellent":
      return (30/100) * total;
    default:
      return (18/100) * total;
  }
}






console.log(tipCalculator('good', 100)); //should return 20

console.log(tipCalculator("ok", 90));//Should return 13.5

console.log(tipCalculator("bad", 25));
//Should return 1.25
