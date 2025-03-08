import React, {useState} from 'react'
import './calculator.css'

export default function Calculator() {

    // array used to show all button 
    const arr = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','=','AC','.']

    // useState used
    const [value, setValue] = useState('');

    // on change in input 
    const handleChange = (e) => {
        setValue(e.target.value);
    } 

    // on click in button
    const handleClick = (e) => {
        const id = e.target.id;
        if (id === 'AC'){
            setValue('');
        } else if (id === '=') {
            // Result
            handleSubmit();
        } else {
            setValue((val) => val + id);
        }
    } 

    // on form submit prevent form page refresh && To Print Result 
    const handleSubmit = (e) => {
        e?.preventDefault();
        try {
            const ans = eval(value);
            setValue(ans);
        } catch {
            alert("Invalid Inputs");
        }
    }

  return (
    <div>
        <div className="container card-box calc-app">
            <div>
                <h2 className='mb-4'>Calculator</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder='0' value={value} onChange={handleChange} />
                    </div>
                </form>
                <div className="button-box d-flex">
                    {
                        arr.map((item, idx) => (
                            <button id={item} key={idx} onClick={handleClick}>{item}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
