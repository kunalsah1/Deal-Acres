import Image from "next/image";
import styles from "@/app/css/NewDealers.module.css"
import person from "../../../public/person.jpg";
import rating from "../../../public/rating.png";
import heart from "../../../public/heart.png";

export default function NewDealers() {
  return (
    <div className={styles.container5}>
      <div className={styles.cards}>
        
        <div className={styles.card}>
          <Image alt= "person"
            className={styles.dealerImage}
            src={person}
            height={190}
            width={250}
            priority={false}
          />
          <div className={styles.details}>
            <h1>Harvey Long</h1>
            <Image alt= "Image" src={rating} width={150} height={40} />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
            
            <Image alt= "heart"
              className={styles.heart}
              src={heart}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.btn}>
            <button>Contact</button>
            <button>Send Enquiry</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt= "person"
            className={styles.dealerImage}
            src={person}
            height={190}
            width={250}
            priority={false}
          />
          <div className={styles.details}>
            <h1>Harvey Long</h1>
            <Image alt= "rating" src={rating} width={150} height={40} />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
            
            <Image alt= "heart"
              className={styles.heart}
              src={heart}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.btn}>
            <button>Contact</button>
            <button>Send Enquiry</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt= "Image"
            className={styles.dealerImage}
            src={person}
            height={190}
            width={250}
            priority={false}
          />
          <div className={styles.details}>
            <h1>Harvey Long</h1>
            <Image alt= "Image" src={rating} width={150} height={40} />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
            
            <Image alt= "Image"
              className={styles.heart}
              src={heart}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.btn}>
            <button>Contact</button>
            <button>Send Enquiry</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt= "Image"
            className={styles.dealerImage}
            src={person}
            height={190}
            width={250}
            priority={false}
          />
          <div className={styles.details}>
            <h1>Harvey Long</h1>
            <Image alt= "Image" src={rating} width={150} height={40} />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
            
            <Image alt= "Image"
              className={styles.heart}
              src={heart}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.btn}>
            <button>Contact</button>
            <button>Send Enquiry</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt= "Image"
            className={styles.dealerImage}
            src={person}
            height={190}
            width={250}
            priority={false}
          />
          <div className={styles.details}>
            <h1>Harvey Long</h1>
            <Image src={rating} width={150} height={40} alt="rating" />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
           
            <Image alt= "Image"
              className={styles.heart}
              src={heart}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.btn}>
            <button>Contact</button>
            <button>Send Enquiry</button>
          </div>
        </div>
      </div>
      </div>
  )
}
    
      