import React from 'react';
import NoteCard from './component/NoteCard';
import './App.css';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Notes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NoteCard
            title="Note 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus velit."
          />
          <NoteCard
            title="Note 2"
            content="Praesent vel urna in purus ullamcorper aliquam quis nec enim."
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
