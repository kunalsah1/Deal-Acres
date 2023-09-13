import styles from "@/app/css/services.module.css"
import Image from "next/image"
import local from "../../../public/local network.png"
import personalized from "../../../public/personalized.png"
import expertise from "../../../public/expertise.png"


export default function Service() {
    return(
        <div className={styles.container4}>
            <div className={styles.cards}>
                <div className={styles.card}>   
                    <Image 
                    className={styles.img}
                    src={local}
                    width={70}
                    height={70}
                    alt="local network"
                    priority={false}
                    />
                    <h3>Strong local network</h3>
                    <p>A local agent has established relationships with other professionals in the area, such as lenders, and inspectors, which can help in buying or Selling Process.</p>
                </div>
                <div className={styles.card}>
                <Image 
                className={styles.img}
                    src={personalized}
                    width={60}
                    height={60}
                    alt="personalized"
                    priority={false}
                    />
                    <h3>personalized Service</h3>
                    <p>Local real estate agents tent to have a smaller client base, allowing them to provide more personalized attention to each client and tailor their services to meet your specific needs.</p>
                </div>
                <div className={styles.card}>
                <Image 
                className={styles.img}
                    src={expertise}
                    width={55}
                    height={55}
                    alt="expertise"
                    priority={false}
                    />
                    <h3>Expertise in Negotiation</h3>
                    <p>
                        A local real estate agent will have experience in negotiating real estate deals in the local market, They can help you and ensure that you get the best possible price for your property. 
                    </p>
                </div>
            </div>
        </div>
    )
}