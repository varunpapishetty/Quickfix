import React, { useState } from 'react';
import './App.css';
// Import the Modal component
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
  });

  const services = [
    { name: "Home Repair", description: "Expert solutions for your home repair needs." },
    { name: "Electrical Work", description: "Safe and reliable electrical services for your home or office." },
    { name: "Carpentry Work", description: "High-quality carpentry services for custom projects and repairs." },
    { name: "Home Appliances Repair", description: "Extend the life of your home appliances with our expert repair services." },
    { name: "Car Repair", description: "Comprehensive car repair services to keep you on the road safely." },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill out all required fields.');
      return;
    }
    alert('Form submitted successfully!');
    // Reset form or handle the submission further here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Quick Fix</h1>
        <p>Your one-stop solution for all repair needs.</p>
      </header>
      <main>
        <section id="services" className="section">
          <h2>Our Services</h2>
          {services.map((service, index) => (
            <div key={index} className="service-item" onClick={() => { setSelectedService(service); setIsModalOpen(true); }}>
              <h3>{service.name}</h3>
            </div>
          ))}
        </section>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{selectedService.name}</h2>
          <p>{selectedService.description}</p>
        </Modal>
        <section id="contact" className="section">
          <h2>Book a Service</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <select name="service" required value={formData.service} onChange={handleChange}>
              <option value="">Select a Service...</option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>{service.name}</option>
              ))}
            </select>
            <textarea name="description" placeholder="Describe your issue" value={formData.description} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
