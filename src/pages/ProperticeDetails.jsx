import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PropertiesComponents } from "../providers/ContextComponent";

const ProperticeDetails = () => {
    const {id}= useParams();
    const {Properties}= useContext(PropertiesComponents)
    const Propertie=Properties.find(product=>product.id === parseInt(id))
    return (
        <div>
            <h2>{Propertie.title}</h2>
            <h2>$ {Propertie.price}</h2>
            <h2>{Propertie.description}</h2>
        </div>
    );
};

export default ProperticeDetails;