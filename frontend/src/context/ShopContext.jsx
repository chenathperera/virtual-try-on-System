import { createContext } from 'react';
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => { // ✅ accept props

    const currency = '$';
    const delivery_free = 10;

    const value = {
        products,
        currency,
        delivery_free
    }

    return (
        <ShopContext.Provider value={value}> {/* ✅ use ShopContext.Provider */}
            {props.children} {/* ✅ now props is defined */}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
