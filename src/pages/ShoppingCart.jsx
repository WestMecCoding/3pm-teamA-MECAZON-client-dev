import { useState, useEffect } from "react";
import styles from "../styles/ShopingCart.module.css";
// import axios from "axios";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0.08);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("cart"));
    setCart(response);
  }, []);

  useEffect(()=>{
    let total = 0;
    (cart||[])?.map(i=>{total+=i.price;})
    setTotal(()=>(parseFloat(total)+(parseFloat(total)*tax)).toPrecision(3));
  },[cart]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.items}>
            {(cart||[{name: "Your Shopping Cart is Empty"}])?.map( i => (
              <div className={styles.item} key={Math.random()}>
                <img
                  className={styles.Image}
                  src={"https://picsum.photos/seed/" + i.name + "/200/200.jpg"}
                  alt={i.name}
                  draggable="false"
                />
                <h1 className={styles.text}>{i.name}</h1>
                <h1 className={styles.text}>{i.price?"$":''}{i?.price}</h1>
              </div>
            ))}
          </div>
          <div className={styles.items}>
            <h1>Checkout</h1>
            {(cart||[{name: "Your Shopping Cart is Empty"}])?.map( i => {
              return (
                <div className={styles.listing} key={Math.random()}>
                  <h1 className={styles.text}>{i.name}</h1>
                  <h1 className={styles.text}>{i.price?"$":''}{i?.price}</h1>
                </div>
              )}
            )}
            {cart?(<>
              <div className={styles.listing}>
                <h1 className={styles.text}>Tax: </h1>
                <h1 className={styles.text}>{tax*100}%</h1>
              </div>
              <div className={styles.listing}>
                <h1 className={styles.text}>Total: </h1>
                <h1 className={styles.text}>{(total==0)?"Free":`$${total}`}</h1>
              </div>
            </>):(<></>)}
          </div>
        </div>
      </div>
    </>
  );
}
