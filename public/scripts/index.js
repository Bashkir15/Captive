import navHandler from './shared/nav';
import landing from './pages/landing';

navHandler();

if (window.location.pathname == '/') {
    landing();
}
