import React from "react";
import SuitcaseInfor from "../components/SuitcaseInfo";
import ProductFilter from "../components/ProductFilter";

function Vali() {
    return (
        <div className="vali_container">
            <ProductFilter name="suitcase" />
            <SuitcaseInfor />
        </div>
    );
}

export default Vali;
