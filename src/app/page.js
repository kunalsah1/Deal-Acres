import styles from "./page.module.css";
import Dealer from "./components/Dealer";
import Collage from "./components/Collage";
import SearchButton from "./components/SearchButton";
import Service from "./components/Services";
import NewDealers from "./components/NewDealers";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className={styles.container}>
      <Collage />
      <SearchButton />
      <Dealer />
      <Service/>
      <NewDealers/>
      <Contact/>
      <NewDealers/>
      <div className={styles.agent}>
        <p>More agents in Hisar</p>
      </div>
    </main>
  );
}
