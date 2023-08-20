import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./redux-store/Store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/AppLayouts/Header/Header";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter basename="/">
                    <PersistGate loading={null} persistor={persistor}>
                        <Header />
                        <main id="dashboard" className="p-3 my-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xxl-2 col-xl-3">
                                        <div id="sidebar" className="rounded bg-secondary bg-opacity-25 bg-gradient p-3 min-100vh">
                                            <h5>Sidebar</h5>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 col-xl-9">
                                        <Routes />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </PersistGate>
                    <ToastContainer />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
