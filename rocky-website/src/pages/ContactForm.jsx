import { useState } from 'react';
import './ContactForm.css';
function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API here
    console.log({ name, phone, email, message });
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optional: Clear the form after submission
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            required 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            id="phone" 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            required 
            rows="5"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;