import { useState } from 'react';
import Field from './Field.js';

const Calculator = () => {

    const [sales, setSales] = useState(0);
    const [commissions, setCommissions] = useState(0);
    const [construction, setConstruction] = useState(0);
    const [otherIncome, setOtherIncome] = useState(0);
    
    const updateSales=  (val) =>{ console.log('setSales',val); setSales(parseFloat(val));  }
    const updateCommissions = (val) =>{ console.log('setCommissions',val); setCommissions(parseFloat(val));  }
    const updateConstruction = (val) =>{ console.log('setConstruction',val); setConstruction(parseFloat(val));    }
    const updateOtherIncome = (val) =>{ console.log('setOtherIncome',val); setOtherIncome(parseFloat(val));  }
    
    const getSum = ()=>{        
        return parseFloat(sales)+parseFloat(commissions)+parseFloat(construction)+parseFloat(otherIncome);
    }
    const displaySum = ()=>{
        let sum = getSum();
        
        return sum === 0 ? '£0': '£'+parseFloat(getSum()).toFixed(2); 
    }
    
    return (
        <div className="calculator">
            <Field label="Income from sales" onUpdate={updateSales} />
            <Field label="Commissions" onUpdate={updateCommissions} />
            <Field label="Construction" onUpdate={updateConstruction} />
            <Field label="Other income" onUpdate={updateOtherIncome} />
            <div className="calculator-results">
                <h4 className="calculator-results-headline">Total</h4>
                <div className={`calculator-results-value ${getSum() > 999 ? "is_small" : "is_regular"}`}  >
                    {displaySum()}
                </div>                
            </div>
        </div>
    )
}

export default Calculator
