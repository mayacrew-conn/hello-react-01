import React from 'react';

const Form = ({ input, handleChange, handleAdd, handleInput }) => {
  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(evt) => handleChange(evt.target.value)}
        ref={(comp) => handleInput(comp)} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default Form;
