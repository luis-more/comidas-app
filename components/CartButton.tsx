//import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React from 'react';
import { TouchableOpacity } from 'react-native';

const CartButton = () => {
    //const { getTotalItems } = useCartStore();
    //const totalItems = getTotalItems();

    return (
        <TouchableOpacity className="cart-btn" onPress={()=> router.push('/cart')}>
           
        </TouchableOpacity>
    )
}
export default CartButton