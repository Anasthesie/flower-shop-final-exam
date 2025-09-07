import Footer from "../components/footer";
import Main from "../components/main";
import About from "../components/aboutus";
import ComingSoon from "../components/comingsoon";

export default function Home() {
  return (
    <div>
      <div className="bg-green">
        <Main />
       
      </div>
      <About />
        <ComingSoon />
      <Footer />
    </div>
  );
}
