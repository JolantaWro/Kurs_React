import React, {Component} from 'react'

// class Menu extends Component {
//     render () {
//         return (
//             <ul>
//                 <li><a href="/">Strona Główna</a></li>
//                 <li><a href="/">Blog</a></li>
//                 <li><a href="/">Cennik</a></li>
//                 <li><a href="/">Kontakt</a></li>
//             </ul>
//         )
//     }
// }
// export default Menu;

class Menu extends Component {
    render () {
        return (
            <ul>
                {this.props.menu.map((element, index) => <li key={index}><a href={element.url}>{element.text}</a></li>)}
            </ul>
        )
    }
}
export default Menu;