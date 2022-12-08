import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";

import './DefaultLayout.scss';
function DefaultLayout({children}) {
    return (  
        <div className="wrap">
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;