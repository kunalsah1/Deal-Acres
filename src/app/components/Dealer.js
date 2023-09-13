import styles from "@/app/css/dealers.module.css";
import Image from "next/image";
import person from "../../../public/person.jpg";
import rating from "../../../public/rating.png";
import heart from "../../../public/heart.png";

export default function Dealer() {
  return (
    <div className={styles.container3}>
      <div className={styles.cards}>
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
            <Image alt= "Image"
              src={rating}
              width={150}
              height={40}
              priority={false}
              
            />
            <h4>Dabra Chowk Hissar HO</h4>
            <div className={styles.lines}>
              <p>Property Dealer in Hissar</p>
              <p className={styles.mid}>Property Dealer in Hissar</p>
              <p>Property Dealer in Hissar</p>
            </div>
            <h4>Open until 8:00 pm</h4>
          </div>
          <div className={styles.featured}>
            <button>Featured</button>
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
            <button>Featured</button>
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
            <button>Featured</button>
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
            <button>Featured</button>
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
            <button>Featured</button>
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
            <button>Featured</button>
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
      <div className={styles.aside}>
        <div className={styles.register}>
          <p>Register Yourself in this Peoperty Dealer Listing Page</p>
          <form>
            <input type="text" id="name" placeholder="Name" />
            <input type="number" id="phone" placeholder="Phone" />
            <input type="email" id="email" placeholder="Email" />
            <textarea type="text" id="address" cols={15} rows={5} placeholder="Address" />
            <select name="Buyer/Seller">
              <option>Buyer/Seller</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <label>
              <input type="checkbox" className={styles.check} />
              By submitting this form I agree to <span>Terms of Use</span>
            </label>
          </form>
        </div>
        <div className={styles.popular}>
          <h2>Most Search catagories in Hisar</h2>
          <p>Carpenter in Hisar</p>
          <p>Electrician in Hisar</p>
          <p>Sanitary Dealer in Hisar</p>
          <p>Packer & Movers in Hisar</p>
          <p>Furniture Dealer in Hisar</p>
          <p>Home Loan Provider in Hisar</p>
          <p>Plumbing Contractor in Hisar</p>
          <p>Home Decor Provider in Hisar</p>
          <p>Solar Product Dealer in Hisar</p>
          <p>Home Interior Dealer in Hisar</p>
          <p>Modular Kitchen Dealer in Hisar</p>
          <p>Security System Dealer in Hisar</p>
          <p>Construction Contractor in Hisar</p>
          <p>Rent Agreement Provider in Hisar</p>
          <p>Legal Service Provider in Hisar</p>
          <p>Electronic Good Dealers in Hisar</p>
          <p>Property Valuer Provider in Hisar</p>
          <p>Flooring & Marble Dealer in Hisar</p>
          <p>Painting Service Provider in Hisar</p>
          <p>Pest Control Service Provider in Hisar</p>
          <p>Chartered Accountant Provider in Hisar</p>
          <p>Vastu Shartar Service Provider in Hisar</p>
        </div>
      </div>
    </div>
  );
}
