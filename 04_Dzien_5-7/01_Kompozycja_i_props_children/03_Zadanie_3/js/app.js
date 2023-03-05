import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ShopItem from "../../02_Zadanie_2/js/ShopItem";
import ShopItemHeader from "../../02_Zadanie_2/js/ShopItemHeader";
import ShopItemDescription from "../../02_Zadanie_2/js/ShopItemDescription";
import ShopItemPricing from "../../02_Zadanie_2/js/ShopItemPricing";
import ShopList from "./ShopList";

// const App = () => {
//     return (
//         <>
//             <ShopItem>
//                 <ShopItemHeader title={product.title} image={product.image}></ShopItemHeader>
//                 <ShopItemDescription description={product.description}></ShopItemDescription>
//                 <ShopItemPricing price={product.price}></ShopItemPricing>
//             </ShopItem>
//         </>
//     )
// }
const App = () => {
    return (
        <>
            <ShopList items={
                [
                    {
                        title: "Mysz komputerowa",
                        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
                    },
                    {
                        title: "Klawiatura",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
                    },
                    {
                        title: "Laptop programisty",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
                    }
                ]

            }
                      />

        </>
    )
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
