import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-2 mt-3'><CircleCheckBig></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;