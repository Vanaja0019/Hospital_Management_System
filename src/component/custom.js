import React, { useState } from 'react';

function Custom({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    doctorname: '',
    patientname: '',
    patientissue: '',
    appointmentdate: ''
  });

  const [errors, setErrors] = useState({
    doctorname: '',
    patientname: '',
    patientissue: '',
    appointmentdate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    // Add validation logic
    if (name === 'doctorname' || name === 'patientname') {
      const isValid = value.trim() !== '';
      setErrors({ ...errors, [name]: isValid ? '' : `Please enter ${name}` });
    }

    if (name === 'patientissue') {
      setErrors({ ...errors, patientissue: value.trim() !== '' ? '' : 'Please enter patient issue' });
    }

    if (name === 'appointmentdate') {
      // Add your date validation logic here
      setErrors({ ...errors, appointmentdate: '' }); // Assuming date is valid
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    const isValidForm = Object.values(errors).every(error => error === '');

    if (isValidForm) {
      console.log('Form submitted:', formData);
      handleFormSubmit(formData);
    } else {
      console.error('Form contains errors. Please fix them before submitting.');
    }
  };

  return (
    <form className="inside_form" onSubmit={handleSubmit}>
      <div className="frm_grp">
        <label>Doctor name</label>
        <input
          className="frm_fld"
          type="text"
          name="doctorname"
          value="Dr Ashok"
          onChange={handleChange}
        />
        <span className={`error ${errors.doctorname ? 'invalid' : ''}`}>{errors.doctorname}</span>
      </div>
      <div className="frm_grp">
        <label>Patient name</label>
        <input
          className="frm_fld"
          type="text"
          name="patientname"
          value="Sankar"
          onChange={handleChange}
        />
        <span className={`error ${errors.patientname ? 'invalid' : ''}`}>{errors.patientname}</span>
      </div>
      <div className="frm_grp">
        <label>Patient issue</label>
        <input
          className="frm_fld"
          type="text"
          name="patientissue"
          value="Root Canal"
          onChange={handleChange}
        />
        <span className={`error ${errors.patientissue ? 'invalid' : ''}`}>{errors.patientissue}</span>
      </div>
      <div className="frm_grp">
        <label>Appointment date</label>
        <input
          className="frm_fld"
          type="text"
          name="appointmentdate"
          value="18/9/2023"
          onChange={handleChange}
        />
        <span className={`error ${errors.appointmentdate ? 'invalid' : ''}`}>{errors.appointmentdate}</span>
      </div>
    
    </form>
  );
}

export default Custom;
