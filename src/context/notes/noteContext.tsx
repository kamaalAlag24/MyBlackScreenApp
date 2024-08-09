import {createContext} from 'react';

interface NoteContextType {
  name: string;
  Age: string;
}

const noteContext = createContext<NoteContextType | undefined>(undefined);

export default noteContext;
export type {NoteContextType};
