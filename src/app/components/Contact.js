import styles from "@/app/css/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container6}>
      <form>
        <div className={styles.heading}>
      <h1>Ask From Deal Acres</h1>
      <h2>We're here to help seven days a week.</h2>
        </div>
      <div className={styles.contact}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>

      <div className={styles.contact}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={styles.contact}>
        <label htmlFor="mobile">Phone No.</label>
        <input type="number"   id="mobile" />
      </div>
      <div className={styles.contact}>
        <label htmlFor="message">What can we help you with?</label>
        <textarea rows={4}  type="text" id="message" />

      </div>
      
        <button>Send</button>
      </form>
    </div>
  );
}
