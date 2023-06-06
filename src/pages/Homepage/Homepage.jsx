import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <section className="homepage ">
        <div className="align-center">
          <h2>Over 1,25,000 Hotels and homes accross 35 countries</h2>
          <div className="container">
            <input type="text" />
          </div>
        </div>
      </section>
    </>
  );
}
