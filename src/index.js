import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AudioComponent from "./common/AudioComponent/AudioComponent";
import {Provider} from 'react-redux'
import store from "./redux/Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <BrowserRouter>
        <div>
            <Provider store={store}>
                <AudioComponent></AudioComponent>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </Provider>
        </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
