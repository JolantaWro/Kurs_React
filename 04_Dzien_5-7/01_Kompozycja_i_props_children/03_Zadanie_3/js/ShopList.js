import React, {Component} from 'react';
import ShopItemHeader from "../../02_Zadanie_2/js/ShopItemHeader";

class ShopList extends Component {
    render() {
        return(
            <div className="shoplist">
                {this.props.items.map((element, index) => <ShopItemHeader key={index} title={element.title} image={element.image}/>)}

            </div>
        )
    }
}

export default ShopList;