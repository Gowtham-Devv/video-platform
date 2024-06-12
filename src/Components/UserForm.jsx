import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slice/UserSlice';
import "../Styles/UserForm.css";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }
    if (!location.trim()) {
      validationErrors.location = 'Location is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    onSubmit({ name, email, phoneNumber, location });
    dispatch(setUser({ name, email, phoneNumber, location }));
  };

  return (
    <div className='container-fluid'>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className="row">
          <div className="col-12"><h3 className='mt-5 user-Head'>SignUp</h3></div>
        </div>
        <form onSubmit={handleSubmit} className='user-form'>
          <div className="mb-3">
            <label className="form-label">
              Name:
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email:
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Phone Number:
              <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Location:
              <select className="form-select" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Select Location</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="others">Others</option>
              </select>
              {errors.location && <span className="error">{errors.location}</span>}
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
