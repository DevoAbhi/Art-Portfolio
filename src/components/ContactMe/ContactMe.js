import { React, useState } from 'react';
import axios from "axios";
import "./ContactMe.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const notify = () => {



    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormData({ name: "", email: "", message: "" });

        try {
            toast.success('Message sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            // const {data} =  await axios.post("http://localhost:5000/contact-form-handler", formData);
            const {data} =  await axios.post("https://debajyoti-backend.onrender.com/contact-form-handler", formData);
            console.log(data);

        } catch (error) {
            console.log("Something went wrong sending the message -> ", error);
            toast.error('Something went wrong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }








    }

    return (
        <section className='contactme-section' id='contactme'>
            {/* <div className="contactme-heading">Contact Me ✉️</div> */}

            <div className="contactme-container">
                <div className="card form-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter your name'
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Enter your email'
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                placeholder='Enter your message'
                                rows="4"
                                cols="25"
                                onChange={handleChange}
                                value={formData.message}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button className="submit-btn" type='submit' onClick={notify}>Send</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default ContactMe;