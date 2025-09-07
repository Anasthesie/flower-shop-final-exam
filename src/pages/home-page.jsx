import Footer from "../components/footer";
import Main from "../components/main";
import About from "../components/aboutus";

export default function Home() {
  return (
    <div>
      <div className="bg-green">
        <Main />
        <About />
      </div>
      <Footer />
    </div>
  );
}
