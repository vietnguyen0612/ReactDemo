import SectionConsultation from "../../components/ServicePage/SectionConsultation/SectionConsultation";
import SectionProduct from "../../components/ServicePage/SectionProduct/SectionProduct";
import SectionService from "../../components/ServicePage/SectionService/SectionService";
import SectionTreatment from "../../components/ServicePage/SectionTreatment/SectionTreatment";

function Service() {
    return (  
        <div className="servicepage">
            <SectionService />
            <SectionConsultation />
            <SectionTreatment />
            <SectionProduct />
        </div>
    );
}

export default Service;