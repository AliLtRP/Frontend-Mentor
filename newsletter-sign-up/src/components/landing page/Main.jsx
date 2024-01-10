import "./App.css";
import Button from "./Button";




function Main() {

    const checkEmail = (e) => {

        const emailValidate = e.target;
        const notValidLabel = document.getElementById('not_valid');

        if (!emailValidate.validity.valid) {
            notValidLabel.classList.add('show');
        } else {
            notValidLabel.classList.remove('show');
        }

    }




    return (
        <div className="wrap">
            <div className="main-wrap">
                <div className="main-img">
                    <picture>
                        <source media="(min-width: 950px)" srcSet="/assets/images/illustration-sign-up-desktop.svg" />
                        <source media="(max-width: 375px)" srcSet="/assets/images/illustration-sign-up-mobile.svg" />
                        <img src="/assets/images/illustration-sign-up-desktop.svg" alt="responsive image" className=""/>
                    </picture>
                </div>

                {/* left container */}
                <div className="main-content">
                    {/* wrapper for the content */}
                    <div className="content-heading">
                        {/* heading */}
                        <p className="para-heading">Stay Updated!</p>
                        <div className="para-info">
                            <p>Join 60,000+ product managers receiving monthly</p>
                            <p>updates on:</p>
                        </div>
                    </div>

                    <div className="list-form-wrap">

                        <div className="list-check">
                            <div className="list">
                                <img src="/assets/images/icon-list.svg" />
                                <p>Product discovery and building what matters</p>
                            </div>

                            <div className="list">
                                <img src="/assets/images/icon-list.svg" />
                                <p>Measuring to ensure updates are a success</p>
                            </div>

                            <div className="list">
                                <img src="/assets/images/icon-list.svg" />
                                <p>And much more!</p>
                            </div>
                        </div>

                        <div className="sub-form">
                            <div className="in-field">
                                <div className="form-labels">
                                    <label htmlFor="">Email Address</label>
                                    <label htmlFor="" id="not_valid">Valid email required</label>
                                </div>
                                <input type="email" id="" className="input" onChange={checkEmail} />
                            </div>

                            <Button navi={'/sub'} message={'Subscribe to monthly newsletter'} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}





export default Main;