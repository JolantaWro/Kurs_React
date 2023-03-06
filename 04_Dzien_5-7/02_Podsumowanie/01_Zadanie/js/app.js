import React from "react";
import { createRoot } from "react-dom/client";
import products from "./data/products";
import Receipt from "./Receipt";
import ReceiptHeader from "./ReceiptHeader";
import ReceiptItems from "./ReceiptItems";
import ReceiptFooter from "./ReceiptFooter";

const App = ({items}) => {
    return(
        <>
            <Receipt>
                <ReceiptHeader />
                <ReceiptItems items={items} />
                <ReceiptFooter items={items} />
            </Receipt>
        </>
    )
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App items={products}/>);
