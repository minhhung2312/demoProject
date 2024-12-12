import React from 'react';
import FilterColors from '../components/FilterColors';
import SuitcaseInfor from '../components/SuitcaseInfo'

function Vali() {
    return (
        <div className='vali_container'>
            <FilterColors category="vali" />;
            <SuitcaseInfor/>
        </div>
    )

}

export default Vali;
