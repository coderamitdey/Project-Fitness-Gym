import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div className='max-w-[1280px] mx-auto my-30'>
            <h2 className='text-5xl text-center font-bold text-green-400 mb-4'>আমাদের মেম্বারশিপ প্ল্যান
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;