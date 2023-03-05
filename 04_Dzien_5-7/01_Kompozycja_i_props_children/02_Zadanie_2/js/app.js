import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ShopItem from "./ShopItem";
import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const product = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}

const App = () => {
    return (
        <>
            <ShopItem>
                <ShopItemHeader title={product.title} image={product.image}></ShopItemHeader>
                <ShopItemDescription description={product.description}></ShopItemDescription>
                <ShopItemPricing price={product.price}></ShopItemPricing>
            </ShopItem>
        </>
    )
}



const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
