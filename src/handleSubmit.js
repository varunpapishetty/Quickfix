const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: '',
      description: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simple validation example
      if (!formData.name || !formData.email || !formData.service) {
        alert('Please fill out all required fields.');
        return;
      }
      // Here you'd handle the form submission, e.g., sending data to a server
      alert('Form submitted successfully!');
    };
  
    return (
      <section id="contact" className="section">
        <h2>Book a Service</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <select name="service" required value={formData.service} onChange={handleChange}>
            <option value="">Select a Service...</option>
            <option value="home-repair">Home Repair</option>
            {/* Add other options here */}
          </select>
          <textarea name="description" placeholder="Describe your issue" value={formData.description} onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };
  