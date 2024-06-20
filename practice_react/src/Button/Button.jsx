import styles from './Button.module.css';

function Button() {
    return (
        <div className={styles.buttoncontainer}>
            <button className={styles.button}>
                Subscribe
            </button>
        </div>
    );
}

export default Button