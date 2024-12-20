import { Link } from "react-router-dom";

function ProductOfWeb() {
    return (
        <div className="product-of-web">
            <h2 className="header">
                PRODUCTS OF HOUSE OF LUGGAGE
            </h2>
            <div className="container">
                <div className="item-product">
                    <Link to='/Vali'>
                        <img src="/images/item-of-web1.webp" alt="vali" />
                        <span className="name">Vali</span>
                    </Link>
                </div>
                <div className="item-product">
                    <Link to='/Balo'>
                        <img src="/images/item-of-web2.webp" alt="balo" />
                        <span className="name">Balo</span>
                    </Link>
                </div>
                <div className="item-product">
                    <Link to='/Handbag'>
                        <img src="/images/item-of-web3.webp" alt="bag" />
                        <span className="name">Bag</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductOfWeb;