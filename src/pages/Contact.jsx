
function Contact() {
  const contactEmail = "YOUR_EMAIL@example.com";

  function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    su: `Portfolio inquiry from ${name}`,
    body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  });

  const gmailUrl =
    `https://mail.google.com/mail/?${params.toString()}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
}

  

  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-info">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1 className="contact-title">
            Let's make
            <br />
            something <span>great.</span>
          </h1>

          <p className="contact-description">
            Have a project idea, an opportunity, or just want to
            talk about technology and AI? I'd love to hear from you.
          </p>

          <a
  className="contact-email-link"
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`}
  target="_blank"
  rel="noreferrer"
>
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>

            <span>
              <small>EMAIL ME AT</small>
              <strong>{contactEmail}</strong>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="contact-socials">
            <p>FIND ME ONLINE</p>

            <div>
              <a
                href="https://github.com/dakshpokh"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <h2>Send a message</h2>
            <p>Fill in the details and let's connect.</p>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="john@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell me a little about what you have in mind..."
              required
            />
          </div>

          <button className="contact-submit" type="submit">
            Send Message
            <span aria-hidden="true">↗</span>
          </button>

          <p className="contact-form-note">
            This opens your default email application with your
            message ready to send.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
