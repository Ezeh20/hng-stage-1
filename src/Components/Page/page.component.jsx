import Profile from "../Profile/profile.component";
import slack from "../../assets/img//slack.svg"
import github from "../../assets/img//Icon.svg"
import i4g from "../../assets/img/I4G.svg"
import zuri from "../../assets/img/Zuri.Internship_Logo.svg"
import footerText from "../../assets/img/Footer text.svg"
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
        <a href="https://slack.com"><img src={slack} alt="slack logo" /></a>
        <a href="https://github.com/Ezeh20"><img src={github} alt="github logo" /></a>
      </div>
      <footer className="footer">
        <div className="line"></div>
        <div className="footer-content">
          <a href="https://zuri.team/"><img src={zuri} alt="zuri-logo" className="zuri-logo" /></a>
          <a href="https://zuri.team/"><img src={footerText} alt="" className="footer-text"/></a>
          <a href="https://ingressive.org/"><img src={i4g} alt="i4g-logo"  className="i4g-logo"/></a>
        </div>
      </footer>
    </div>
  );
};

export default Page;
