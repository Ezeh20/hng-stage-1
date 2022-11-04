import { Link } from "react-router-dom";
import Footer from "../Footer/footer.component";
import Profile from "../Profile/profile.component";
import slack from "../../assets/img//slack.svg"
import github from "../../assets/img//Icon.svg"
import './page.style.css'

const Page = () => {
  return (
    <div className="page container">
      <Profile />
      <nav className="links">
        <a href="https://twitter.com/Cii_jay11000" className="link" id="twitter">Twitter Link</a>
        <a href="https://training.zuri.team/" className="link" id="btn__zuri">Zuri Team</a>
        <a href="http://books.zuri.team " className="link" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=CiiJay" className="link" id="book__python">Python books</a>
        <a href="https://background.zuri.team" className="link" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" className="link" id="book__design">Design Books</a>
        <Link className="link" id="contact" to="/contact">Contact Me</Link>
      </nav>
      <div className="socials">
        <a href="https://slack.com"><img src={slack} alt="slack logo" /></a>
        <a href="https://github.com/Ezeh20/hng-stage-1"><img src={github} alt="github logo" /></a>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
