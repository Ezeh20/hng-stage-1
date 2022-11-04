import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import Footer from "../../Components/Footer/footer.component";
import "./contact.css";


const Contact = () => {
    const [button, setButton] = useState(true);
    const [message, setMessage] = useState('Send message');
    const sett = useRef(null);
    const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm();
    const name = "cii-jay";
    let user = '';

    //change button color onSubmit
    let show = () => {
        let show = sett.current
        show.className = "sub"
    }
    //disable button onSubmit
    let disable = () => {
        let disableonSubmit = sett.current
        disableonSubmit.disabled = true
    }
    //Form action onSubmit
    const onSubmit = (data) => {
        user = data.firstName
        reset()
        show()
        setMessage(`${user}, message sent`)
        disable()
    }
    return (
        <div className="container">
            <div className="contact container-two">
                <header className="header">
                    <h1 className="title">Contact Me</h1>
                    <p className="subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <section className="contact-form">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="top">
                            <div className="form-field">
                                <label className="label" htmlFor="first_name">First Name</label>
                                <input type="text" className={errors.firstName ? "invalid inp-top" : "input-area inp-top"} id="first_name" placeholder="Enter your first name"
                                    {...register("firstName", {
                                        required: "This field is required"
                                    })} />
                                {errors.firstName && (<small>{errors.firstName.message}</small>)}
                            </div>
                            <div className="form-field">
                                <label className="label" htmlFor="last_name">Last Name</label>
                                <input type="text" className={errors.lastName ? "invalid inp-top" : "input-area inp-top"} id="last_name" placeholder="Enter your last name"
                                    {...register("lastName", { required: "This field is required" })} />
                                {errors.lastName && (<small>{errors.lastName.message}</small>)}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="form-field">
                                <label className="label" htmlFor="email">Email</label>
                                <input type="password" className={errors.email ? "invalid" : "input-area"} id="email" placeholder="yourname@email.com"
                                    {...register("email", {
                                        required: "Enter a vaild email address", pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email"
                                        }
                                    })}
                                    onKeyUp={() => {
                                        trigger('email')
                                    }} />
                                {errors.email && (<small>{errors.email.message}</small>)}
                            </div>
                            <div className="form-field">
                                <label className="label" htmlFor="message">Message</label>
                                <textarea id="message" className={errors.message ? "invalid-text" : "text-area"} name="me" placeholder="Send me a message and I'll reply you as soon as possible..."
                                    {...register("message", {
                                        required: "Please enter a message", minLength: {
                                            value: 2,
                                            message: "Message too short"
                                        }
                                    })}></textarea>
                                {errors.message && (<small>{errors.message.message}</small>)}
                            </div>
                        </div>
                        <label className="terms">
                            <input type="checkbox" onClick={() => setButton(current => !current)} />
                            <p className="accept-terms">You agree to provide your data to {name} who may contact you.</p>
                        </label>
                        <button type="submit" id="btn__submit" className={button ? "submit-disabled" : "submit"} disabled={button} ref={sett}>{message}</button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact