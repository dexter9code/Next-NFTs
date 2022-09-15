import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import Button3 from "./../common/Buttons/button3";

const NavBar = function (props) {
  const { data, status } = useSession();

  const logoutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

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
            <Link href={"/featurednfts"}>Featured</Link>
          </li>
          {!data && (
            <li>
              <Link href={"/signin"}>Sign-In</Link>
            </li>
          )}
          {data && status === "authenticated" && (
            <li>
              <Link href={"/account"}>{data.user.name}</Link>
            </li>
          )}
          {data && status === "authenticated" && (
            <li>
              <Button3 title={"Logout"} onclick={logoutHandler} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
