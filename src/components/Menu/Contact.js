import styles from "./Contact.module.css";

const Contact = () => {
  // console.log(props.display)

  return (
    <div className={` ${styles.container} `}>
      <h2>Contact</h2>
      <address>
        <p>Wrocław 50-378 <br />
        ul. Norwida 23/2 <br />
        +48 508 240 566<br />
        Splus@gmail.com</p>

{/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        </p> */}

        {/* <a href="mailto:webmaster@example.com">Splus@gmail.com</a> */}

        <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}>TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>

      </address>
    </div>
  );
};

export default Contact;
