import GroceryList from "./GroceryList";
import styles from "../styles/Carousel.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel({ count }) {

    const [index, setIndex] = useState(0)
    const [groceries, setGroceries] = useState([]);

    function incrementIndex(num) {
      const next_num = index+num
      if (next_num < 0) {
        setIndex(0);
      } else if (next_num > groceries.length-count) {
        setIndex(groceries.length-count);
      } else {
        setIndex(next_num);
      }
    };

    useEffect(() => {
      async function fetchGroceries() {
        try {
          const response = await axios.get("/dummy-data/groceries.json");
          setGroceries(response.data);
        } catch (err) {
          console.error("something went wrong fetching groceries", err);
        }
      }
      fetchGroceries();
    }, []);

    return (
      <div className={styles.row}>
        <button className={styles.btn} onClick={() => { incrementIndex(-count); }}>⬅</button>
          <div className={styles.items}>
            {groceries.slice(index, index + count).map(i => (
              <div className={styles.item} key={i.id}>
                {/* src="https://avatars.githubusercontent.com/u/131179727?s=200&v=4" */}
                <img className={styles.Image} src={"https://picsum.photos/seed/"+i.name+"/200/200.jpg"} alt="" />
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