import React from 'react';

function DisplayResult({ result }) {
  return (
    <div className="mt-5 p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold">Translated Text</h2>
      <p className="mt-2 text-gray-600">{result || 'No results to display'}</p>
    </div>
  );
}
export default DisplayResult;