// Import the original class (we want to keep most of the functionality)
// Note that we are using the "SourceComponent" alias in the import path –
// This tells Scandi that we want to get the original Footer component
import {
    Checkout as SourceCheckout
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component'
import Stepper from '../../Component/Stepper.component'
// Extend the original class (SourceFooter)
// By subclassing it, we can change some of its behavior
/** @namespace Test/Route/Checkout/Component/CheckoutComponent */
class CheckoutComponent extends SourceCheckout {
    
    render (){
        const {step}= this.props.match.params
        return(
            <main block="Checkout">
                <Stepper current={step === 'shipping'? 1 : step === 'billing' ? 2 : 3 }/>
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}

// All components, including the original Footer component, have a
// default export. Other files use this export when they want to use
// this component.
// Now, instead of providing the original component, we export our
// overridden component. Any file importing this will get the new behavior!
export default CheckoutComponent;
