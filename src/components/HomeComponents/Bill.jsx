import React from 'react'

function Bill({paymentmethod , price}) {
  return (
    <>
    <div className="col-span-1 mt-2 lg:mt-0">
                        <div className="lg:text-right text-[#0F1C40] text-left">
                            <p className="font-semibold">Payment</p>
                            <p>{paymentmethod}</p>
                            <p className="font-semibold">Full Price</p>
                            <p className="text-3xl font-bold">{price} Kr</p>
                            <a href="abc" className="text-xs font-semibold">Download Invoice</a>
                        </div>
                    </div>
    </>
  )
}

export default Bill;