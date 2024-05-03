import { create } from 'zustand';

const useTicketStore = create(set => ({
  ticketCount: 0,
  increaseTicketCount: () => set(state => ({ ticketCount: state.ticketCount + 1 })),
  decreaseTicketCount: () => set(state => ({ ticketCount: Math.max(0, state.ticketCount - 1) }))
}));


   export default useTicketStore;