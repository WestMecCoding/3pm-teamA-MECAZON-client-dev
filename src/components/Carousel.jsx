import GroceryList from "./GroceryList";
import styles from "../styles/Carousel.module.css";
import { useEffect, useState } from "react";

export default function Carousel({ count, data, setModalData }) {

    const [index, setIndex] = useState(0)
    // const [data, setdata] = useState([]);

    function incrementIndex(num) {
      const next_num = index+num
      if (next_num < 0) {
        setIndex(0);
      } else if (next_num > data.length-count) {
        setIndex(data.length-count);
      } else {
        setIndex(next_num);
      }
    };

    return (
      <div className={styles.row}>
        <button className={styles.btn} onClick={() => { incrementIndex(-count); }}>⬅</button>
          <div className={styles.items}>
            {data.slice(index, index + count).map(i => (
              <div className={styles.item} key={i.id}>
                {/* src="https://avatars.githubusercontent.com/u/131179727?s=200&v=4" */}
                <img className={styles.Image} onClick={() => {setModalData(i)}} src={"https://picsum.photos/seed/"+i.name+"/200/200.jpg"} alt="" />
                <div className={styles.subitem}>
                  <h1 className={styles.text}>{i.name}</h1>
                  <h1 className={styles.price}>${i.price}</h1>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        <button className={styles.btn} onClick={() => { incrementIndex(count); }}>➡</button>
      </div>
    );
}