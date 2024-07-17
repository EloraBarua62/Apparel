import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "./template/Shared/Header/Header";
import Footer from "./template/Shared/Footer/Footer";

const poppins = Poppins({ 
  weight: '400', 
  style: 'normal',
  subsets: ["latin"] });

export const metadata = {
  title: "Apparel",
  description: "This is multivendor clothing site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header/> */}
        {children}   
        <Footer/>     
      </body>
    </html>
  );
}
