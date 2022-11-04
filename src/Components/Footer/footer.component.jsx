import i4g from "../../assets/img/I4G.svg"
import zuri from "../../assets/img/Zuri.Internship_Logo.svg"
import footerText from "../../assets/img/Footer text.svg"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="line"></div>
                <div className="footer-content">
                    <a href="https://zuri.team/"><img src={zuri} alt="zuri-logo" className="zuri-logo" /></a>
                    <a href="https://zuri.team/"><img src={footerText} alt="" className="footer-text" /></a>
                    <a href="https://ingressive.org/"><img src={i4g} alt="i4g-logo" className="i4g-logo" /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer