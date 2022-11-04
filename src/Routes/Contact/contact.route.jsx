//import Footer from "../../Components/Footer/footer.component"
import "./contact.css"

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <header className="header">
                    <h1 className="title">Contact Me</h1>
                    <p className="subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <section className="contact-form">
                    <form>
                        <div className="top">
                            <div className="form-field"></div>
                            <div className="form-field"></div>
                        </div>
                        <div className="bottom">
                            <div className="form-field"></div>
                            <div className="form-field"></div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact