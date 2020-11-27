import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';
// react-stripe-elements
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import submitOrder from '../strapi/submitOrder';
// import './checkout.scss';

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();
  // state values
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  async function handleSubmit(e) {
    showAlert({ msg: 'Din bestilling bliver gennemført... vent venligst' });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch((error) => console.log(error));
    // submit order to strapi, save cart content in items JSON field.
    const { token } = response;
    if (token) {
      setError('');
      const { id } = token;
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });

      if (order) {
        showAlert({ msg: 'Din bestilling er nu gennemført.' });
        clearCart();
        history.push('/');
        return;
      } else {
        showAlert({
          msg: 'Vi beklager. Der opstod et problem. Prøv igen senere.',
          type: 'danger',
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  // if there is no items in the cart redirect to EmptyCart page/component
  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className='section form'>
      <h2 className='section-title'>KASSE</h2>
      <div className="underline"></div>
      <form className='checkout-form'>
        <h3>
          order total:<span> DKK {total},-</span>
        </h3>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='name'>navn</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* end of single input */}
        {/* card element */}
        <div className='stripe-input'>
          <label htmlFor='card-element'>Kredit eller Debetkort</label>
          <p className='stripe-info'>
            Test med dette kreditkort: <span>4000 0020 8000 0001</span>
            <br />
            intast udløbsdato i dette format<span> 10/22</span>
            <br />
            indtast 3 tilfældige cifre som CVC
          </p>
        </div>
        {/* end of card element */}
        {/* STRIPE ELEMENTS */}
        <CardElement className='card-element'></CardElement>
        {/* stripe errors */}
        {error && <p className='form-empty'>{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className='form-empty'>indtast dit navn</p>
        ) : (
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary btn-block'
          >
            send
          </button>
        )}
      </form>
    </section>
  );
}

// pass in checkout to injectStripe HOC
const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_cBQrJq9StTix0joOX4u9boHC00wBGjPZZa'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
