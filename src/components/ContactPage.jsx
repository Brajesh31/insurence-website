import Styling from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={Styling.Main}>
        <div className={Styling.Container}>
          <div className={Styling.Thirthy}>
            <div className={Styling.box1}>
              <p>We look forward hearing from you</p>
              
            </div>
            <div className={Styling.box2}>
              <p>We&apos;re always ready to help.</p>
              <p>Get the info you&apos;re looking
              for right now.</p>
              <p>Ask how we can help you.</p>
            </div>
          </div>

          <div className={Styling.Seventy}>
            <div className={Styling.contactForm}>
              <h1>Contact us</h1>
              <form>
                <div className={Styling.formGroup}>
                  <label>First name</label>
                  <input type="text" name="firstName" />
                </div>
                <div className={Styling.formGroup}>
                  <label>Last name</label>
                  <input type="text" name="lastName" />
                </div>
                <div className={Styling.formGroup}>
                  <label>Phone</label>
                  <input type="tel" name="phone" />
                </div>
                <div className={Styling.formGroup}>
                  <label>Email</label>
                  <input type="email" name="email" />
                </div>
                <div className={Styling.formGroup}>
                  <label>Message</label>
                  <textarea name="message"></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
