import Image from "next/image"
import styles from "@/app/css/search.module.css"
import search from "../../../public/search.png";
import Link from "next/link";


export default function SearchButton() {
    return(
        <div className={styles.container2}>
        <div className={styles.search}>
          <input type="search" placeholder="Enter Locality, Agent Name" />
          <Image
            className={styles.img}
            src={search}
            width={55}
            height={52}
            priority={false}
            alt="search"
          />
        </div>
        <div className={styles.event}>
          <Link href="">
            {" "}
            <h2 className={styles.buy}>Buy </h2>
          </Link>
          <Link href="">
            {" "}
            <h2 className={styles.sell}>Sell</h2>
          </Link>
          <Link href="">
            <h2 className={styles.rent}>Rent</h2>
          </Link>
        </div>
      </div>
    )
  
}
