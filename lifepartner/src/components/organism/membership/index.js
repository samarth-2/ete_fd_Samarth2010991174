import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Membership = () => {
    const [plan, setPlan] = useState("Base plan");
    const [displayer,setDisplayer]=useState({
        payment:"flex",
        success:"none"
    })
    function checker(){
        setDisplayer({
            payment:"none",
        success:"flex"})
    }
    return (
        <div className='membership__outer'>
            <div  className='membership__inner'>
                <div className='membership__inner__title'>
                    current plan : {plan}
                </div>
                <div>
                    To upgrade please click on the respective plan
                </div>
                <div className='membership__outer__cards'>
                    <div onClick={(e) => [setPlan("Base Plan")]} className='membership__cards'>
                        <div className='membership__cards__title'> Base Plan </div>

                        <div className='membership__cards__info'>
                            you can only send request to 10 people per day.Full description of people is not visible to you before you get matched
                        </div>
                    </div>
                    <div onClick={(e) => [setPlan("Pro Plan")]}>
                        <div className='membership__cards__title'> Pro Plan </div>

                        <div className='membership__cards__info'>
                            you can only send request to 15 people per day.Full description of people is not visible to you before you get matched
                        </div>
                    </div>
                    <div onClick={(e) => [setPlan("Premium Plan")]}>
                        <div className='membership__cards__title'> Premium Plan</div>

                        <div className='membership__cards__info'>
                            you can send request to 20 people per day. Full description of people is visible along with their socials .
                        </div>
                    </div>

                </div>
                <div className='membership_payment__outer'>
                    <div  style={{display:displayer.payment}} className='membership_payment__inner'>
                        <div className='membership_payment__title'>
                            <div>
                                credit card
                            </div>
                            {'\u00A0'}
                            <div>
                                <input className='form-check-input' type="radio" name="payment__cards"/>
                            </div>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}
                            
                            <div>
                                debit card
                            </div>
                            {'\u00A0'}
                            <div>
                                <input className='form-check-input' type="radio" name="payment__cards"/>
                            </div>
                        </div>
                        <div className='membership_payment__title'>
                            <input className='form-control' type='number' placeholder='enter card number'/>
                        </div>
                        <div className='membership_payment__title'>
                            <input className='form-control' type='text' placeholder='enter card holder name' />
                            <input className='form-control' type='date' placeholder='enter expiration date'/>
                        </div>
                        <div style={{width:"30%"}} className='membership_payment__title'>
                            <input  className='form-control' type='number' placeholder='enter cvv'/>
                        </div>
                        <div onClick={checker} className='membership__payment__button'>
                            checkout
                        </div>
                    </div>
                    <div style={{display:displayer.success}} className='membership__payment__success'>
                        payment successful
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Membership;