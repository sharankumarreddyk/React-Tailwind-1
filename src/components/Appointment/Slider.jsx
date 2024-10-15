import { useState } from 'react';

const Slider = () => {
    const slides = [
      {
        src: "src/assets/i1.png",
        services: [
          {
            id: 1,
            temperature: "170°C",
            param: "55 Unit",
            paramRange: "Between 50 and 100 Unit",
            status: "Done",
            statusColor: "green-500",
          },
          {
            id: 2,
            temperature: "170°C",
            param: "175 Unit",
            paramRange: "Between 100 and 200 Unit",
            status: "Done",
            statusColor: "green-500",
          },
          {
            id: 3,
            temperature: "170°C",
            param: "55 Unit",
            paramRange: "Between 50 and 100 Unit",
            status: "Done",
            statusColor: "green-500",
          },
          {
            id: 4,
            temperature: "210°C",
            param: "300 Unit",
            paramRange: "Between 100 and 200 Unit",
            status: "In Progress",
            statusColor: "red-600",
          },
        ],
      },
      {
        src: "src/assets/i2.png",
        services: [], // Add services if needed for additional slides
      },
    ];

    // Pointer positions for different screen sizes
    const positionStyles = {
        lg: {
            1: { top: '220px', left: '680px' },
            2: { top: '190px', left: '150px' },
            3: { top: '60px', left: '320px' },
            4: { top: '240px', left: '450px' },
        },
        md: {
            1: { top: '110px', left: '320px' },
            2: { top: '100px', left: '80px' },
            3: { top: '40px', left: '160px' },
            4: { top: '130px', left: '200px' },
        },
        sm: {
            1: { top: '110px', left: '290px' },
            2: { top: '90px', left: '80px' },
            3: { top: '50px', left: '200px' },
            4: { top: '110px', left: '200px' },
        },
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Function to determine current screen size
    const getScreenSize = () => {
        if (window.innerWidth >= 1024) return 'lg'; // Large
        if (window.innerWidth >= 768) return 'md'; // Medium
        return 'sm'; // Small
    };

    const screenSize = getScreenSize();

    return (
        <div className="container lg:mt-20 mx-auto">
            <div className="slider relative w-full max-w-4xl overflow-hidden">
                <div
                    className="slides flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, slideIndex) => (
                        <div className="slide relative flex-shrink-0 w-full" key={slideIndex}>
                            <img src={slide.src} alt={`Image ${slideIndex + 1}`} className="w-full h-auto" />
                            {slide.services.map((service) => {
                                const { top, left } = positionStyles[screenSize][service.id] || { top: '10px', left: '10px' }; // Default position

                                return (
                                    <div key={service.id} className="absolute" style={{ top, left }}>
                                        <div className="relative group">
                                            {/* Service Box */}
                                            <div 
                                                className={`absolute z-20 bg-white rounded-md p-4 shadow-lg w-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${service.id === 4 ? 'border border-red-600' : 'border border-green-500'}`}
                                                style={{ 
                                                    top: `-60px`, // Position above the pointer
                                                    left: '-80px',
                                                }}
                                            >
                                                <div className={`font-bold mt-3 text-md ${service.id === 4 ? 'text-red-600' : 'text-[#0F1C40]'}`}>
                                                    Service {service.id}
                                                </div>
                                                <p className={`text-sm ${service.id === 4 ? 'text-red-600' : 'text-black'}`}>
                                                    Temperature: <span className={`font-bold text-lg ${service.id === 4 ? 'text-red-600' : 'text-black'}`}>{service.temperature}</span>
                                                </p>
                                                <p className={`text-sm`}>
                                                    Param:<br /> <span className={`font-bold text-lg ${service.id === 4 ? 'text-red-600' : 'text-black'}`}>{service.param}</span>
                                                </p>
                                                <p className="text-xs text-gray-500">{service.paramRange}</p>
                                                <div className={`absolute top-1 right-1 text-base text-${service.statusColor} font-bold`}>
                                                    {service.status}
                                                </div>
                                            </div>

                                            {/* Pointer */}
                                            <div 
                                                className={`absolute w-5 h-5 rounded-full flex items-center justify-center text-white ${service.id === 4 ? 'bg-red-600' : 'bg-green-600'}`}
                                                style={{
                                                    top: '100%', // Place pointer at the bottom of the service box
                                                    left: '50%',
                                                    transform: 'translateX(-30%)', // Center the pointer
                                                }}
                                            >
                                                X
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <button onClick={handlePrev} className="nav-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-[#0F1C40] rounded-full p-2 text-lg shadow-lg hover:bg-gray-300">
                    &lt;
                </button>
                <button onClick={handleNext} className="nav-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-[#0F1C40] rounded-full p-2 text-lg shadow-lg hover:bg-gray-300">
                    &gt;
                </button>

                <div id="dotsContainer" className="flex justify-center space-x-2 mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    {slides.map((_, index) => (
                        <div key={index} className={`dot w-3 h-3 bg-gray-400 rounded-full transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}></div>
                    ))}
                </div>
            </div>

            <h1 className="text-5xl text-[#0F1C40] font-bold mt-12 py-6">Product Pump</h1>
            <h5 className="text-xl text-[#0F1C40] font-semibold mt-0">Pressure 300 Pa</h5>
            <p className="text-gray-600 text-xs mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
            </p>

            <div id="technical" className="tab-content p-6 px-0">
                <div className="space-y-4">
                    <h3 className="text-4xl text-[#0F1C40] font-bold mt-6">Service Details</h3>
                    <div className="flex text-sm flex-col space-y-2">
                        {slides[0].services.map(service => (
                            <div className="flex items-stretch" key={service.id}>
                                <div className={`w-1/4 font-bold ${service.id === 4 ? 'bg-[#C1C1C1] text-[#6A6A6A]' : 'bg-[#0F1C40] text-white'} p-2 rounded-l-md flex items-center justify-between`}>
                                    Service {service.id}
                                    {service.id === 4 ? (
                                        <div className="flex items-center justify-center bg-[#6A6A6A] rounded-full p-1 ml-1 w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center bg-white rounded-full p-1 ml-1 w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0F1C40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className={`w-3/4 bg-gray-100 p-2 rounded-r-md flex items-center ${service.id === 4 ? 'text-red-650' : ''}`}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;