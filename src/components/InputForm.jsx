import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [sample_content, setSample_content] = useState('');
  const [new_draft, setNew_Draft] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ sample_content, new_draft });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="sample_content" className="block text-sm font-medium text-gray-700">Tone Reference Text</label>
        <textarea
          id="sample_content"
          rows="3"
          value={sample_content}
          onChange={(e) => setSample_content(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter reference text here..."
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="new_draft" className="block text-sm font-medium text-gray-700">Adjustable Text</label>
        <textarea
          id="new_draft"
          rows="3"
          value={new_draft}
          onChange={(e) => setNew_Draft(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter the text you want to translate the tone of..."
          required
        ></textarea>
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        Apply Tone
      </button>
    </form>
  );
}

export default InputForm;
