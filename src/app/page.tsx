import Banner from "./template/Banner/Banner";
import Collection from "./template/Collection/Collection";
import Footer from "./template/Shared/Footer/Footer";
import Header from "./template/Shared/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Collection />
      <Footer />
    </div>
  );
}
