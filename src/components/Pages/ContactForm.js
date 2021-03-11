import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            // const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            // await axios.post(url, payload);
            // console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            // console.log(error)
        }
    };

    return (
        <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">CONTACT</span>
                    <h2>Yes! You Are Here! Have Any Project? Drop A Line Here</h2>
                    <p>We currently are a Upwork exclusive Rising Talent Agency, any projects will run through Upwork</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-6">
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    value={contact.name}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.name && 'Name is required.'}
                                </div>
                            </div>
                                 
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={contact.email}
                                    onChange={handleChange}
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.email && 'Email is required.'}
                                </div>
                            </div>
                
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    className="form-control" 
                                    placeholder="Subject" 
                                    value={contact.subject}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.subject && 'Subject is required.'}
                                </div>
                            </div>
                              
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="number" 
                                    className="form-control" 
                                    placeholder="Phone" 
                                    value={contact.number}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.number && 'Number is required.'}
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <textarea 
                                    name="text" 
                                    className="form-control" 
                                    cols="30" 
                                    rows="6" 
                                    placeholder="Write message" 
                                    value={contact.text}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.text && 'Text body is required.'}
                                </div>
                            </div>
                                
                            <button type="submit" className="btn common-btn three">Send Message <span></span></button>
                        </form>
                    </div>

                    <div className="col-md-5 col-lg-6">
                        <div className="contact-content">
                            <div className="top">
                                <ul>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:hello@engage.com">hello@engage.com</a>
                                    </li>
                                    <li>
                                        <span>Website:</span>
                                        <a href="#" target="_blank">www.engage.com</a>
                                    </li>
                                    <li>
                                        <span>Skype:</span>
                                        <a href="#" target="_blank">hello@engage.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-upwork'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm