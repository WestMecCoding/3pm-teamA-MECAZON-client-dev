import { useState, useEffect, useRef } from "react";
import styles from "../styles/Groceries.module.css";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries({searchValue}) {
  const [groceries, setGroceries] = useState([]);
  const resultsTextRef = useRef(null);

  async function fetchGroceries() {
    try {
      const response = await axios.get("/dummy-data/groceries.json");
      console.log(response.data);
      setGroceries(response.data);
    } catch (err) {
      console.error("something went wrong fetching groceries", err);
    }
  }

  useEffect(() => {
    fetchGroceries();
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("groceries", JSON.stringify(groceries));
  // }, [groceries]);

  useEffect(() => {
    async function renderSearchResults() {
      if (searchValue) {
        const response = await axios.get("/dummy-data/groceries.json");

        const results = response.data.filter(item => {
          return Object.values(item).some(value => value.toString().toLowerCase().includes(searchValue.toLowerCase()));
        });

        setGroceries(results);
      } else if (searchValue === "") {
        fetchGroceries();
      }
    }

    renderSearchResults();
  }, [searchValue])

  return (
    <div className={styles.background}>
      <h1 ref={resultsTextRef} className={styles.text}>Results for "{searchValue}"</h1>
        <div>
          <GroceryList items={groceries} />
        </div>
    </div>
  );
}