const Step2 = ({ nextStep, prevStep, handleChange, values }) => (
  <div>
    <h2>Step 2: Additional Info</h2>
    <input type="number" placeholder="Age" onChange={handleChange('age')} value={values.age} />
    <br />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step2;