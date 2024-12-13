// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Sign Up</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <label className={styles.Label} htmlFor="confirmPassword">Confirm Password:</label> <br />
                <input className={styles.Input} type="text" id="confirmPassword" name="confirmPassword" pattern="" required /> <br/> <br/>

                <button type="submit">Sign Up</button>

                <p className={styles.LoginText}>Existing account?</p>
                <Link to="/login">Sign in</Link>
            </form>
        </div>
    );
}