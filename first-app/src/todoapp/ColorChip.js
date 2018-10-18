import React from 'react';
import './color-chip.css';

const ColorChip = ({color, toggleColor}) => {
    return (
        <div className='color-chip' onClick={toggleColor} style={{backgroundColor: color}}>
        </div>
    )
}

export default ColorChip;

//splice