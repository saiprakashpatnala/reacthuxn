import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cop, sCop] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (name.length > 8) {
      setError1("");
      setColor1("green");
    } else {
      setError1("UserName must be 8 letters long");
      setColor1("red");
    }

    if (email.includes("@gmail")) {
      setError2("");
      setColor2("green");
    } else {
      setError2("email must consists @gmail.com");
      setColor2("red");
    }
    if (password.length > 8) {
      setError3("");
      setColor3("green");
    } else {
      setError3("Password length should be 8 letters");
      setColor3("red");
    }

    if (password !== "" & cop === password) {
      setError4("");
      setColor4("green");
    } else {
      setError4("Password did'nt match");
      setColor4("red");
    }
  };

  return (
    <div>
      <form onSubmit={validate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ borderColor: color1 }}
        />
        <p>{error1}</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: color2 }}
        />
        <p>{error2}</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: color3 }}
        />
        <p>{error3}</p>
        <input
          type="password"
          value={cop}
          onChange={(e) => sCop(e.target.value)}
          style={{ borderColor: color4 }}
        />
        <p>{error4}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
