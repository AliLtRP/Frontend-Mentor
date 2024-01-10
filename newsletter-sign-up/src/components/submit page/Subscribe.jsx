import Button from '../landing page/Button';
import './App.css';



function Subscribe() {

    return (
        <div className='thank-page-wrap'>
            <div className="thank-page">
                <div className="success-mark">
                    <img src="/assets/images/icon-success.svg" alt="success icon" className='success-img' />
                </div>

                <div className="thank-heading">
                    <p>Thank you for subscribing!</p>
                </div>

                <div className="thank-info">
                    <p>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.</p>
                </div>

                <div className="thank-button">
                    <Button navi={'/'} message={'Dismiss message'} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;