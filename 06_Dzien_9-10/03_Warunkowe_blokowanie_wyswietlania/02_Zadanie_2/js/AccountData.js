import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI";

const AccountData = () => {

    const data = false

    const [array, setArray] = useState([])
    FakeAPI.then(element => {
        if (element.loading) {
            return null
        }
        setArray(element)
    })

    return (
        <div>
            <table>
                {
                    array.map((element, index) => <tr key={index}>{element.day} =>  {element.balance}   =>  {element.change}</tr>)
                }
            </table>

        </div>
    );
};


//ladne=======................................
// const AccountData = () => {
//     const [data, setData] = useState(false);
//     FakeAPI.then( data => {
//         setData(data);
//     });
//     if (data === false) {
//         return null;
//     }
//     return (
//         <table style={{border: '1px solid'}}>
//             {data.map((row, index) => {
//                 return (
//                     <tr key={index} style={{border: '1px solid'}}>
//                         <td>{row.day}</td>
//                         <td style={{border: '1px solid'}}>{row.balance}</td>
//                         <td>{row.change}</td>
//                     </tr>
//                 )
//             })}
//         </table>
//     );
// };
export default AccountData;