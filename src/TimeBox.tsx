import React, { useState } from 'react';

// type TimeBoxProps = 

function TimeBox(props: {
    time: string,
    setTime(time: string): void
}) {
    return (
        <div>
            <input type='time'
                value={props.time}
                onChange={(e) => props.setTime(e.target.value)} />  
        </div>
    );
}

export default TimeBox;