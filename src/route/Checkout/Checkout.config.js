import {
    SHIPPING_STEP as SOURCE_SHIPPING_STEP,
    BILLING_STEP as SOURCE_BILLING_STEP,
    DETAILS_STEP as SOURCE_DETAILS_STEP,
    CHECKOUT_URL as SOURCE_CHECKOUT_URL,
    PAYMENT_TOTALS,
    UPDATE_EMAIL_CHECK_FREQUENCY,
} from 'SourceRoute/Checkout/Checkout.config';

export {
    PAYMENT_TOTALS,
    UPDATE_EMAIL_CHECK_FREQUENCY,
};

//TODO: implement SHIPPING_STEP
export const SHIPPING_STEP = SOURCE_SHIPPING_STEP;

//TODO: implement BILLING_STEP
export const BILLING_STEP = SOURCE_BILLING_STEP;

//TODO: implement DETAILS_STEP
export const DETAILS_STEP = SOURCE_DETAILS_STEP;

//TODO: implement CHECKOUT_URL
export const CHECKOUT_URL = SOURCE_CHECKOUT_URL;
