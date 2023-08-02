import { Provider } from "react-redux";
import { LandingPage } from "./views";
import store, { persiststore } from "./configs/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 800,
    easing: "ease-out",
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
        <LandingPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
