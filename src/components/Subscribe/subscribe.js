import { ReactChild, useRef } from "react";
import "./subscribe.css";
import emailjs from "emailjs-com"

const Subscribe = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_09a54va', 'template_w8108kd', e.target, 'user_SqtsfRe3OXj67NLy3F4H9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <>
      {/* <div className="  col-sm-12 col-xs-12"> */}
      <div className=" display-style-subscribe">
        <div className="footer-widget newsletter-widget">
          <h3 className="has-line-center">Newsletter</h3>
          <div className="widget-content">
            <div className="text subscribe-text-style">
              Stay Updated with our latest news. We promise not to spam
            </div>
            <div className="newsletter-form ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group  subscribe-display">
                  <input
                    className="input-email-style-subscribe"
                    type="email"
                    name="message"
                    placeholder="Your Email"
                    required=""
                  />

                    <input className="subscribe-button-style-subscribe"  type="submit" value="Subscribe">
                      {/* Subscribe */}
                    </input>
       
    
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Subscribe;
