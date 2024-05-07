import "../styles/ContactUsPage.css"
function ContactUsPage() {
  return (
    <div className="flex flex-col transparent-container">
    
    <h2>Contact Us</h2>
    <p>
      For inquiries, suggestions, or feedback, please contact us through the following methods:
    </p>
    <ul>
      <li>
        Email: <a href="mailto:college@example.com">college@example.com</a>
      </li>
      <li>
        Phone: +1 123-456-7890
      </li>
    </ul>
  </div>
  );    
}

export default ContactUsPage;