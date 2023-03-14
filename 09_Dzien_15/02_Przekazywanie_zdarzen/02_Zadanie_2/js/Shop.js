import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {

    const [list, setList] = useState([])
    return (
        <div>
            <ShopItem title="MacBook Pro" setList={setList} />
            <ShopItem title="Dell X5500" setList={setList} />
            <ShopItem title="Asus NT6000" setList={setList} />
            <ul>
                {
                    list.map((element, index) => <li key={index}>{element}</li>)
                }
            </ul>
        </div>

    );
};

export default Shop;