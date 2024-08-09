import React, {ReactNode} from 'react';
import noteContext from './noteContext';

interface NoteStateProps {
  children: ReactNode;
}

const NoteState: React.FC<NoteStateProps> = props => {
  const state = {
    name: 'Kamaal',
    Age: '21',
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
