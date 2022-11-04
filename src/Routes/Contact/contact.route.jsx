//import Footer from "../../Components/Footer/footer.component"
import "./contact.css"

const Contact = () => {
    const name = "cii-jay"
    return (
        <div className="container-two">
            <div className="contact">
                <header className="header">
                    <h1 className="title">Contact Me</h1>
                    <p className="subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <section className="contact-form">
                    <form className="form">
                        <div className="top">
                            <div className="form-field">
                                <label className="label">First Name</label>
                                <input type="text" className="input-area" id="first_name" placeholder="Enter your first name" />
                            </div>
                            <div className="form-field">
                                <label className="label">Last Name</label>
                                <input type="text" className="input-area" id="last_name" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="form-field">
                                <label className="label">Email</label>
                                <input type="password" className="input-area" id="email" placeholder="yourname@email.com" />
                            </div>
                            <div className="form-field">
                                <label className="label">Message</label>
                                <textarea id="message" className="text-area" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                            </div>
                        </div>

                        <label className="terms">
                            <input type="checkbox" className="check"/>
                            <p className="accept-terms">You agree to provide your data to {name} who may contact you.</p>
                        </label>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact