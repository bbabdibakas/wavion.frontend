import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss'
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallbackComponent } from 'widgets/ErrorFallbackComponent';

const root = createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>
);
