import React, {useState} from 'react';

const useInput = (valueUpdate) => {
    const [value, setValue] = useState(valueUpdate)


    return [
        value,
        {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    ]

};

export default useInput;