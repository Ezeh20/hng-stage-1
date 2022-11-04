import Footer from "../../Components/Footer/footer.component"
import "./contact.css"

const Contact = () => {
    const name = "cii-jay"
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="container">
            <div className="contact container-two">
                <header className="header">
                    <h1 className="title">Contact Me</h1>
                    <p className="subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <section className="contact-form">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="top">
                            <div className="form-field">
                                <label className="label" htmlFor="first_name">First Name</label>
                                <input type="text" className="input-area" id="first_name" placeholder="Enter your first name" />
                            </div>
                            <div className="form-field">
                                <label className="label" htmlFor="last_name">Last Name</label>
                                <input type="text" className="input-area" id="last_name" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="form-field">
                                <label className="label" htmlFor="email">Email</label>
                                <input type="password" className="input-area" id="email" placeholder="yourname@email.com" />
                            </div>
                            <div className="form-field">
                                <label className="label" htmlFor="message">Message</label>
                                <textarea id="message" className="text-area" name="me" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                            </div>
                        </div>
                        <label className="terms">
                            <input type="checkbox" />
                            <p className="accept-terms">You agree to provide your data to {name} who may contact you.</p>
                        </label>
                        <button type="submit" id="btn__submit" className="submit">Send message</button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact