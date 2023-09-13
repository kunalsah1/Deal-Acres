import Image from "next/image";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import styles from "../css/collage.module.css"


export default function Collage(){
    return(
        <div className={styles.container1}>
        <Image className={styles.img}
          src={img1}
          alt="house"
          width={430}
          height={260}
          priority={true}
        />
        <Image className={styles.img}
          src={img2}
          alt="house"
          width={430}
          height={260}
          priority={false}
        />
        <Image className={styles.img}
          src={img3}
          alt="house"
          width={430}
          height={260}
          priority={false}
        />
        <Image className={styles.img}
          src={img4}
          alt="house"
          width={430}
          height={260}
          priority={false}
        />
      </div>
    )
}