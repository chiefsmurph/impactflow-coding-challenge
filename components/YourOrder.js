import { h, app } from "hyperapp"

module.exports = ({ tickets, basket, hideOrder }, children) => {
  const ticketsFound = tickets.filter(ticket => {
    return basket.some(purchase => purchase.id === ticket.id);
  });
  const ticketCount = (id) => {
    return basket.filter(purchase => purchase.id === id).length;
  };
  const subtotal = (price, quantity) => price * quantity;
  const total = basket.reduce((acc, purchase) => {
    return acc + Number(purchase.price);
  }, 0);
  return (
    <div class="your-order">
      <h3>Your Order</h3>

      { (ticketsFound.length) ? (
        <ul>
        {ticketsFound.map(ticket => (
          <li>
            <div>
              {ticket.name} - {ticketCount(ticket.id)} added at ${ticket.price} per ticket
            </div>
            <div>${subtotal(ticket.price, ticketCount(ticket.id))}</div>
          </li>
        ))}
        </ul>
      ) : (
        <i>Sorry, but you have not added any tickets.  Go for it!</i>
      )}
      <hr/>
      <b>Total: ${total}</b>
      <footer>
        <button onclick={hideOrder}>Cancel</button>
        <button>Submit Order</button>
      </footer>
    </div>
  );
}
