import Profile from "../Profile/profile.component";
import slack from "../../assets/img//slack.svg"
import github from "../../assets/img//Icon.svg"
import i4g from "../../assets/img/I4G.svg"
import zuri from "../../assets/img/Zuri.Internship_Logo.svg"
import './page.style.css'

const Page = () => {
  return (
    <div className="page container">
      <Profile />
      <nav className="links">
        <a href="https://twitter.com/Ceejay__1" className="link" id="btn__zuri">Twitter Link</a>
        <a href="https://training.zuri.team/" className="link" id="btn__zuri">Zuri Team</a>
        <a href="http://books.zuri.team " className="link" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Cii-jay" className="link" id="book__python">Python books</a>
        <a href="https://background.zuri.team" className="link" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" className="link" id="book__design">Design Books</a>
      </nav>
      <div className="socials">
        <a href=""><img src={slack} alt="slack logo" /></a>
        <a href=""><img src={github} alt="github logo" /></a>
      </div>
      <footer className="footer">
        <div className="line"></div>
        <div className="footer-content">
          <a href=""><img src={zuri} alt="zuri-logo" /></a>
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <a href=""><img src={i4g} alt="i4g-logo" /></a>
        </div>
      </footer>
    </div>
  );
};

export default Page;
