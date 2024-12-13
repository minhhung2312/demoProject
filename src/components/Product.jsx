import { useParams } from "react-router-dom";
import products from "../api/products";

function Product() {
    const {id} = useParams();
    const vali = products.find((pro) => pro.id === parseInt(id));

    const { details } = vali;
    
    return ( 
        <div className="info-details">
            {
                <div className="container">
                    <h2 className="header">{vali.name}</h2>
                    <p className="paragraph">{vali.newPrice}</p>
                    <div>
                        <h3>Feature:</h3>
                        <ul>
                            {details.features.map((feature) => (
                                <li key={feature}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <h3>Paramters</h3>
                        <ul>
                            {details.paramters.map((param) => (
                                <li key={param}>
                                    {Object.keys(param)} : {Object.values(param)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
}

export default Product;