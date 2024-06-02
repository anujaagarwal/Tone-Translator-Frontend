import React, { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayResult from './components/DisplayResult';
import TimeDisplay from './components/TimeDisplay';
import axios from 'axios';

function App() {
  const [result, setResult] = useState('');
  const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const handleFormSubmit = async (data) => {
    console.log('Submitting:', data);
    axios.post(`${BASE_URL}/translate-tone`, data)
        .then((res) => {
            if (res.data && res.data.completion) {
                const parsedInner = JSON.parse(res.data.completion);
                setResult(`Tone of Sample Content is ${parsedInner.sample_tone}. This is the writing style translated draft based on the sample content provided: ${parsedInner.translated_text}`);
            } else {
                console.log("Error: Unexpected response format", res.data);
            }
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
        })};

  return (
    <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
      
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
     
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
         
        </div>
        
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        
          <div className="max-w-md mx-auto">
            <TimeDisplay />
            <InputForm onSubmit={handleFormSubmit} />
            <DisplayResult result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
