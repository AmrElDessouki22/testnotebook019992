'use client';
import React from 'react';
import { useNotes } from '../../contexts/NotesContext';
import NoteItem from './NoteItem';

const NotesList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;