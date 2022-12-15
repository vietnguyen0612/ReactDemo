import SectionConsultation from "../../components/ServicePage/SectionConsultation/SectionConsultation";
import SectionFAQ from "../../components/ServicePage/SectionFAQ/SectionFAQ";
import SectionProduct from "../../components/ServicePage/SectionProduct/SectionProduct";
import SectionService from "../../components/ServicePage/SectionService/SectionService";
import SectionTreatment from "../../components/ServicePage/SectionTreatment/SectionTreatment";
import ServiceSlogan from "../../components/ServicePage/ServiceSlogan/ServiceSlogan";
import './Service.scss'

function Service() {
    return (  
        <div className="servicepage">
            <SectionService />
            <SectionConsultation />
            <SectionTreatment />
            <SectionProduct />
            <ServiceSlogan />
            <SectionFAQ />
        </div>
    );
}

export default Service;