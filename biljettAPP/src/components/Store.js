import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  events: [],
  loading: true,
  error: null,
  fetchEvents: async () => {
    const apiUrl = 'https://santosnr6.github.io/Data/events.json';
    try {
      const response = await axios.get(apiUrl);
      const formattedEvents = response.data.events.map(event => {
        const dateObject = new Date(event.when.date);
        const day = dateObject.getDate();
        const month = dateObject.toLocaleString('sv-SE', { month: 'short' });
        return {
          ...event,
          when: {
            ...event.when,
            formattedDate: `${day} ${month}`
          }
        };
      });
      console.log('Formatted events:', formattedEvents);  
      set({ events: formattedEvents, loading: false });
    } catch (error) {
      console.log('Error fetching events:', error);
      set({ error: error, loading: false });
    }
  }
}));

export default useStore;