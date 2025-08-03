import Button from '@mui/material/Button';
import React  from 'react';

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const QuantityBox = () => {
    const [inputVal, setInputVal] = React.useState(1);
    const minus = () => {
        if(inputVal>1){
            setInputVal(inputVal-1);
        }
    }
    const plus = () => {
        setInputVal(inputVal+1);
    }

    return(
        <>
            <div className='quantityDrop d-flex align-items-center mr-2'>
                <Button onClick={minus} className='add mr-2'><FiMinus /></Button>
                    <input className='quantity' type='text' value={inputVal} />
                <Button onClick={plus} className='min ml-2'><FiPlus /></Button>
            </div>
        </>
    )
}

export default QuantityBox;