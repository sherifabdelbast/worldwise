import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} by WorldWise Inc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
