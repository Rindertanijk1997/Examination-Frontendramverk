import { create } from 'zustand';

const useTicketStore = create(set => ({
  tickets: {},  // Lagrar biljettantal per event-ID

  addTickets: (eventId, number = 1) => set(state => {
    const currentCount = state.tickets[eventId] || 0;
    const newState = { tickets: { ...state.tickets, [eventId]: currentCount + number } };
    console.log("Adding tickets, new state:", newState);
    return newState;
  }),

  removeTickets: (eventId, number = 1) => set(state => {
    const newCount = Math.max(0, (state.tickets[eventId] || 0) - number);
    let newState;
    if (newCount > 0) {
      newState = { tickets: { ...state.tickets, [eventId]: newCount } };
    } else {
      const { [eventId]: _, ...restTickets } = state.tickets;
      newState = { tickets: restTickets };
    }
    console.log("Removing tickets, new state:", newState);
    return newState;
  })
}));

export default useTicketStore;