import React, { useState, useEffect } from 'react';

function TimeDisplay() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div className='inline-flex justify-between'>
            <div>
                <h1 className='text-3xl font-semibold text-black'>Written Tone Translator</h1>

            </div>
            <div className="time-display p-4 bg-gray-200 rounded shadow">
                <h1 className="text-xl font-semibold">Current Time and Date</h1>
                <p className="text-lg">{currentTime.toLocaleTimeString()} on {currentTime.toDateString()}</p>
            </div>
        </div>
    );
    
}

export default TimeDisplay;
