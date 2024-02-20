import { Provider } from "react-redux";
import { persistedStore, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { Root } from "./Root";
import { CssBaseline } from "@mui/material";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    <CssBaseline />
                    <Root />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
