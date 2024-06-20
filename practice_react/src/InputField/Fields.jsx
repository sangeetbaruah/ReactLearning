import styles from './Fields.module.css'

function Fields(){
    return(
        <form className={styles.forms}>
            
            <div className={styles.formlabel}>
            <label for="fname"></label>
            <input type="text" id={styles.fname} name = "fname" placeholder="First name"></input>

            <label for="lname"></label>
            <input type="text" id={styles.lname} name = "lname" placeholder="Last name"></input>

            <label for="email"></label>
            <input type="email" id={styles.email} name="email" placeholder="Email"></input>

            </div>


        </form>

    );
}

export default Fields