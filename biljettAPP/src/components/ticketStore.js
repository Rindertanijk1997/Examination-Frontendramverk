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
      const newTickets = { ...state.tickets, [eventId]: Math.max(0, currentCount - number) };
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
