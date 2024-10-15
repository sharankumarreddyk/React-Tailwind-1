import  { useState } from 'react';
import ServiceFilter from './ServiceFilter';
import ServiceBox from './ServiceBox';
import Slider from './Slider';

const ServiceManagement = () => {
    const [activeService, setActiveService] = useState('active'); // Default to active services

    const handleTabChange = (tab) => {
        setActiveService(tab);
    };

    return (
        <div className="container sm:mx-auto ml-1 p-2 lg:mx-auto  mr-0">
            {/* Service Filter */}
            <ServiceFilter onTabChange={handleTabChange} />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                {/* Service Box - taking 2 columns */}
                <div className="col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <ServiceBox activeService={activeService} />
                    </div>
                </div>

                {/* Additional Information or Placeholder for 3 columns */}
                <div className="col-span-3 ml-9">
                    <Slider/>
                </div>
            </div>
        </div>
    );
};

export default ServiceManagement;
