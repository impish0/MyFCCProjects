let count = 0;

function cardCounter(card) {
  let cardMin = 2;
  let cardMax = 6;
  if(card >= cardMin && card <= cardMax) {
    count = count +1;
  } else if(card === 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count = count -1;
  }
  
  if(count <= 0) {
    return `${count} Hold`;
  } else if(count >= 1) {
    return `${count} Bet`;
  };
}
