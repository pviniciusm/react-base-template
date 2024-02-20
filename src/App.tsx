import { Provider } from "react-redux";
import { persistedStore, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    <RouterProvider router={routes} />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
