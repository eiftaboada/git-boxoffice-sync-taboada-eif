function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seating = 'standard') {
  let price = Math.floor(quantity * basePrice);

  if (seating === 'premium') {
    price *= 1.50;
  }

  return price;
}

module.exports = { isValidQuantity, calculateTicketPrice };
