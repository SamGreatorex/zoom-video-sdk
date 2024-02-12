import "./App.css";
import SettingsForm from "./Form";

function App() {
  const onStartSession = (sessionSettings) => {};

  const OnJoinSession = (sessionSettings) => {};

  return (
    <div className="App">
      <SettingsForm OnStartSession={onStartSession} OnJoinSession={OnJoinSession} />
    </div>
  );
}

export default App;
