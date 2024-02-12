import SettingsForm from "./Form";
import "./App.css";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { generateToken } from "./Functions";

const features = ["video", "audio", "chat", "share", "settings", "users"];

function App() {
  const onStartSession = (sessionSettings) => {
    configureSdk(sessionSettings, 1);
  };

  const OnJoinSession = (sessionSettings) => {
    configureSdk(sessionSettings, 0);
  };

  const onSessionJoined = () => {
    var sMessage = document.getElementById("sessionMessage");
    sMessage.innerText = "You are in a session!!";
  };

  const onSessionEnded = () => {
    var sMessage = document.getElementById("sessionMessage");
    sMessage.innerText = "";
  };

  const configureSdk = async (settings, role) => {
    const jwtToken = await generateToken(settings.sessionName, role, settings.sessionId, settings.sessionPasscode);

    const config = {
      videoSDKJWT: jwtToken,
      sessionName: settings.sessionName,
      userName: settings.username,
      sessionPasscode: settings.sessionPasscode,
      features,
    };

    var sessionContainer = document.getElementById("sessionContainer");
    uitoolkit.joinSession(sessionContainer, config);

    uitoolkit.onSessionJoined(onSessionJoined);
    uitoolkit.onSessionClosed(onSessionEnded);
  };

  return (
    <div className="App">
      <SettingsForm OnStartSession={onStartSession} OnJoinSession={OnJoinSession} />
      <div id="sessionMessage" />
      <div id="sessionContainer"></div>
    </div>
  );
}

export default App;
