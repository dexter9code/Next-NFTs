import Link from "next/link";
import styles from "./svgCard.module.css";

const SvgCard = function ({ location, title, svgName, svgId, active }) {
  return (
    <li className={active === true ? `${styles.side_nav__active}` : ""}>
      <Link href={location}>
        <a>
          <svg>
            <use xlinkHref={`assets/svg/${svgName}.svg#${svgId}`} />
          </svg>
          {title}
        </a>
      </Link>
    </li>
  );
};

export default SvgCard;
