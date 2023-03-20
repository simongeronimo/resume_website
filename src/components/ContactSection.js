import { Fragment } from "react";
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';


const ContactSection = () => {
  const [status, setStatus] = useState(undefined);
  const SITE_KEY = "6Le1bBIlAAAAAGHDOr2BKvIZBeY6ChyGWq3jVgUo";
  
  useEffect(() => {
  const loadScriptByURL = (id, url, callback) => {
    const isScriptExist = document.getElementById(id);
 
    if (!isScriptExist) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.id = id;
      script.onload = function () {
        if (callback) callback();
      };
      document.body.appendChild(script);
    }
 
    if (isScriptExist && callback) callback();
  }
 
  // load the script by passing the URL
  loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
    console.log("Script loaded!");
  });
}, []);

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
    window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
      send(
      'service_r076udj',
      'template_m0gbq3i',
      toSend,
      'spgCywRGDVSjAJbpK'
    )
      .then((response) => {
        setStatus({ type: 'success' });
        setToSend('','','');
        document.getElementById("formName").value='';
        document.getElementById("formEmail").value='';
        document.getElementById("formMessage").value='';
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    });
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
            <form id="cform" method="post" onSubmit={onSubmit}>
              <div className="group-val">
                <input type="text" id="formName" name="from_name" placeholder="Name" value={toSend.from_name} onChange={handleChange}/>
              </div>
              <div className="group-val">
                <input type="email" id="formEmail" name="reply_to" placeholder="Email" value={toSend.reply_to} onChange={handleChange}/>
              </div>
              <div className="group-val ct-gr">
                <textarea
                  id="formMessage"
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
            <div>
              <p class="zz_code">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
            </div>
            {status?.type === 'success' &&             
            <div>
              <p>Thanks, your message has been sent successfully.</p>
            </div>}

          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
