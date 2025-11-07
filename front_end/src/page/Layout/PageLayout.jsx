import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import FloatingWhatsAppButton from '../../component/whatsapp/WhatsAppBtn';
import BtnEnquiry from '../../component/Button/BtnEnquiry';

const PageLayout = () => {
    return (
        <>
            <Header />
            <BtnEnquiry />
            <Outlet />
            <FloatingWhatsAppButton />
            <Footer />
        </>
    );
};

export default PageLayout;