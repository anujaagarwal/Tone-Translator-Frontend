import React from 'react';
import SmallCard from './SmallCard';

function DisplayResult({result} ) {
  return (
    <div className="mt-5 p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold">Translated Text</h2>
      {result ? (<div className='block'>

<SmallCard text={`Detected Tone - ${result.tone}` || ''}/>
<SmallCard text={`Detected Sentiment - ${result.sentiment}`} />
<SmallCard text={`Translated Text - ${result.translated}`} />
</div>) : (
  <p className="mt-2 text-gray-600">No results to display</p>

)}
      
      {/* <p className="mt-2 text-gray-600">{result || 'No results to display'}</p> */}
    </div>
  );
}
export default DisplayResult
