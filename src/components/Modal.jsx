import styles from "../styles/Modal.module.css";
import addToCartFunc from "./AddToCartBtn";
import Carousel from "./Carousel"
import { useState, useEffect, useRef } from "react";
import axios from "axios"

export default function Modal({ data, setModalData }) {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalStatus] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const modalRef = useRef(null);

    async function fetchProducts() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        // console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("something went wrong fetching products", err);
      }
    }

    useEffect(() => {
      fetchProducts();
    }, [])

    function closeModal() {
        modalRef.current.close();

        setModalStatus(false);
        setModalData({});
    }

    useEffect(() => {
        setModalStatus(true);

        if (isModalOpen) {
            modalRef.current.showModal();
        }
    }, [data]);

    return (
      <dialog ref={modalRef} onKeyDown={(e) => {e.key === "Escape" ? closeModal() : null}} className={styles.container}>
        <div className={styles.modalContent}>
          <div className={styles.row}>
            <div className={styles.imgDisplay}>
              <img className={styles.productImg} src={"https://picsum.photos/seed/"+data.name+"/200/200.jpg"} />
            </div>

            <div className={styles.itemInformation}>
              <h1>{data.name}</h1>
              <h2>About this item:</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius, laboriosam aperiam quis quibusdam facilis maiores quam fugit perspiciatis modi totam tempore soluta non quidem corrupti aut exercitationem, sapiente nisi.</p>

              <div className={styles.buttonSection}>
                <button onClick={() => {for(let i = 0; i < quantity; i++) {addToCartFunc(data)}}} className={styles.addCartButton}>Add to Cart</button>
                <div className={styles.quantitySelector}>
                  <div>
                    <button onClick={() => {quantity > 0 ? setQuantity(prev => prev -= 1) : null}}>-</button>
                  </div>

                  <div>
                  <h2>{quantity}</h2>
                  </div>

                  <div>
                    <button onClick={() => {setQuantity(prev => prev += 1)}}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.otherInfo}>
              <h1>⭐⭐⭐⭐⭐</h1>

              <h1>${data.price}</h1>
            </div>

            <div className={styles.suggestedProducts}>
              <h2>Suggested Products</h2>
              <Carousel setModalData={setModalData} count={3} data={products} />
            </div>
          </div>

          <button onClick={closeModal}>Close</button>
        </div>
      </dialog>
    );
}