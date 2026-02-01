import styles from "./CountryItem.module.css";
import { FlagImg } from "../utils/flagEmoji";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <FlagImg emoji={country.emoji} className={styles.flag} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
