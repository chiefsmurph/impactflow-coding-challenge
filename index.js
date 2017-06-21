import { h, app } from "hyperapp"

// components
import WidgetContainer from './components/WidgetContainer'
import TicketOption from './components/TicketOption'
import YourOrder from './components/YourOrder'

require('./styles.scss');

var consume;

app({
  state: {
    loaded: false,
    id: null,
    name: null,
    tickets: null,
    date: null,
    basket: []
  },
  view: (state, actions) => {
    if (!state.loaded) {
      return (<WidgetContainer>loading...</WidgetContainer>);
    }
    const getAddedCount = (id) => state.basket.filter(add => add.id === id).length;
    return (
      <WidgetContainer>
        <h2>{state.name}</h2>
        happening on <strong>{state.date}</strong>
        <br/><br/>
        <i>tickets available</i>

        {
          state.tickets.map(ticket => {
            return (
              <TicketOption
                ticket={ticket}
                added={getAddedCount(ticket.id)}
                onSelect={actions.ticketClicked} />
            );
          })
        }
        <button onclick={actions.showOrder} id="buy">Click here to buy</button>

        {state.showingOrder && (
          <YourOrder
            tickets={state.tickets}
            basket={state.basket}
            hideOrder={actions.hideOrder} />
        )}
      </WidgetContainer>
    )
  },
  actions: {
    consume: (state, actions, data) => {
      console.log('actions consume')
      console.log(data);
      const displayDate = new Date(data.date).toLocaleDateString("en-US", {
          weekday: "long", year: "numeric", month: "short",
          day: "numeric", hour: "2-digit", minute: "2-digit"
      });
      return Object.assign({}, data, {
        date: displayDate,
        loaded: true
      });
    },
    ticketClicked: (state, actions, data) => {
      console.log(data);
      return {
        basket: [{
          id: data.id,
          name: data.name,
          price: data.price
        }].concat(state.basket)
      };
    },
    showOrder: (state, actions) => {
      document.getElementById('buy').blur() // remove blue box around button
      return {
        showingOrder: true
      };
    },
    hideOrder: (state, actions) => {
      return {
        showingOrder: false
      };
    }
  },
  events: {
    loaded: (state, actions) => {
      // exposing consume action
      consume = (data) => actions.consume(data.event);
    }
  }
});

window.EventWidget = {
  consume: (data) => {
    console.log('return consume')
    consume(data);
  }
};
