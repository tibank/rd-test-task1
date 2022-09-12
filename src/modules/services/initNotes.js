import { mockNotes } from './mockNotes';

export const initDb = () => {
    localStorage.setItem('ListNotes', JSON.stringify(mockNotes));
};
