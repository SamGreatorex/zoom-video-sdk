import "./App.css";
import SettingsForm from "./Form";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

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
