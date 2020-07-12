import React, {useState} from 'react';
import TimeBox from './TimeBox'

export default function TimeRange(props) {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    return (
        <div className='timeRange'>
            <TimeBox time={startTime} setTime={setStartTime}/>
            <TimeBox time={endTime} setTime={setEndTime}/>
        </div>
    );
}