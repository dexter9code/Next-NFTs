import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useSession } from "next-auth/react";

const NavBar = function (props) {
  const { data, status } = useSession();

  return (
    <header className={styles.container}>
      <div>
        <Link href={"/"}>
          <a>
            <div className={styles.logo__container}>
              <div>
                <Image
                  src={"/assets/logo/Next-NFTs-1.png"}
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
          {data && status === "authenticated" && (
            <li>
              <Link href={"/"}>{data.user.name}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
