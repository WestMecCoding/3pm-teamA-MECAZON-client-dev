import styles from "../styles/GroceryList.module.css";
import SaveItem from "../components/AddToCartBtn";

export default function GroceryList({ items, setModalData }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <img className={styles.Image} onClick={() => {setModalData(i)}} src={"https://picsum.photos/seed/"+i.name+"/200/200.jpg"} alt={i.name} draggable="false"/>
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price}</h1>
            <h2 className={styles.text}>{i.name}</h2>
            <button className={styles.btn} onClick={() => SaveItem(i)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
