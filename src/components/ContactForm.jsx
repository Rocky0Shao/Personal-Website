import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('Contacts')
      .insert([{ name, phone, email, message }]);

    if (error) {
      alert("Error sending message: " + error.message);
    } else {
      alert(`Thank you, ${name}! Your message has been sent.`);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="form-title">Send a Message</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          required
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to say?"
        ></textarea>
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? (
          <span className="loading-state">
            <svg className="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" opacity="0.25"/>
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
            </svg>
            Sending...
          </span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
