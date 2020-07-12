import React, { useState, useEffect } from 'react';
import TimeBox from './TimeBox'

type TimeRangeProps = {
    setDiff(minutes: number): void
}

function TimeRange(props: TimeRangeProps) {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        if (!startTime || !endTime) {
            props.setDiff(0);
            return;
        }

        const [startHour, startMinute] = startTime.split(':');
        const [endHour, endMinute] = endTime.split(':');

        const hours = Number.parseInt(endHour) - Number.parseInt(startHour);
        const mins = Number.parseInt(endMinute) - Number.parseInt(startMinute);

        props.setDiff(((mins > 0 ? hours : hours - 1) * 60) + (mins > 0 ? mins : 60 + mins))
    }, [startTime, endTime, props])

    return (
        <div className='timeRange'>
            <TimeBox time={startTime} setTime={setStartTime} />
            <TimeBox time={endTime} setTime={setEndTime} />
        </div>
    );
}

export default TimeRange;