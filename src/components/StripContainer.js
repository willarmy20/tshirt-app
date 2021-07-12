import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import '../../src/index.css'

const PUBLIC_KEY = 'pk_test_51Ie2GZAxMTZABjPY9Xbo1IHOqfkoEmWMrMXWWi6NlgYcNGar25jWuNw61FhyoRhYR2nzQ9QvRW0nLHn85JX6B6pK00HPAIhy2a'

const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripContainer() {
    return (
        <Elements stripe= {stripePromise}>
            <PaymentForm />
        </Elements>
    )
}
