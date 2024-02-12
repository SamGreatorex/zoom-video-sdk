import "./App.css";
import SettingsForm from "./Form";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { generateToken } from "./Functions";

const features = ["video", "audio", "chat", "share"];

function App() {
  const onStartSession = (sessionSettings) => {
    configureSdk(sessionSettings, 1);
  };

  const OnJoinSession = (sessionSettings) => {
    configureSdk(sessionSettings, 0);
  };

  const configureSdk = async (settings, role) => {
    console.log("Configuring session", settings);
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
  };

  return (
    <div className="App">
      <SettingsForm OnStartSession={onStartSession} OnJoinSession={OnJoinSession} />
      <div id="sessionContainer"></div>
    </div>
  );
}

export default App;
