import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    return (
        <div className='border bg-white-300 rounded-xl p-3'>
            {/* card header */}
            <div>
                <h1 className='text-5xl mb-3'>{pricing.name}</h1>
                <h3 className='text-3xl mb-3'>{pricing.price}</h3>
            </div>
            {/* card body */}
            <div>
               <p className='mb-3'>{pricing.description}</p>
               <div className='bg-blue-200 text-black rounded-xl p-2'>
                {
                pricing.features.map((feature, index) => <PricingFeature key={index} 
                feature={feature}>
                </PricingFeature>)
               }
               </div>
            </div>
        </div>
    );
};

export default PricingCard;