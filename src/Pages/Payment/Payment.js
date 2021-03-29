import React from 'react'
import { useParams } from 'react-router';

const Payment = () => {
    const params = useParams();
    console.log('params:', params)
    return (
        <div>
            <h4>Order Payment</h4>
            <p>Product id: {params.pid}</p>
            <p>Form id: {params.fmid} *dev ref only</p>
            <iframe
                title="payment_form"
                id='ds24_payIFrame'
                style={{ overflow: "hidden", width: "100%", height: "600px", border: "none", background: "transparent" }}
                src={`https://www.digistore24.com/product/${params.pid}/${params.fmid}`}></iframe>
        </div>
    )
}

export default Payment;