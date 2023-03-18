import { Fragment } from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';

const ContactSection = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_r076udj',
      'template_m0gbq3i',
      toSend,
      'spgCywRGDVSjAJbpK'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:simongmesber@gmail.com">
                    simongmesber@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">I am available for Freelance hire</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            <form id="cform" method="post">
              <div className="group-val">
                <input type="text" name="from_name" placeholder="Name" value={toSend.from_name} onChange={handleChange}/>
              </div>
              <div className="group-val">
                <input type="email" name="reply_to" placeholder="Email" value={toSend.reply_to} onChange={handleChange}/>
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                  value={toSend.message}
                  onChange={handleChange}
                />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
