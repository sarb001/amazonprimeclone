import React from 'react';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) =>
 {
      const [{basket},dispatch] = useStateValue();

     const removefrombasket = () =>
   {
     dispatch(
         {
             type : "REMOVE_FROM_CART",
             id:id,
         });
    };

  return (
  <>
        <div className="checkoutProduct" style = {{backgroundColor:"crimson",}}>
           
                <div className="checkproduct_info" style = {{display:'flex'}}>
                           <div className="first-product">
                               <img src = {image} alt = "" style = {{width:'60%'}}/>
                           </div>
                           <div className="second-product">
                                    <p className = "checkoutproduct_title">
                                        {title}
                                    </p>
                                    <p className = "checkproduct_price">
                                        <small>$</small>
                                        <strong> {price} </strong>
                                    </p>
                                    <p className = "rating">
                                        <strong> {rating} </strong>
                                    </p>
                                    <button onClick={removefrombasket}>
                                        Remove from Basket 
                                    </button>
                           </div>
                </div>
        </div> 
  </>
  )
};

export default CheckoutProduct;
