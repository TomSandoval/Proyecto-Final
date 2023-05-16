import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal from '../../assets/paypal.png'

function Paypal() {

    //! VER EL MANEJO DE MONEDA, Y COMO AGREGAR EN AMOUNT EL MONTO AUTOMATICAMENTE 
    //! https://www.currencyconverterapi.com => API PARA CONVERSION DE MONEDAS

    const currency = 'USD';
    const amount = '1';
    return (
        <div className='paypal'>
            <h1>Prueba pago PayPal</h1>
            <img
                height="300"
                src={paypal}
                alt='logo_paypal'
            />
            <p>
                <span className='price'>${amount}</span>
            </p>
            <PayPalScriptProvider options={{ "client-id": "AYnGi5Q7vB4KoDDomMYaUBRv6T0h05oPsHOIBx6AE-JSP7JwyP6On7Ldvvk_DmNzar_QbSAMmf2IKuTJ" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // mensaje que muestra la compra aprobada
                            alert(
                                "pago realizado" + details.payer.name.given_name
                            )
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Paypal;
