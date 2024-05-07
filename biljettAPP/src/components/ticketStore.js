import { create } from 'zustand';

const useTicketStore = create((set) => ({
  tickets: {},
  order: [],
  addTickets: (eventId, number = 1) => {
    set((state) => {
      const currentCount = state.tickets[eventId] || 0;
      const newTickets = { ...state.tickets, [eventId]: currentCount + number };
      return { tickets: newTickets };
    });
  },
  removeTickets: (eventId, number = 1) => {
    set((state) => {
      const currentCount = state.tickets[eventId] || 0;
      const newCount = Math.max(0, currentCount - number);
      const newTickets = { ...state.tickets, [eventId]: newCount };
      if (newCount === 0) {
        // Ta bort eventet från ordern om inga biljetter finns kvar
        const newOrder = state.order.filter(event => event.id !== eventId);
        return { tickets: newTickets, order: newOrder };
      }
      return { tickets: newTickets };
    });
  },
  addToOrder: (event) => {
    set((state) => ({
      order: [...state.order, event]
    }));
  }
}));

export default useTicketStore;