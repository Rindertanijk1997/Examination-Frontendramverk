import create from 'zustand';

   const useTicketStore = create(set => ({
     ticketCount: 0,  // Initialt värde på biljettantalet
     increaseTicketCount: () => set(state => ({ ticketCount: state.ticketCount + 1 })),
     decreaseTicketCount: () => set(state => ({ ticketCount: Math.max(0, state.ticketCount - 1) })),
     setTicketCount: (count) => set({ ticketCount: count })
   }));

   export default useTicketStore;