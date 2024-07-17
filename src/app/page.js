import Image from "next/image";
// import styles from "./page.module.css";
import Banner from "./template/Banner/Banner";
import Collection from "./template/Collection/Collection";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Collection/>
   </div>
  );
}
