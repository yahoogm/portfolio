import { Provider } from 'react-redux';
import store, { persiststore } from './configs/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';

function App() {
  AOS.init({
    duration: 500,
    easing: 'ease-out',
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
        <RouterProvider router={Router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
