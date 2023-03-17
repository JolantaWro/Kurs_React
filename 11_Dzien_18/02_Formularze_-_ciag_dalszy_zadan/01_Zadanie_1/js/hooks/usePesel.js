import React, {useEffect, useState} from 'react';

const usePesel = (valueUpdate) => {
    const [value, setValue] = useState(valueUpdate)
    const [isPesel, setPesel] = useState(false)

    useEffect(() => {
        if(value.length !== 11 || isNaN(value)) {
            setPesel(false)
        } else {
            setPesel(true)
        }
    }, [value])

    return [
        isPesel,
        {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    ]
};

export default usePesel;