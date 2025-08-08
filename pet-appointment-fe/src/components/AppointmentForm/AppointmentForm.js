import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentForm.css';
import Button from '../CustomComponents/Button/Button';



const AppointmentForm = ({scrollToTop}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        pet_name: '',
        pet_type: '',
        start_date: '',
        notes: ''
    });

    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setMessage(null);

        try {  
            const apiKey = process.env.REACT_APP_API_KEY;
            console.log(apiKey)
        const response = await axios.post(
            'http://localhost:8000/api/appointments', 
            form,
             {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY
                }
              
            }
        );
        setMessage(response.data.message);
        setForm({
            name: '', email: '', phone: '',
            pet_name: '', pet_type: '',
            start_date: '', notes: ''
        });
        } catch (error) {
        if (error.response && error.response.status === 422) {
            setErrors(error.response.data.errors);
        } else {
            setMessage('Something went wrong.');
        }
        }
    };

    return (
       <section className='appointment-form'>
            <div className='content-block'>
                <div className='content-col-1'>
                    
                    <div>
                        <h4 className='logo' onClick={scrollToTop}><span className='logo-paw'>🐾</span> Pawtastic</h4>
                    </div>

                    <div  className='listing'>
                        <h3>All Services Includes</h3>
                        <ul>
                            <li>all photo update for you along</li>
                            <li>notfications of the pets arrival</li>
                            <li>treat  for your pets and more</li>
                        </ul>
                    </div>
                </div>

                <div className="content-col-2">
  <form onSubmit={handleSubmit}>
    <h2>We'll take your dog for a walk, just tell us when.</h2>

    {message && <p>{message}</p>}

    <input
        className="form-control mb-2"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
    />
    {errors.name && <span className="text-danger">{errors.name}</span>}

    <input
        className="form-control mb-2"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
    />
    {errors.email && <span className="text-danger">{errors.email}</span>}

    <input
        className="form-control mb-2"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
    />
    {errors.phone && <span className="text-danger">{errors.phone}</span>}

    <input
        className="form-control mb-2"
        name="pet_name"
        placeholder="Pet's Name"
        value={form.pet_name}
        onChange={handleChange}
    />
    {errors.pet_name && <span className="text-danger">{errors.pet_name}</span>}

    <input
        className="form-control mb-2"
        name="pet_type"
        placeholder="Pet Type (e.g., Dog)"
        value={form.pet_type}
        onChange={handleChange}
    />
    {errors.pet_type && <span className="text-danger">{errors.pet_type}</span>}

    <input
        className="form-control mb-2"
        name="start_date"
        type="date"
        min={tomorrow.toISOString().split("T")[0]}
        value={form.start_date}
        onChange={handleChange}
    />
    {errors.start_date && <span className="text-danger">{errors.start_date}</span>}

    <textarea
        className="form-control mb-3"
        name="notes"
        placeholder="Additional Notes (optional)"
        value={form.notes}
        onChange={handleChange}
    />

    <Button type="submit">
      Schedule Service
    </Button>
  </form>
</div>
            </div>
       </section>
    );
};

export default AppointmentForm;