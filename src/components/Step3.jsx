const Step3 = ({ prevStep, values }) => (
  <div>
    <h2>Review Info</h2>
    <p><strong>Name:</strong> {values.name}</p>
    <p><strong>Email:</strong> {values.email}</p>
    <p><strong>Age:</strong> {values.age}</p>
    <button onClick={prevStep}>Back</button>
    <button onClick={() => alert("Form submitted!")}>Submit</button>
  </div>
);

export default Step3;