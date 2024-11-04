import React from 'react'

function Bill({paymentmethod , price}) {
  return (
    <>
    
                        <div className="lg:text-right sm:space-y-2 sm:pt-2 pl-1 text-[#0F1C40] text-left ">
                            <p className="font-semibold text-sm">Payment</p>
                            <p className='text-2xl font-thin'>{paymentmethod}</p>
                            <p className="font-semibold text-xs">Full Price</p>
                            <p className="lg:text-[20px] text-xl font-bold">{price}</p>
                            <a href="abc" className="text-xs font-semibold">Download Invoice</a>
                        </div>
                  
    </>
  )
}

export default Bill;