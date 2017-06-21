import { h, app } from "hyperapp"

module.exports = ({ ticket, onSelect, added }, children) => {
  const onAdd = () => {
    onSelect(ticket);
  };
  return (
    <div class="ticket-option">
      <button
        onclick={onAdd}
        style={{ visibility: (added === ticket.available) ? 'hidden' : 'visible'}}>
          Add
      </button>
      <h3>${ticket.price} - {ticket.name}</h3>
      <div>
        Available: {ticket.available}<br/>
        Added: { added }
      </div>
    </div>
  );
}
