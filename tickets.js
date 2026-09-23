function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seatingType = 'standard') {
  
  let price = Math.round(quantity * basePrice);

  
  if (seatingType === 'premium') {
    price *= 1.50;
  }


  if (quantity >= 5) {
    price *= 0.90;
  }


  price -= 10;

  return price;
}

module.exports = { isValidQuantity, calculateTicketPrice };