import React, {useState} from 'react';

const ImmediateAffirmation = (props) => {
    const [affirmation, setAffirmation]=useState('');
    const generateAffirmation=()=>{
        affirmation==='Way to Go'? setAffirmation('Good Going'): setAffirmation('Way to Go');
    }
    return ( 
        <>
            {affirmation? <div className='affirmation'>
            <p>{affirmation}</p>
            <button onClick={generateAffirmation}>Generate New Affirmation</button>
            </div>: <button onClick={generateAffirmation}>Now, please.</button>}
        </>
     );
}
 
export default ImmediateAffirmation;