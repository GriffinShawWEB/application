// components/Form.js

import emailjs from '@emailjs/browser';
import { css } from '@emotion/css';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';


const formStyle = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 10%;
    width: 90%;
    padding: 20px 5%;
  }
`;


const selectStyle = css`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px 5px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const inputStyle = css`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #333;
  }
`;

const buttonStyle = css`
  background-color: #333;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
`;

export const Form = () => {
    const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    contactMethod: '',
    propertyState: '',
    address: '',
    vacancy: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.promise(
        emailjs.send('service_9ikk70d', 'template_vtdogfb', formData, 'oXaMApZ9vW6pRiJdZ'),
        {
            loading: 'Sending inquiry..',
            success: 'Inquiry sent!',
            error: 'Could not send inquiry, try again later'
        }
    )
    .catch(err => console.log(err))
  };

  return (
    <div className={formStyle}>
      <h2>We just need a few details..</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          placeholder="Full Name"
          className={inputStyle}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <select
          className={selectStyle}
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Preferred Contact Method
          </option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        {formData.contactMethod === 'email' && <input
          type="email"
          placeholder="Your Email"
          className={inputStyle}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />}
        {formData.contactMethod === 'phone' && <input
          type="text"
          placeholder="Your Phone Number"
          className={inputStyle}
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />}
        <select
          className={selectStyle}
          name="propertyState"
          value={formData.propertyState}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Condition
          </option>
          <option value="teardown">Teardown (Uninhabitable, beyond repair)</option>
          <option value="very_poor">Very poor (Uninhabitable, Needs heavy repair/replacement such as roof, foundation)</option>
          <option value="poor">Poor (Uninhabitable, Needs repair/replacement such as windows, flooring)</option>
          <option value="fair">Fair (Inhabitable, Needs repair/replacement such as flooring, drywall, facilities)</option>
          <option value="good">Good (Inhabitable, Needs minor repair/replacement such as deep cleaning, paint)</option>
          <option value="great">Great (Inhabitable, Move-in ready but may be outdated)</option>
          <option value="excellent">Excellent (Inhabitable, Move-in ready and has been remodeled recently)</option>
        </select>
        <input
          type="text"
          placeholder="Full Property Address"
          className={inputStyle}
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <select
          className={selectStyle}
          name="vacancy"
          value={formData.vacancy}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Vacancy Status
          </option>
          <option value="vacant">Vacant</option>
          <option value="occupied_tenant">Occupied (Tenent/Rented)</option>
          <option value="occupied_owner">Occupied (Owner/You)</option>
        </select>
        <textarea
          placeholder="Additional details"
          rows="4"
          className={inputStyle}
          style={{resize: 'vertical'}}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};
