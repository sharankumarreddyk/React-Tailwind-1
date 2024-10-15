import React from 'react'

function ProductDetails({Name , Status}) {
  return (
    <>
        <div className="flex justify-between items-center">
                                    <div className="flex justify-center space-x-1 items-center">
                                        <h2 className="text-[#0F1C40] text-[20px] font-extrabold">{Name}</h2>
                                    </div>
                                    <div className="flex space-x-1">
                                        <button className="bg-[#008E28] justify-center text-xs font-bold text-center items-center p-3 px-4 text-white rounded-md">
                                            {Status}
                                        </button>
                                    </div>
                                </div>
    </>
  )
}

export default ProductDetails;