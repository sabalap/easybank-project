import React from 'react'
import "./Section.css";
import firstLogo from "../../images/icon-online.svg";
import secondLogo from "../../images/icon-budgeting.svg";
import thirdLogo from "../../images/icon-onboarding.svg";
import fourthLogo from "../../images/icon-api.svg";
import moneyImage from "../../images/image-currency.jpg";
import restaurantImage from "../../images/image-restaurant.jpg";
import planeImage from "../../images/image-plane.jpg";
import confettiImage from "../../images/image-confetti.jpg";
function Section() {
    return (
        <>
            <section className="grey-section">
                <div className="container">
                    <h1>Why choose Easybank?</h1>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
            </p>
                    <div className="row">
                        <div className="column">
                            <img src={firstLogo} alt="firstLogo" />
                            <h3>Online Banking</h3>
                            <p>
                                Our modern web and mobile applications
                                allow you to keep track of your finances wherever you are in the world.
                     </p>
                        </div>
                        <div className="column">
                            <img src={secondLogo} alt="secondLogo" />
                            <h3>Simple Budgeting</h3>
                            <p>
                                See exactly where your money goes each month.
                                Receive notifications when you’re close to hitting your limits.
                     </p>
                        </div>
                        <div className="column">
                            <img src={thirdLogo} alt="thirdLogo" />
                            <h3>Fast Onboarding</h3>
                            <p>
                                We don’t do branches. Open your account in minutes
                                online and start taking control of your finances right away.
                     </p>
                        </div>
                        <div className="column">
                            <img src={fourthLogo} alt="fourthLogo" />
                            <h3>Open API</h3>
                            <p>
                                Manage your savings, investments, pension, and much more from one account.
                                Tracking your money has never been easier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="white">
                <div className="container">
                    <h2>Latest Articles</h2>
                    <div>
                        <div className="box-images">
                            <div className="column-box">
                                <img src={moneyImage} alt="moneyImage" />
                                <p>By Claire Robinson</p>
                                <h3>Receive money in any currency with no fees</h3>
                                <p>
                                    The world is getting smaller and we’re becoming more mobile.
                                    So why should you be forced to only receive money in a single …
                                </p>
                            </div>
                        </div>
                        <div className="box-images">
                            <div className="column-box">
                                <img src={restaurantImage} alt="restaurantImage" />
                                <p>By Wilson Hutton</p>
                                <h3>Treat yourself without worrying about money</h3>
                                <p>
                                    Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.
                                    That means you …
                                </p>
                            </div>
                        </div>
                        <div className="box-images">
                            <div className="column-box">
                                <img src={planeImage} alt="planeImage" />
                                <p>By Wilson Hutton</p>
                                <h3>Take your Easybank card wherever you go</h3>
                                <p>
                                    We want you to enjoy your travels.
                                    This is why we don’t charge any fees on purchases while you’re abroad.
                                    We’ll even show you …
                                </p>
                            </div>
                        </div>
                        <div className="box-images">
                            <div className="column-box">
                                <img src={confettiImage} alt="confettiImage" />
                                <p>By Claire Robinson</p>
                                <h3>Our invite-only Beta accounts are now live!</h3>
                                <p>
                                    After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                    It’s easy to request an invite through the site ...
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section
