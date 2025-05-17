const Step1 = ({ nextStep, handleChange, values }) => (
  <div>
    <h2>Step 1: Basic Info</h2>
    <input type="text" placeholder="Name" onChange={handleChange('name')} value={values.name} />
    <input type="email" placeholder="Email" onChange={handleChange('email')} value={values.email} />
    <br />
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step1;