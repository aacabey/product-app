import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Root } from './components/Root';
import "react-image-gallery/styles/css/image-gallery.css";

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>, document.getElementById('app')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept(Root, () => {
        render(Root);
    });
}