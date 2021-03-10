import { useState } from 'react'

const Field = ({label, onUpdate}) => {
    const [value, setValue] = useState(0);
    const updateValue= (e) =>{    
        let newvalue = e.target.value;
        // this prevents no numeric values 
        console.log('updateValue',newvalue)
        if(!isNaN(newvalue) && newvalue!==''){
            console.log('!NaN',newvalue)
            setValue(newvalue);
            onUpdate(parseFloat(newvalue).toFixed(2));
        }
        
        
    }

    const fixValue = (e)=>{
        let fv = parseFloat(e.target.value).toFixed(2);
        
        if(isNaN(fv)){
            fv = 0;
        }
        setValue(fv);
        onUpdate(fv);
    }
    
    return (
        <div className="field">
            <label className="field-label">{label}</label>
            <div className="currency-field">
            <input 
                type="text" 
                value={value} 
                onChange={updateValue} 
                onBlur={fixValue}
                className="currency"
            />
            </div>
           
        </div>
    )
}

export default Field
