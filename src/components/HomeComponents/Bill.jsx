import React from 'react'

function Bill({paymentmethod , price}) {
  return (
    <>
    
                        <div className="lg:text-right text-[#0F1C40] text-left ">
                            <p className="font-semibold">Payment</p>
                            <p>{paymentmethod}</p>
                            <p className="font-semibold">Full Price</p>
                            <p className="lg:text-[23px] text-xl font-bold">{price}</p>
                            <a href="abc" className="text-xs font-semibold">Download Invoice</a>
                        </div>
                  
    </>
  )
}

export default Bill;