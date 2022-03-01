import { useState } from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState([]);
  function submitForm() {
    const validateErrors = [];
    if (!phone || phone.length !== 10) {
      validateErrors.push("Phone Number is not valid");
    }
    if (!password) {
      validateErrors.push("Password is missing");
    }
    if (!gender) {
      validateErrors.push("Gender is missing");
    }
    setErrors(validateErrors);
  }
  return (
    <>
      <h1>Login Form</h1>
      {errors.length > 0 ? (
        <ul>
          {errors.map((err) => (
            <li style={{ color: "gold" }}>{err}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          placeholder="PhoneNumber"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setGender(event.target.value);
          }}
          value={gender}
        >
          <option value="">---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={() => {
            submitForm();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default Login;
