// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Log in</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <button type="submit">Login</button>

                <p className={styles.RegisterText}>New to MECAZON?</p>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    );
}