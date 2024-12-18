import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
// import axios from "axios";

export default function Home() {
  // const api = axios.create({
  //   baseurl: import.meta.env.VITE_API_URI_DEV
  // });
  // const getdata = async () => {
  //   const response = await api.get('/api-endpoint')
  //   console.log(response);
  //   return response.data;
  // }

  // useEffect(()=>{
  //   getdata();
  // },[]);

  return <>
    <Carousel count={Math.ceil(self.innerWidth/200)<10?Math.ceil(self.innerWidth/200):10}/>
    <div className={styles.banner}>
      <img className={styles.image} src="../../" alt="Black Man" draggable="false"/>
      <div className={styles.column}>
        <h1 className={styles.title}>Business solutions</h1>
        <p className={styles.text}>Slide for Von dotn slime ur homye. Praesent dui leo, euismod et purus eu, iaculis luctus mauris. Cras a dolor eget nisi aliquet pulvinar eu ut elit. Suspendisse dictum magna quis metus pulvin.</p>
      </div>
    </div>
  </>;
}
