import { useEffect } from "react";
import axios from "axios";
import { TWITCH_CLIENT_ID, TWITCH_SECRET } from "./config/api";
import { Main } from "./layout/Main";
import "./App.scss";

function App() {
  async function init() {
    const api = await axios
      .post(
        `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_SECRET}&grant_type=client_credentials`,
      )
      .then(res => console.log(res.data))
      .catch(e => console.log("==========", e));
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
