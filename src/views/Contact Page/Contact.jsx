import './Contact.css';
import img1 from '../../assets/arrow_right.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Contact() {

  const [val, setVal] = useState(false);
  const [valOne, setValOne] = useState(false);
  const [valTwo, setValTwo] = useState(false);
  const [valThree, setValThree] = useState(false);
  const [valFour, setValFour] = useState(false);
  const [valFive, setValFive] = useState(false);
  const [valSix, setValSix] = useState(false);
  const [valSeven, setValSeven] = useState(false);
  const [valEight, setValEight] = useState(false);
  const [valNine, setValNine] = useState(false);
  const [valTen, setValTen] = useState(false);
  const [valEleven, setValEleven] = useState(false);
  const [valTwelve, setValTwelve] = useState(false);
  const [valThirteen, setValThirteen] = useState(false);
  const [valFourteen, setValFourteen] = useState(false);
  const [valFifteen, setValFifteen] = useState(false);
  const [valSixteen, setValSixteen] = useState(false);
  const [valSeventeen, setValSeventeen] = useState(false);
  const [valEighteen, setValEighteen] = useState(false);
  const [valNineteen, setValNineteen] = useState(false);
  const [valTwenty, setValTwenty] = useState(false);
  const [valTwentyOne, setValTwentyOne] = useState(false);
  const [valTwentyTwo, setValTwentyTwo] = useState(false);
  const [valTwentyThree, setValTwentyThree] = useState(false);
  const [valTwentyFour, setValTwentyFour] = useState(false);
  const [valTwentyFive, setValTwentyFive] = useState(false);
  const [valTwentySix, setValTwentySix] = useState(false);
  const [valTwentySeven, setValTwentySeven] = useState(false);
  const [valTwentyEight, setValTwentyEight] = useState(false);
  const [valTwentyNine, setValTwentyNine] = useState(false);
  const [valThirty, setValThirty] = useState(false);
  const [valThirtyOne, setValThirtyOne] = useState(false);
  const [valThirtyTwo, setValThirtyTwo] = useState(false);
  const [valThirtyThree, setValThirtyThree] = useState(false);
  const [valThirtyFour, setValThirtyFour] = useState(false);
  const [valThirtyFive, setValThirtyFive] = useState(false);
  const [valThirtySix, setValThirtySix] = useState(false);
  const [valThirtySeven, setValThirtySeven] = useState(false);
  const [valThirtyEight, setValThirtyEight] = useState(false);
  const [valThirtyNine, setValThirtyNine] = useState(false);
  const [valFourty, setValFourty] = useState(false);
  const [valFourtyOne, setValFourtyOne] = useState(false);
  const [valFourtyTwo, setValFourtyTwo] = useState(false);
  const [valFourtyThree, setValFourtyThree] = useState(false);
  const [valFourtyFour, setValFourtyFour] = useState(false);
  const [valFourtyFive, setValFourtyFive] = useState(false);
  const [valFourtySix, setValFourtySix] = useState(false);
  const [valFourtySeven, setValFourtySeven] = useState(false);
  const [valFourtyEight, setValFourtyEight] = useState(false);
  const [valFourtyNine, setValFourtyNine] = useState(false);
  const [valFifty, setValFifty] = useState(false);
  const [valFiftyOne, setValFiftyOne] = useState(false);
  const [valFiftyTwo, setValFiftyTwo] = useState(false);
  const [valFiftyThree, setValFiftyThree] = useState(false);
  const [valFiftyFour, setValFiftyFour] = useState(false);
  const [valFiftyFive, setValFiftyFive] = useState(false);
  const [valFiftySix, setValFiftySix] = useState(false);
  const [valFiftySeven, setValFiftySeven] = useState(false);
  const [valFiftyEight, setValFiftyEight] = useState(false);
  const [valFiftyNine, setValFiftyNine] = useState(false);
  const [valSixty, setValSixty] = useState(false);
  const [valSixtyOne, setValSixtyOne] = useState(false);
  const [valSixtyTwo, setValSixtyTwo] = useState(false);
  const [valSixtyThree, setValSixtyThree] = useState(false);
  const [valSixtyFour, setValSixtyFour] = useState(false);
  const [valSixtyFive, setValSixtyFive] = useState(false);
  const [valSixtySix, setValSixtySix] = useState(false);
  const [valSixtySeven, setValSixtySeven] = useState(false);
  const [valSixtyEight, setValSixtyEight] = useState(false);
  const [valSixtyNine, setValSixtyNine] = useState(false);
  const [valSeventy, setValSeventy] = useState(false);
  const [valSeventyOne, setValSeventyOne] = useState(false);
  const [valSeventyTwo, setValSeventyTwo] = useState(false);
  const [valSeventyThree, setValSeventyThree] = useState(false);
  const [valSeventyFour, setValSeventyFour] = useState(false);
  const [valSeventyFive, setValSeventyFive] = useState(false);
  return (
    <section className={`contact-section `}>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-title">
            <h3 className="contact">Contact</h3>
          </div>
          <div className="contact-para">
            <p className="contact-para">
              Thanks for your interest in Kaggle. A lot of the common inquiries we receive are listed below. Please click on the one that
              applies to you to learn more.
            </p>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Account/Login</h3>
            </div>
            <div className="contact-queries">
              <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setVal(!val)}
                onKeyPress={() => setVal(!val)}
              >
                <h5 className="query-title">I cannot activate my account</h5>
              </div>
              <div className={`subquery-container ${val ? 'null' : 'hide'}`} >
                <div className="contact-subqueries">
                  <div
                    className="contact-subquery"
                    role="button"
                    tabIndex={0}
                    onClick={() => setValOne(!valOne)}
                    onKeyPress={() =>  setValOne(!valOne)}
                  >
                    <div className={`arrow-right-img  ${valOne ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I cannot verify my phone number, I haven&apos;t received the code</h5>
                  </div>
                  <div className={`subquery-container ${valOne ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Before using certain parts of Kaggle, we ask all users to verify their account via their mobile phone number. Kaggle
                        requires this verification to detect, prevent, and otherwise address fraud and abuse issues.
                      </p>
                      <p className="contact-sub-para">
                        Ensure your phone is not signed up for the Do-Not-Call registry and double check your country code and area code are
                        entered correctly
                      </p>
                      <p className="contact-sub-para">Make sure you&apos;ve waited at least 24 hours.</p>
                      <div className="button first medium">
                        <div className="button-content">Verify your phone</div>
                      </div>
                      <p className="contact-sub-para">
                        Are you trying to verify from India? You may encounter issues receiving SMS messages if you are on the national
                        do-not-call registry or verifying during certain times of the day. You can learn more about SMS in India here.
                      </p>
                      <p className="contact-sub-para">
                        If you&apos;re verifying between 9PM and 9AM, and are not on the do-not-call registry, you should receive your
                        verification code sometime tomorrow, at which point you can return to verify your account.
                      </p>
                      <p className="contact-sub-para">
                        If you are on the do-not-call registry, you will need to remove yourself from this list in order to receive your
                        verification code.
                      </p>
                      <p className="contact-sub-para">If you are still having difficulties you can use the form below to contact us</p>
                      <div className="button first medium">
                        <div className="button-content">Contact support</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries" 
                    >
                  <div className="contact-subquery"
                    role="button"
                    tabIndex={0}
                    onClick={() => setValTwo(!valTwo)}
                    onKeyPress={() =>  setValTwo(!valTwo)}>
                    <div className={`arrow-right-img  ${valTwo ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Why do I need to phone verify my account?</h5>
                  </div>
                  <div className={`subquery-container ${valTwo ? 'null' : 'hide'} `} >
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Before using certain parts of Kaggle, we ask all users to verify their account via their mobile phone number. Kaggle
                        requires this verification to detect, prevent, and otherwise address fraud and abuse issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries" >
                  <div className="contact-subquery" role="button"
                    tabIndex={0}
                    onClick={() => setValThree(!valThree)}
                    onKeyPress={() =>  setValThree(!valThree)}>
                    <div className={`arrow-right-img  ${valThree ? 'rotateX' : ''}`} >
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What will you do with my phone number?</h5>
                  </div>
                  <div className={`subquery-container ${valThree ? 'null' : 'hide'} `} >
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        For further details, please visit our{' '}
                        <Link to="/privacy" className="lined">
                          privacy policy.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFour(!valFour)}
                    onKeyPress={() =>  setValFour(!valFour)}>
                    <div className={`arrow-right-img  ${valFour ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What will it cost to phone verify my account?</h5>
                  </div>
                  <div className={`subquery-container ${valFour ? 'null' : 'hide'} `} >
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The cost for a text message will vary with your plan and provider, but will likely be your standard text message
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery" role="button"
                    tabIndex={0}
                    onClick={() => setValFive(!valFive)}
                    onKeyPress={() =>  setValFive(!valFive)}>
                    <div className={`arrow-right-img  ${valFive ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What if I don&apos;t want to provide my number?</h5>
                  </div>
                  <div className={`subquery-container ${valFive ? 'null' : 'hide'} `} >
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The cost for a text message will vary with your plan and provider, but will likely be your standard text message
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery" role="button"
                    tabIndex={0}
                    onClick={() => setValSix(!valSix)}
                    onKeyPress={() =>  setValSix(!valSix)}>
                    <div className={`arrow-right-img  ${valSix ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I can&apos;t send a code to the phone number I entered</h5>
                  </div>
                  <div className={`subquery-container ${valSix ? 'null' : 'hide'} `} >
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Participation on Kaggle is completely voluntary and it is your choice to verify your account. Unverified accounts
                        can still use many parts of Kaggle, including to make submissions to Getting Started competitions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValSeven(!valSeven)}
                    onKeyPress={() =>  setValSeven(!valSeven)}>
                    <div className={`arrow-right-img  ${valSeven ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I cannot verify my phone number, I have no phone</h5>
                  </div>
                  <div className={`subquery-container ${valSeven ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The phone number can&apos;t be verified. You need to find an alternative phone number to verify with Kaggle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValEight(!valEight)}
                    onKeyPress={() =>  setValEight(!valEight)}>
                    <div className={`arrow-right-img  ${valEight ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I am having problems with Captcha</h5>
                  </div>
                  <div className={`subquery-container ${valEight ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Unfortunately, we require all participants verify via SMS. If you do not have a phone available we are not able to
                        verify your account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValNine(!valNine)}
                    onKeyPress={() =>  setValNine(!valNine)}>
                    <div className={`arrow-right-img  ${valNine ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I did not receive email verification</h5>
                  </div>
                  <div className={`subquery-container ${valNine ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Please use the form below to resend your email verification</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTen(!valTen)}
                    onKeyPress={() =>  setValTen(!valTen)}>
                    <div className={`arrow-right-img  ${valTen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Duplicate Phone Number</h5>
                  </div>
                  <div className={`subquery-container ${valTen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Kaggle requires that you only have one account .If you used a public SMS number, don&apos;t do that.
                      </p>
                      <p className="contact-sub-para">
                        If you previously verified an account with your number, please use that account (you can change the email address if
                        you need it for classroom use). If you don&apos;t remember your username, you can sign in using your email address.
                        Note that you may have logins under Google/Facebook/Yahoo social logins as well.
                      </p>
                      <p className="contact-sub-para">
                        If you believe another user has used your phone number (this is rare), please let us know via the form below
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValEleven(!valEleven)}
                onKeyPress={() => setValEleven(!valEleven)}
              >
                <h5 className="query-title">I&apos;d like to change my...</h5>
              </div>
              <div className={`subquery-container ${valEleven ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTwelve(!valTwelve)}
                    onKeyPress={() =>  setValTwelve(!valTwelve)}>
                    <div className={`arrow-right-img  ${valTwelve ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Username</h5>
                  </div>
                  <div className={`subquery-container ${valTwelve ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Unfortunately at this time we do not support changing usernames. If you have extenuating circumstances, you can use
                        the following form
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirteen(!valThirteen)}
                    onKeyPress={() =>  setValThirteen(!valThirteen)}>
                    <div className={`arrow-right-img  ${valThirteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Display Name</h5>
                  </div>
                  <div className={`subquery-container ${valThirteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can change the name displayed on your profile by going to your profile, clicking on the &qout;Account&qout; tab,
                        and then changing your &qout;Display Name&qout;.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourteen(!valFourteen)}
                    onKeyPress={() =>  setValFourteen(!valFourteen)}>
                    <div className={`arrow-right-img  ${valFourteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Email Address</h5>
                  </div>
                  <div className={`subquery-container ${valFourteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can change your email via the More &gt; Account tab in your profile. Click the &qout;Edit&qout; button in the
                        upper right corner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFifteen(!valFifteen)}
                    onKeyPress={() =>  setValFifteen(!valFifteen)}>
                    <div className={`arrow-right-img  ${valFifteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Profile Picture</h5>
                  </div>
                  <div className={`subquery-container ${valFifteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can go to your profile, click edit and upload a new image for your profile picture
                      </p>
                      <p className="contact-sub-para">
                        If you have a profile picture without loading one, or it has changed, your profile pic on Kaggle is synced through
                        Gravatar. You can update the picture at{' '}
                        <a href="http://en.gravatar.com/" className="lined">
                          {' '}
                          http://en.gravatar.com/
                        </a>
                        , and it will then automatically refresh your Kaggle profile picture.
                      </p>
                      <p className="contact-sub-para">
                        You can request a password reset to be sent to the email you have on file by clicking below
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValSixteen(!valSixteen)}
                    onKeyPress={() =>  setValSixteen(!valSixteen)}>
                    <div className={`arrow-right-img  ${valSixteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Password</h5>
                  </div>
                  <div className={`subquery-container ${valSixteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can request a password reset to be sent to the email you have on file by clicking below
                      </p>
                      <div className="button first medium">
                        <div className="button-content">Reset Password</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventeen(!valSeventeen)}
                onKeyPress={() => setValSeventeen(!valSeventeen)}
              >
                <h5 className="query-title">I have received a warning</h5>
              </div>
              <div className={`subquery-container ${valSeventeen ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValEighteen(!valEighteen)}
                    onKeyPress={() =>  setValEighteen(!valEighteen)}>
                    <div className={`arrow-right-img  ${valEighteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">About Warnings</h5>
                  </div>
                  <div className={`subquery-container ${valEighteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Review our enforcement and guidelines on our community guidelines page.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValNineteen(!valNineteen)}
                    onKeyPress={() =>  setValNineteen(!valNineteen)}>
                    <div className={`arrow-right-img  ${valNineteen ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Appeal a Warning</h5>
                  </div>
                  <div className={`subquery-container ${valNineteen ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Disagree with the warning we issued?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwenty(!valTwenty)}
                onKeyPress={() => setValTwenty(!valTwenty)}
              >
                <h5 className="query-title">I am blocked from accessing my account?</h5>
              </div>
              <div className={`subquery-container ${valTwenty ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTwentyOne(!valTwentyOne)}
                    onKeyPress={() =>  setValTwentyOne(!valTwentyOne)}>
                    <div className={`arrow-right-img  ${valTwentyOne ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Suspensions and Bans</h5>
                  </div>
                  <div className={`subquery-container ${valTwentyOne ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Review our enforcement and guidelines on our community guidelines page.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTwentyTwo(!valTwentyTwo)}
                    onKeyPress={() =>  setValTwentyTwo(!valTwentyTwo)}>
                    <div className={`arrow-right-img  ${valTwentyTwo ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Cheating</h5>
                  </div>
                  <div className={`subquery-container ${valTwentyTwo ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You were removed from the leaderboard and banned by Kaggle&apos;s Compliance Team, which is in charge of enforcing
                        the rules and ensuring fairness among competitors on Kaggle&apos;s platform. One of the main principles is that each
                        participant has only 1 account and never shares code privately. They have monitored the behavior and submissions of
                        all members of your team and made a determination. Please use the compliance form if you believe this was
                        unjustified.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTwentyThree(!valTwentyThree)}
                    onKeyPress={() =>  setValTwentyThree(!valTwentyThree)}>
                    <div className={`arrow-right-img  ${valTwentyThree ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Download Frequency</h5>
                  </div>
                  <div className={`subquery-container ${valTwentyThree ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Our servers detected too many requests in a given period of time and automatically banned your account. If
                        you&apos;re using a crawler or a download manager, we suggest that you adjust the settings to slow that frequency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValTwentyFour(!valTwentyFour)}
                    onKeyPress={() =>  setValTwentyFour(!valTwentyFour)}>
                    <div className={`arrow-right-img  ${valTwentyFour ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Inquire About Account Status</h5>
                  </div>
                  <div className={`subquery-container ${valTwentyFour ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">What&apos;s my account status?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwentyFive(!valTwentyFive)}
                onKeyPress={() => setValTwentyFive(!valTwentyFive)}
              >
                <h5 className="query-title">I&apos;d like to delete my account</h5>
              </div>
              <div className={`subquery-container ${valTwentyFive ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    We&apos;re sorry to see you go#34 To delete your account, visit your profile, click on the &qout;Account Tab&qout; and
                    click the &qout;Close Account&qout; link in the bottom right. When you delete your account, the personal data associated
                    with your account will be deleted, in accordance with our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwentySix(!valTwentySix)}
                onKeyPress={() => setValTwentySix(!valTwentySix)}
              >
                <h5 className="query-title">I&apos;d like to withdraw my account</h5>
              </div>
              <div className={`subquery-container ${valTwentySix ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    <strong>Please note:</strong> This form is only for users in the European Economic Area who wish to to request the
                    withdrawal of a Kaggle account which was created within the last 14 days.
                  </p>
                  <p className="contact-sub-para">If you do not satisfy both of these conditions, then this form isn&apos;t for you.</p>
                  <p className="contact-sub-para">
                    <strong>
                      Withdrawal of a Kaggle account will result in deletion of such account and associated personal data. Your account and
                      personal data are not recoverable once withdrawn.
                    </strong>{' '}
                    You can delete your Kaggle account at any time. Learn more about what deleting your account means and find instructions
                    for deleting your account here.
                  </p>
                  <p className="contact-sub-para">By submitting the request you confirm that:</p>
                  <ul>
                    <li>
                      The user has not made a submission to the competition. Note that it must be the competition associated with the
                      current team.
                    </li>
                    <li>You are at the maximum size for a team in this competition</li>
                    <li>
                      If the user was added to the team, the team would exceed the competition&apos;s submission cap. (The daily submission
                      limits apply to the team, so a 3-member team will have the same submission limits as a 1-member team.)
                    </li>
                  </ul>
                  <p className="contact-sub-para">You&apos;re currently signed in as: @abc</p>
                  <p className="contact-sub-para">Your username and email address will be submitted with your request</p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwentySeven(!valTwentySeven)}
                onKeyPress={() => setValTwentySeven(!valTwentySeven)}
              >
                <h5 className="query-title">I am having problems changing my login method</h5>
              </div>
              <div className={`subquery-container ${valTwentySeven ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    To ensure a consistent and secure login experience, we are removing Facebook as one of the options for signing in on
                    Kaggle. If you use Facebook to sign in to Kaggle, you must change your login method in order to continue using Kaggle.
                    We deprecated Facebook login on December 4, 2019. Please click the button below to transition to a new login method.
                  </p>
                  <div className="button first medium">
                    <div className="button-content">Change my login method</div>
                  </div>
                  <p className="contact-sub-para">
                    If you are experiencing issues transitioning to a new login method, please fill out the form below so we can help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Competitions</h3>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwentyEight(!valTwentyEight)}
                onKeyPress={() => setValTwentyEight(!valTwentyEight)}
              >
                <h5 className="query-title">Where do I start?</h5>
              </div>
              <div className={`subquery-container ${valTwentyEight ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para-child">
                    Hooray! You&apos;ve just joined the world&apos;s largest community of data scientists!
                  </p>
                  <p className="contact-sub-para-child">
                    Whether you&apos;re new to data science or a veteran looking to collaborate with other experts, you&apos;re in the right
                    place. You can get started by participating in competitions or collaborating on our open data platform.
                  </p>

                  <p className="contact-sub-para-child">You can also check out Kaggle Learn to learn new skills</p>
                  <h3 className="contact-subtitle">Competitions</h3>
                  <p className="contact-sub-para-child">
                    Titanic: Machine Learning from Disaster New to data science? Start here! Predict survival on the Titanic and get
                    hands-on experience with machine learning fundamentals. Don&apos;t miss our popular tutorials.
                  </p>
                  <p className="contact-sub-para-child">
                    House Prices: Advanced Regression Techniques Ready to expand your toolkit? Predict house prices and learn advanced
                    regression techniques like random forest and gradient boosting with these tutorials.
                  </p>
                  <p className="contact-sub-para-child">
                    Ready to level up? Check out our featured competitions to win cash prizes and start climbing the Kaggle rankings.
                  </p>
                  <h3 className="contact-subtitle">Datasets</h3>
                  <p className="contact-sub-para-child">
                    You can find and download datasets on a wide variety of subjects on our open data platform. Learn more about how to
                    search for data for your project.
                  </p>
                  <p className="contact-sub-para-child">
                    Want to contribute to the open data movement? Publish your own dataset on Kaggle for community collaboration! Read our
                    simple publishing guide to get started. Happy Modeling!
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValTwentyNine(!valTwentyNine)}
                onKeyPress={() => setValTwentyNine(!valTwentyNine)}
              >
                <h5 className="query-title">I have a question about a current competition</h5>
              </div>
              <div className={`subquery-container ${valTwentyNine ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirty(!valThirty)}
                    onKeyPress={() =>  setValThirty(!valThirty)}>
                    <div className={`arrow-right-img  ${valSix ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Why can’t I join a competition?</h5>
                  </div>
                  <div className={`subquery-container ${valThirty ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para-child">
                        Double check the entry deadline (via the specific competition’s timeline tab) for the competition, as it may have
                        passed. Kaggle is unfortunately not able to make rules exceptions. You will be able to submit to the competition
                        after the final deadline so you can see how you would have performed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyOne(!valThirtyOne)}
                    onKeyPress={() =>  setValThirtyOne(!valThirtyOne)}>
                    <div className={`arrow-right-img  ${valThirtyOne ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I’m having trouble with a Team/Forming a Team</h5>
                  </div>
                  <div className={`contact-subqueries ${valThirtyOne ? 'null' : 'hide'} `}>
                    <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyTwo(!valThirtyTwo)}
                    onKeyPress={() =>  setValThirtyTwo(!valThirtyTwo)}>
                      <div className={`arrow-right-img  ${valThirtyTwo ? 'rotateX' : ''}`}>
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">How to Form a Team</h5>
                    </div>
                    <div className={`subquery-container ${valThirtyTwo ? 'null' : 'hide'} `}>
                      <div className="contact-subqueries">
                        <p className="contact-sub-para-child">
                          You can view the Team tab once you have accepted the rules. Doing this will automatically create a single-user
                          team of yourself, where you can take further actions to merge with others by going to &quot;More&quot; then
                          &quot;Team&quot;.see how you would have performed.
                        </p>
                        <p className="contact-sub-para-child">
                          To invite a single person, have them accept the rules which will create a team for them. Then you can merge with
                          that single-user team.
                        </p>
                        <p className="contact-sub-para-child">
                          Note that your combined team must follow all rules (e.g. daily submission limits), and one ineligible team members
                          disqualifies the whole team.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-subqueries">
                    <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyThree(!valThirtyThree)}
                    onKeyPress={() =>  setValThirtyThree(!valThirtyThree)}>
                      <div className={`arrow-right-img  ${valThirtyThree ? 'rotateX' : ''}`}>
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">We Missed the Team Merger Deadline</h5>
                    </div>
                    <div className={`subquery-container ${valThirtyThree ? 'null' : 'hide'} `}>
                      <div className="contact-subqueries">
                        <p className="contact-sub-para">
                          Kaggle is unfortunately not able to make rules exceptions when teams miss the merger deadline. In the future, be
                          sure to send merge requests far enough in advance for recipients to respond to them in a timely manner. Also note
                          that merge requests should be read thoroughly and the steps completely followed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-subqueries">
                    <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyFour(!valThirtyFour)}
                    onKeyPress={() =>  setValThirtyFour(!valThirtyFour)}>
                      <div className={`arrow-right-img  ${valThirtyFour ? 'rotateX' : ''}`}>
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">Removing a Team member</h5>
                    </div>
                    <div className={`subquery-container ${valThirtyFour ? 'null' : 'hide'} `}>
                      <div className="contact-subqueries">
                        <p className="contact-sub-para">
                          Sorry, but it is against the rules to remove team members once a team has been formed. We ask that you be careful
                          about joining with someone else in the future if you suspect that they may become inactive at any point. Note that
                          it is also against the rules to create a second account, and any additional accounts will be disqualified from the
                          competition results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-subqueries">
                    <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyFive(!valThirtyFive)}
                    onKeyPress={() =>  setValThirtyFive(!valThirtyFive)}>
                      <div className={`arrow-right-img  ${valThirtyFive ? 'rotateX' : ''}`}>
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">Why can&apos;t I add a user to my team?</h5>
                    </div>
                    <div className={`subquery-container ${valThirtyFive ? 'null' : 'hide'} `}>
                      <div className="contact-subqueries">
                        <p className="contact-sub-para">
                          The following are reasons a particular user may not be able to be added to your team:
                        </p>
                        <ul>
                          <li>
                            The user has not made a submission to the competition. Note that it must be the competition associated with the
                            current team.
                          </li>
                          <li>You are at the maximum size for a team in this competition</li>
                          <li>
                            If the user was added to the team, the team would exceed the competition&apos;s submission cap. (The daily
                            submission limits apply to the team, so a 3-member team will have the same submission limits as a 1-member
                            team.)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtySix(!valThirtySix)}
                    onKeyPress={() =>  setValThirtySix(!valThirtySix)}>
                    <div className={`arrow-right-img  ${valThirtySix ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I need help with my code/entry for a competition</h5>
                  </div>
                  <div className={`subquery-container ${valThirtySix ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        This is a suitable question to ask in the competition forums. Unfortunately, we are unable to provide assistance
                        with debugging or provide details on scoring or errors for code competitions. Kaggle support is generally reserved
                        for technical issues that are affecting all participants. If you believe you have an issue affecting all
                        participants, you can contact support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtySeven(!valThirtySeven)}
                    onKeyPress={() =>  setValThirtySeven(!valThirtySeven)}>
                    <div className={`arrow-right-img  ${valThirtySeven ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Question on specific competition rules</h5>
                  </div>
                  <div className={`subquery-container ${valThirtySeven ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Please note that by participating in a competition, you are entering into an agreement between you and the
                        competition sponsor in which Kaggle plays a very limited role. We are not in a position to offer you legal advice
                        regarding these terms, and ask that you direct your questions to the relevant forum, if possible. You will likely
                        receive a more targeted and rapid response, as this line of communication is open for those experiencing issues on
                        the site.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyEight(!valThirtyEight)}
                    onKeyPress={() =>  setValThirtyEight(!valThirtyEight)}>
                    <div className={`arrow-right-img  ${valThirtyEight ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Can I use this competition data for an outside project?</h5>
                  </div>
                  <div className={`subquery-container ${valThirtyEight ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para-child">
                        Each competition has a Rules page, which may or may not specify explicit rules about data usage. If the competition
                        rules prohibit use outside of the competition, then you may not use the data outside the competition.{' '}
                      </p>
                      <p className="contact-sub-para-child">
                        If the rules do not specify usage restrictions, we ask that you use your best judgement in determining fair use. For
                        example, it may be okay for you to use the data for teaching a class, demoing a method in a blog post, or other
                        non-commercial purposes. Some of our competitions identify themselves as open-source and are meant to foster
                        research, collaboration, and continued analysis by the data science community.{' '}
                      </p>
                      <p className="contact-sub-para-child">
                        If you&apos;re looking at a non-competition dataset on kaggle.com/datasets, the user who published a dataset may
                        have specified an explicit license for the dataset (displayed below the dataset&apos;s description).{' '}
                      </p>
                      <p className="contact-sub-para-child">
                        Kaggle is neutral platform in hosting competitions for their Sponsors. Protections under copyright law can vary
                        based on the nature of data, contractual obligations, and your jurisdiction. As a result, we are not able to approve
                        individual uses of data on a case-by-case basis. Copyright or usage questions should be directed to your legal
                        counsel. You may post usage enquiries in the respective competition&apos;s forum, but we can not guarantee an
                        official response from the Sponsor.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValThirtyNine(!valThirtyNine)}
                    onKeyPress={() =>  setValThirtyNine(!valThirtyNine)}>
                    <div className={`arrow-right-img  ${valThirtyNine ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I was removed from a competition</h5>
                  </div>
                  <div className={`subquery-container ${valThirtyNine ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You were likely removed from the leaderboard and banned by Kaggle&apos;s Compliance Team, which is in charge of
                        enforcing the rules and ensuring fairness among competitors on Kaggle&apos;s platform. One of the main principles is
                        that each participant has only 1 account and never shares code privately. They have monitored the behavior and
                        submissions of all members of your team and made a determination. Please use the compliance form if you believe this
                        was unjustified.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFourty(!valFourty)}
                onKeyPress={() => setValFourty(!valFourty)}
              >
                <h5 className="query-title">I have a question about an old competition</h5>
              </div>
              <div className={`subquery-container ${valFourty ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyOne(!valFourtyOne)}
                    onKeyPress={() =>  setValFourtyOne(!valFourtyOne)}>
                    <div className={`arrow-right-img  ${valFourtyOne ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Release private labels after competition end</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyOne ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        We do not make the solution available for past competitions in order to leave past competitions open as live
                        benchmark data sets
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyTwo(!valFourtyTwo)}
                    onKeyPress={() =>  setValFourtyTwo(!valFourtyTwo)}>
                    <div className={`arrow-right-img  ${valFourtyTwo ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Can I use this competition data for an outside project?</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyTwo ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para-child">
                        Each competition has a Rules page, which may or may not specify explicit rules about data usage. If the competition
                        rules prohibit use outside of the competition, then you may not use the data outside the competition.
                      </p>
                      <p className="contact-sub-para-child">
                        If the rules do not specify usage restrictions, we ask that you use your best judgement in determining fair use. For
                        example, it may be okay for you to use the data for teaching a class, demoing a method in a blog post, or other
                        non-commercial purposes. Some of our competitions identify themselves as open-source and are meant to foster
                        research, collaboration, and continued analysis by the data science community.
                      </p>
                      <p className="contact-sub-para-child">
                        If you&apos;re looking at a non-competition dataset on kaggle.com/datasets, the user who published a dataset may
                        have specified an explicit license for the dataset (displayed below the dataset&apos;s description).
                      </p>
                      <p className="contact-sub-para-child">
                        Kaggle is neutral platform in hosting competitions for their Sponsors. Protections under copyright law can vary
                        based on the nature of data, contractual obligations, and your jurisdiction. As a result, we are not able to approve
                        individual uses of data on a case-by-case basis. Copyright or usage questions should be directed to your legal
                        counsel. You may post usage enquiries in the respective competition&apos;s forum, but we can not guarantee an
                        official response from the Sponsor.
                      </p>
                      <p className="contact-sub-para-child">
                        Each competition has a Rules page, which may or may not specify explicit rules about data usage. If the competition
                        rules prohibit use outside of the competition, then you may not use the data outside the competition.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyThree(!valFourtyThree)}
                    onKeyPress={() =>  setValFourtyThree(!valFourtyThree)}>
                    <div className={`arrow-right-img  ${valFourtyThree ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">The data for this competition appears to be missing</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyThree ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        At the request of that competition&apos;s host, we no longer offer data for that competition. Consider trying
                        another competition instead:
                      </p>
                      <div className="button first medium">
                        <div className="button-content">Competitions</div>
                      </div>
                      <p className="contact-sub-para">or an open dataset</p>
                      <div className="button first medium">
                        <div className="button-content">Datasets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFourtyFour(!valFourtyFour)}
                onKeyPress={() => setValFourtyFour(!valFourtyFour)}
              >
                <h5 className="query-title">I have a question about a Community competition</h5>
              </div>
              <div className={`subquery-container ${valFourtyFour ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyFive(!valFourtyFive)}
                    onKeyPress={() =>  setValFourtyFive(!valFourtyFive)}>
                    <div className={`arrow-right-img  ${valFourtyFive ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I want to extend my competition</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyFive ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        If the competition has already ended, you will need to setup a new competition. If the competition is still active
                        you can change the deadline by going to: Your competition &gt; Host &gt; Settings &gt; Deadline
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtySix(!valFourtySix)}
                    onKeyPress={() =>  setValFourtySix(!valFourtySix)}>
                    <div className={`arrow-right-img  ${valFourtySix ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I need to upload a new solution file and rescore the competition</h5>
                  </div>
                  <div className={`subquery-container ${valFourtySix ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can upload a new solution file, but you cannot rescore a competition on your own. Please upload a new solution
                        file and the contact support. An administrator can rescore your competition. Students’ new submissions will be
                        scored against the new solution file
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtySeven(!valFourtySeven)}
                    onKeyPress={() =>  setValFourtySeven(!valFourtySeven)}>
                    <div className={`arrow-right-img  ${valFourtySeven ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I&apos;d like to change my metric</h5>
                  </div>
                  <div className={`subquery-container ${valFourtySeven ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Unfortunately, we do not support metric changes after a competition has launched.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyEight(!valFourtyEight)}
                    onKeyPress={() =>  setValFourtyEight(!valFourtyEight)}>
                    <div className={`arrow-right-img  ${valFourtyEight ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I need some assistance setting up my competition</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyEight ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Kaggle Community is a no-cost, self-service tool. We aren’t able to provide hands on support for setting up or
                        troubleshooting your competition. Be sure to visit the Community Overview page, which includes an FAQ and dicussion
                        forums to help with your competition. If you are experiencing an issue that you believe is affecting the entire
                        platform, please let us know.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFourtyNine(!valFourtyNine)}
                    onKeyPress={() =>  setValFourtyNine(!valFourtyNine)}>
                    <div className={`arrow-right-img  ${valFourtyNine ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I’d like to reuse a previous competition</h5>
                  </div>
                  <div className={`subquery-container ${valFourtyNine ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Right now, you are not able to clone a past competition. You’ll need to start setup from the beginning, but now that
                        you’ve done all the testing and data cleaning it should go quickly!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFifty(!valFifty)}
                    onKeyPress={() =>  setValFifty(!valFifty)}>
                    <div className={`arrow-right-img  ${valFifty ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I’m having trouble with a Team/Forming a Team</h5>
                  </div>
                  <div className={`subquery-container ${valFifty ? 'null' : 'hide'} `}>
                    <div className="contact-subqueries">
                      <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFiftyOne(!valFiftyOne)}
                    onKeyPress={() =>  setValFiftyOne(!valFiftyOne)}>
                        <div className={`arrow-right-img  ${valFiftyOne ? 'rotateX' : ''}`}>
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">How to Form a Team</h5>
                      </div>
                      <div className={`subquery-container ${valFiftyOne ? 'null' : 'hide'} `}>
                        <div className="contact-subqueries">
                          <p className="contact-sub-para-child">
                            You can view the Team tab once you have accepted the rules. Doing this will automatically create a single-user
                            team of yourself, where you can take further actions to merge with others by going to &quot;More&quot; then
                            &quot;Team&quot;.
                          </p>
                          <p className="contact-sub-para-child">
                            To invite a single person, have them accept the rules which will create a team for them. Then you can merge with
                            that single-user team.
                          </p>
                          <p className="contact-sub-para-child">
                            Note that your combined team must follow all rules (e.g. daily submission limits), and one ineligible team
                            members disqualifies the whole team.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contact-subqueries">
                      <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFiftyTwo(!valFiftyTwo)}
                    onKeyPress={() =>  setValFiftyTwo(!valFiftyTwo)}>
                        <div className={`arrow-right-img  ${valFiftyTwo ? 'rotateX' : ''}`}>
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">We Missed the Team Merger Deadline</h5>
                      </div>
                      <div className={`subquery-container ${valFiftyTwo ? 'null' : 'hide'} `}>
                        <div className="contact-subqueries">
                          <p className="contact-sub-para-child">
                            Kaggle is unfortunately not able to make rules exceptions when teams miss the merger deadline. In the future, be
                            sure to send merge requests far enough in advance for recipients to respond to them in a timely manner. Also
                            note that merge requests should be read thoroughly and the steps completely followed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contact-subqueries">
                      <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFiftyThree(!valFiftyThree)}
                    onKeyPress={() =>  setValFiftyThree(!valFiftyThree)}>
                        <div className={`arrow-right-img  ${valFiftyThree ? 'rotateX' : ''}`}>
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">Removing a Team member</h5>
                      </div>
                      <div className={`subquery-container ${valFiftyThree ? 'null' : 'hide'} `}>
                        <div className="contact-subqueries">
                          <p className="contact-sub-para-child">
                            Sorry, but it is against the rules to remove team members once a team has been formed. We ask that you be
                            careful about joining with someone else in the future if you suspect that they may become inactive at any point.
                            Note that it is also against the rules to create a second account, and any additional accounts will be
                            disqualified from the competition results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contact-subqueries">
                      <div className="contact-subquery"  role="button"
                    tabIndex={0}
                    onClick={() => setValFiftyFour(!valFiftyFour)}
                    onKeyPress={() =>  setValFiftyFour(!valFiftyFour)}>
                        <div className={`arrow-right-img  ${valFiftyFour ? 'rotateX' : ''}`}>
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">Why can&apos;t I add a user to my team?</h5>
                      </div>
                      <div className={`subquery-container ${valFiftyFour ? 'null' : 'hide'} `}>
                        <div className="contact-subqueries">
                          <p className="contact-sub-para">
                            The following are reasons a particular user may not be able to be added to your team:
                          </p>
                          <ul>
                            <li>
                              The user has not made a submission to the competition. Note that it must be the competition associated with
                              the current team.
                            </li>
                            <li>You are at the maximum size for a team in this competition</li>
                            <li>
                              If the user was added to the team, the team would exceed the competition&apos;s submission cap. (The daily
                              submission limits apply to the team, so a 3-member team will have the same submission limits as a 1-member
                              team.)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFiftyFive(!valFiftyFive)}
                onKeyPress={() => setValFiftyFive(!valFiftyFive)}
              >
                <h5 className="query-title">I&apos;m interested in hosting a competition</h5>
              </div>
              <div className={`subquery-container ${valFiftyFive ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    If you would like to learn more about hosting a commercial competition (for companies looking to solve data science
                    problems), please review here and submit a request for more information:
                  </p>
                  <div className="button first medium">
                    <div className="button-content">Featured Overview</div>
                  </div>
                  <p className="contact-sub-para">
                    If you are looking to host a Kaggle Community competition (a no-cost, self-service tool that we do not provide support
                    for) please review here:
                  </p>
                  <div className="button first medium">
                    <div className="button-content">Community Overview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFiftySix(!valFiftySix)}
                onKeyPress={() => setValFiftySix(!valFiftySix)}
              >
                <h5 className="query-title">I&apos;d like to report cheating in a Competition</h5>
              </div>
              <div className={`subquery-container ${valFiftySix ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Cheating is not taken lightly. We monitor compliance during competitions, and spend a considerable amount of time at the
                    close of each competition to review suspect activity and to remove people who have cheated from the leaderboard. When we
                    believe we have sufficient evidence, we take action through removal, or even an account ban
                  </p>
                  <p className="contact-sub-para">
                    We also monitor and investigate moderation reports (plagiarism, voting rings, etc.) throughout the week, and take action
                    as appropriate, which includes removing medals as well as full-out banning accounts.
                  </p>
                  <p className="contact-sub-para">
                    We sometimes hear feedback that the anti-cheating actions we take don&apos;t get enough visibility. There are a number
                    of reasons for this, but a key reason is that we want to put as much focus as possible on those things that make Kaggle
                    great. Please know, though, that we work hard behind the scenes to keep Kaggle professional and fair to all.
                  </p>
                  <p className="contact-sub-para">
                    If you believe you have evidence that suggests a team violated competition rules, please report it to the Competitions
                    Compliance Team for a thorough investigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Datasets</h3>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFiftySeven(!valFiftySeven)}
                onKeyPress={() => setValFiftySeven(!valFiftySeven)}
              >
                <h5 className="query-title">Using data for a project/questions about data license</h5>
              </div>
              <div className={`subquery-container ${valFiftySeven ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Our datasets include a license that details how the data can be used. If you have any further questions, you may get
                    more answers by asking the dataset author by clicking the &quot;Discussions&quot; tab on the dataset&apos;s page, and
                    creating a discussion there about your question.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFiftyEight(!valFiftyEight)}
                onKeyPress={() => setValFiftyEight(!valFiftyEight)}
              >
                <h5 className="query-title">Using data for a project/questions about data license</h5>
              </div>
              <div className={`subquery-container ${valFiftyEight ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You can delete your dataset by going to the settings tab on the page for the dataset. You&apos;ll see an option to
                    delete your dataset there.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Notebooks</h3>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValFiftyNine(!valFiftyNine)}
                onKeyPress={() => setValFiftyNine(!valFiftyNine)}
              >
                <h5 className="query-title">I’d like to delete my dataset</h5>
              </div>
              <div className={`subquery-container ${valFiftyNine ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Please contact us to help troubleshoot. It will help narrow down the problem if you provide a bit of information.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixty(!valSixty)}
                onKeyPress={() => setValSixty(!valSixty)}
              >
                <h5 className="query-title">I&apos;d like to request a package/library</h5>
              </div>
              <div className={`subquery-container ${valSixty ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Thank you for the suggestion! We&apos;re always interested to hear about packages and modules that would make great
                    additions to our notebooks environment. You can request new packages by submitting a pull request:
                  </p>
                  <p className="contact-sub-para">
                    Python -{' '}
                    <a href="https://github.com/Kaggle/docker-python" className="lined">
                      https://github.com/Kaggle/docker-python
                    </a>
                  </p>
                  <p className="contact-sub-para">
                    R -{' '}
                    <a href="https://github.com/Kaggle/docker-rstats" className="lined">
                      https://github.com/Kaggle/docker-rstats
                    </a>
                  </p>
                  <p className="contact-sub-para">Or, you can post your request on our Product Feedback forum.</p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyOne(!valSixtyOne)}
                onKeyPress={() => setValSixtyOne(!valSixtyOne)}
              >
                <h5 className="query-title">I need to delete my notebook</h5>
              </div>
              <div className={`subquery-container ${valSixtyOne ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You can delete the notebook from your{' '}
                    <a href="#" className="lined">
                      notebook listing
                    </a>{' '}
                    . Click the trash can icon next to the notebook you want to delete.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Privacy & Security</h3>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyTwo(!valSixtyTwo)}
                onKeyPress={() => setValSixtyTwo(!valSixtyTwo)}
              >
                <h5 className="query-title">I want you to delete my personal data</h5>
              </div>
              <div className={`subquery-container ${valSixtyTwo ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Please click on &quot;I&apos;d like to delete my account&quot; in the menu above for more information.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyThree(!valSixtyThree)}
                onKeyPress={() => setValSixtyThree(!valSixtyThree)}
              >
                <h5 className="query-title">I want to delete content I&apos;ve created on Kaggle</h5>
              </div>
              <div className={`subquery-container ${valSixtyThree ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You can delete the datasets, notebooks, and forum posts you&apos;ve created on kaggle.com. You can delete your dataset
                    by going to the settings tab on the page for the dataset. You&apos;ll see an option to delete your dataset there. You
                    can delete your notebook by going to your notebook listing and clicking the trash can icon next to the notebook you want
                    to delete. You can delete comments and topics by clicking the Options link on the post and selecting &quot;Delete&quot;
                    in the list of options that are shown.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyFour(!valSixtyFour)}
                onKeyPress={() => setValSixtyFour(!valSixtyFour)}
              >
                <h5 className="query-title">I want you to delete content that someone else created</h5>
              </div>
              <div className={`subquery-container ${valSixtyFour ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Under certain circumstances, we may delete data that someone else has created at your request. For example, this could
                    happen if someone has posted personal information about you without your permission. We also have a Copyright Dispute
                    Policy and will respond appropriately. Please contact us using the form below and we will respond.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyFive(!valSixtyFive)}
                onKeyPress={() => setValSixtyFive(!valSixtyFive)}
              >
                <h5 className="query-title">I want a copy of all my data</h5>
              </div>
              <div className={`subquery-container ${valSixtyFive ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You may request a copy of the data Kaggle has associated with your account, which you will receive in a machine-readable
                    format. Please contact us using the form below and we will respond
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtySix(!valSixtySix)}
                onKeyPress={() => setValSixtySix(!valSixtySix)}
              >
                <h5 className="query-title">I want to exercise my rights under the EU General Data Protection Regulation</h5>
              </div>
              <div className={`subquery-container ${valSixtySix ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    If you are an EU citizen, you have a number of rights under the EU General Data Protection Regulation. These include the
                    right to: ask what personal data is being processed about you and why; access your personal data that we process;
                    rectify your personal data if it&apos;s not accurate; withdraw consent to activities you have previously consented to;
                    object to the processing of your personal data; ask for deletion of your personal data; and ask to receive a copy of
                    your personal data. You can find information on how to exercise some of these rights on this support page. If you would
                    like to exercise any other such rights, please contact us using the form below.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtySeven(!valSixtySeven)}
                onKeyPress={() => setValSixtySeven(!valSixtySeven)}
              >
                <h5 className="query-title">
                  I am under the age of 18 (or the age of contractual majority in my country) and want to use Kaggle or enter into Kaggle
                  competitions
                </h5>
              </div>
              <div className={`subquery-container ${valSixtySeven ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    If you are between the ages of 13 and 16 years old, you may not use kaggle.com until Kaggle has received parental
                    consent for your use of the website. Your parent or guardian will have to create a Kaggle account and accept
                    Kaggle&apos;s Privacy Policy and Terms of Use. Then, your parent or guardian will need to fill out this parental consent
                    form online that gives their consent to your general use of Kaggle.com. After that, you may create a Kaggle account. If
                    you have any questions about this process, please contact us using the form below
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyEight(!valSixtyEight)}
                onKeyPress={() => setValSixtyEight(!valSixtyEight)}
              >
                <h5 className="query-title">
                  I&apos;m a parent or guardian of a child under 13 and found out that my child has been using Kaggle
                </h5>
              </div>
              <div className={`subquery-container ${valSixtyEight ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Kaggle does not knowingly collect or maintain personal information from children under 13 years old. If you are a parent
                    or guardian and discover that your child under the age of 13 has signed up for a user account on kaggle.com, then you
                    may request that Kaggle delete that child&apos;s personal information from its systems. Please contact us using the form
                    below
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSixtyNine(!valSixtyNine)}
                onKeyPress={() => setValSixtyNine(!valSixtyNine)}
              >
                <h5 className="query-title">I have questions about the Privacy Policy or want to contact your Data Protection Office</h5>
              </div>
              <div className={`subquery-container ${valSixtyNine ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    If you have any questions about the Privacy Policy, please contact us using the form below or send an email to{' '}
                    <a href="#" className="lined">
                      privacy@kaggle.com
                    </a>{' '}
                    . If you would like to contact our DPO, please send an email to{' '}
                    <a href="#" className="lined">
                      data-protection-office@kaggle.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventy(!valSeventy)}
                onKeyPress={() => setValSeventy(!valSeventy)}
              >
                <h5 className="query-title">I received an inappropriate message from another user</h5>
              </div>
              <div className={`subquery-container ${valSeventy ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Please let us know the issue so we can handle it. You can also disable direct messages from other users on{' '}
                    <a href="#" className="lined">
                      your notification settings page
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-all-query">
            <div className="contact-title">
              <h3 className="contact-subtitle">Other</h3>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventyOne(!valSeventyOne)}
                onKeyPress={() => setValSeventyOne(!valSeventyOne)}
              >
                <h5 className="query-title">I have a media/press/appearance inquiry</h5>
              </div>
              <div className={`subquery-container ${valSeventyOne ? 'null' : 'hide'} `}>
                <div className="contact-subqueries"></div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventyTwo(!valSeventyTwo)}
                onKeyPress={() => setValSeventyTwo(!valSeventyTwo)}
              >
                <h5 className="query-title">Kaggle Logos and Brand Guidelines</h5>
              </div>
              <div className={`subquery-container ${valSeventyTwo ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    For interest in using Kaggle brand features (logos, design, name, etc) for corporate or personal purposes, please refer
                    to the Kaggle{' '}
                    <a href="#" className="lined">
                      Brand Guidelines
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventyThree(!valSeventyThree)}
                onKeyPress={() => setValSeventyThree(!valSeventyThree)}
              >
                <h5 className="query-title">Feature Request/Enhancement</h5>
              </div>
              <div className={`subquery-container ${valSeventyThree ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    We’d love to hear your feedback! Please post your request on our{' '}
                    <a href="#" className="lined">
                      Product Feedback
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventyFour(!valSeventyFour)}
                onKeyPress={() => setValSeventyFour(!valSeventyFour)}
              >
                <h5 className="query-title">I found an issue with the website</h5>
              </div>
              <div className={`subquery-container ${valSeventyFour ? 'null' : 'hide'} `}>
                <div className="contact-subqueries"></div>
              </div>
            </div>
            <div className="contact-queries">
               <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValSeventyFive(!valSeventyFive)}
                onKeyPress={() => setValSeventyFive(!valSeventyFive)}
              >
                <h5 className="query-title">Where else can I find Kaggle&apos;s community guidelines?</h5>
              </div>
              <div className={`subquery-container ${valSeventyFive ? 'null' : 'hide'} `}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You can view this on our{' '}
                    <a href="#" className="lined">
                      Community Guidelines
                    </a>{' '}
                    page
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
