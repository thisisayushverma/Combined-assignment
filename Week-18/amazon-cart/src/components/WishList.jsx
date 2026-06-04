import React from "react";
import ProductModal from "./ProductModal";
import iphoneImg from "../assets/iphone-img.jpg";
import PurchaseModal from "./PurchaseModal";
import Header from "./Header";
import { wishlistData } from "../store/wishItemState";
import { useRecoilState } from "recoil";

const WishList = () => {
  const [item, setItem] = useRecoilState(wishlistData);

  return (
    <div>
      <Header />
      <div className="" style={{display:"grid", gridColumn:3, gap:"10px"} }>
        {item.map((item) => {
          console.log("hellow");

          return (
            <ProductModal
              imageUrl={item.image}
              title={item.name}
              price={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
