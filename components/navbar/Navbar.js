import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = function (props) {
  return (
    <header className={styles.container}>
      <div>
        <Link href={"/"}>
          <a>
            <div className={styles.logo__container}>
              <div>
                <Image
                  src={"/assets/logo/NEXT NFTs-logos_transparent.png"}
                  alt="next-image"
                  width={90}
                  height={90}
                />
              </div>
              <p>NEXT-NFTs</p>
            </div>
          </a>
        </Link>
      </div>

      <nav>
        <ul className={styles.nav_container}>
          <li>
            <Link href={"/"}>Explore</Link>
          </li>
          <li>
            <Link href={"/"}>Sign-In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
