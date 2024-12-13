import ProductFilter from "../components/ProductFilter";
import '../assets/css/Balo.css';

function Bag() {
    return ( 
        <div className="bag">
            <ProductFilter name="handbag"/>
            <div style={{marginBottom: "60px"}}></div>
        </div>
    );
}

export default Bag;