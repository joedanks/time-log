import React, { useState } from 'react';

export default function TimeBox(props) {
    return (
        <div>
            <input type='time'
                value={props.time}
                onChange={(e) => props.setTime(e.target.value)} />  
        </div>
    );
}