'use client';
import React from 'react';
import { Note } from '../../types';
import Button from '../ui/Button';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className="border p-2 mb-2">
      <h3 className="font-bold">{note.title}</h3>
      <p>{note.content}</p>
      <Button onClick={() => {}}>Edit</Button>
      <Button onClick={() => {}}>Delete</Button>
    </div>
  );
};

export default NoteItem;