import { useState } from "react";

function Form({ OnStartSession, OnJoinSession }) {
  const [sessionSettings, setSessionSettings] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSessionSettings({ ...sessionSettings, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.id === "btnStart") OnStartSession(sessionSettings);
    if (event.target.id === "btnJoin") OnJoinSession(sessionSettings);
  };

  return (
    <form>
      <label>
        Session Name:
        <input type="text" name="sessionName" required onChange={handleChange} />
      </label>
      <label>
        Session Id:
        <input type="text" name="sessionId" onChange={handleChange} />
      </label>
      <label>
        Session Passcode:
        <input type="text" name="sessionPasscode" onChange={handleChange} />
      </label>
      <label>
        User Name:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <input type="submit" id="btnStart" value="Start Session" onClick={handleSubmit} />
      <input type="submit" id="btnJoin" value="Join Session" onClick={handleSubmit} />
    </form>
  );
}

export default Form;
