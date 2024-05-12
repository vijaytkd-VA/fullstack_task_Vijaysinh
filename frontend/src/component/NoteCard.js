// components/NoteCard.js

import React from 'react';

const NoteCard = ({ title, content }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <button className="text-white font-bold uppercase">Edit</button>
        <button className="text-white font-bold uppercase">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
