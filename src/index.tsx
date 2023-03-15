import { createRoot } from 'react-dom/client';

const AppComponent = () => <div>My App</div>;

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
