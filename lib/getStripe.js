import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MQz6pSAF0PzUCnf4zlKpmA3FwXEHhGn21ZIDgdIpoz68a8d5749CnewB7EsqI0UNcNH3uaEaOaDlcfpwWwkHYs400WqeWXOav');
  }

  return stripePromise;
}

export default getStripe;