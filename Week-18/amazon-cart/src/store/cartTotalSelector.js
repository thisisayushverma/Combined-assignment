import { selector } from "recoil";

export const calCartTotal = selector({
    key:'CartTotalValue',
    get : ({get}) =>{
        const list = get(cartItemStateKey);
        let temp = 0;
        list.map((item)=> temp+=(item.oldPrice*item.quantity))
        return temp;
    }
})

