import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5zlx2t', 'template_9qvu5x9', form.current, 'XeJLEn8jKRAa2LD_Y')
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );

    e.target.reset(); // لإفراغ الحقول بعد الإرسال
  };

  return (
    <section id="contact" className="section">
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">
                My <span className="contact_taital_1">Contact</span>
              </h1>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mail_section_1">
                    <input
                      type="text"
                      name="user_name"
                      className="mail_text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="user_email"
                      className="mail_text"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      type="text"
                      name="user_phone"
                      className="mail_text"
                      placeholder="Your Phone"
                    />
                    <textarea
                      name="message"
                      className="massage-bt"
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                    <div className="send_bt">
                      <button type="submit">Send Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
