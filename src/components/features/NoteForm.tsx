'use client';
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Add note logic
    setTitle('');
    setContent('');
  };

  return (
    <div className="mb-4">
      <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <Input value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <Button onClick={handleSubmit}>Add Note</Button>
    </div>
  );
};

export default NoteForm;