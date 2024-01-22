import './Contact.css';
import img1 from '../../assets/arrow_right.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Contact() {
  const [value, setValue] = useState(false);
  const [valOne, setValueOne] = useState(false);
  const [valueTwo, setValueTwo] = useState(false);
  const [valueThree, setValueThree] = useState(false);
  const [valueFour, setValueFour] = useState(false);
  const [valueFive, setValueFive] = useState(false);
  const [valueSix, setValueSix] = useState(false);
  const [valueSeven, setValueSeven] = useState(false);
  const [valueEight, setValueEight] = useState(false);
  const [valueNine, setValueNine] = useState(false);
  const [valueTen, setValueTen] = useState(false);
  const [valueEleven, setValueEleven] = useState(false);
  const [valuetTwelve, setValuetTwelve] = useState(false);
  const [valueThirteen, setValueThirteen] = useState(false);
  const [valueFourteen, setValueFourteen] = useState(false);
//   const [] = useState(false);
 

  // const [val,setVal] = useState({
  //     first:false,second:false,third:false,fourth:false,fifth:false,sixth:false,seventh:false,eight:false,nineth:false,tenth:false,eleven:false,twelve:false,thirteen:false,forteen:false,fifteen:false,sixteen:false,seventeen:false,eighteen:false,nineteen:false,twenty:false,twoone:false,twotwo:false,twothree:false,twofour:false,twofive:false,twosix:false,twoseven:false,twoeight:false,twonine:false,thirty:false,
  // });
  // console.log(value);

  // const [open,setOpen] = useState(false);
  // const handleClick=(e)=>{
  //     setValue(e.target.value);
  //     setOpen(!open);
  //     console.log(val);
  // }
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
              {/* <div className={`contact-query `} role="button" tabIndex={0} id={"1"}  onClick={()=>setValue("1")} onKeyPress={(e)=>setValue(e.target.id)} >
                                <h5 className="query-title" id={"1"}>
                                    I cannot activate my account
                                </h5>
                            </div>
                            <div className={`subquery-container ${val==="1" ? null:"hide"}`}>
                                <div className="contact-subqueries">
                                    <div className="contact-subquery" role="button" tabIndex={0} value={"2"} onClick={(e)=>onClicked(e)} onKeyPress={(e)=>onClicked(e)} >
                                        <div className="arrow-right-img">
                                            <img src={img1} alt="arrow" />
                                        </div> */}
              <div
                className={`contact-query `}
                role="button"
                tabIndex={0}
                onClick={() => setValue(!value)}
                onKeyPress={() => setValue(!value)}
              >
                <h5 className="query-title">I cannot activate my account</h5>
              </div>
              <div className={`subquery-container ${value ? 'null' : 'hide'}`} style={{ display: '' }}>
                <div className="contact-subqueries">
                  <div
                    className="contact-subquery"
                    role="button"
                    tabIndex={0}
                    onClick={() => setValue(!value)}
                    onKeyPress={() => setValue(!value)}
                  >
                    <div className={`arrow-right-img  ${value ? 'rotateX' : ''}`}>
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I cannot verify my phone number, I haven&apos;t received the code</h5>
                  </div>
                  <div className={`subquery-container ${value ? 'null' : 'hide'} `}>
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
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Why do I need to phone verify my account?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Before using certain parts of Kaggle, we ask all users to verify their account via their mobile phone number. Kaggle
                        requires this verification to detect, prevent, and otherwise address fraud and abuse issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What will you do with my phone number?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What will it cost to phone verify my account?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The cost for a text message will vary with your plan and provider, but will likely be your standard text message
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">What if I don&apos;t want to provide my number?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The cost for a text message will vary with your plan and provider, but will likely be your standard text message
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I can&apos;t send a code to the phone number I entered</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Participation on Kaggle is completely voluntary and it is your choice to verify your account. Unverified accounts
                        can still use many parts of Kaggle, including to make submissions to Getting Started competitions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I cannot verify my phone number, I have no phone</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        The phone number can&apos;t be verified. You need to find an alternative phone number to verify with Kaggle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I am having problems with Captcha</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Unfortunately, we require all participants verify via SMS. If you do not have a phone available we are not able to
                        verify your account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I did not receive email verification</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Please use the form below to resend your email verification</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Duplicate Phone Number</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I&apos;d like to change my...</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Username</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Unfortunately at this time we do not support changing usernames. If you have extenuating circumstances, you can use
                        the following form
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Display Name</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can change the name displayed on your profile by going to your profile, clicking on the &qout;Account&qout; tab,
                        and then changing your &qout;Display Name&qout;.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Email Address</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        You can change your email via the More &gt; Account tab in your profile. Click the &qout;Edit&qout; button in the
                        upper right corner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Profile Picture</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Password</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have received a warning</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">About Warnings</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Review our enforcement and guidelines on our community guidelines page.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Appeal a Warning</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Disagree with the warning we issued?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">I am blocked from accessing my account?</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Suspensions and Bans</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Review our enforcement and guidelines on our community guidelines page.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Cheating</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Download Frequency</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Our servers detected too many requests in a given period of time and automatically banned your account. If
                        you&apos;re using a crawler or a download manager, we suggest that you adjust the settings to slow that frequency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Inquire About Account Status</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">What&apos;s my account status?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">I&apos;d like to delete my account</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I&apos;d like to withdraw my account</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I am having problems changing my login method</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">Where do I start?</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have a question about a current competition</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Why can’t I join a competition?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I’m having trouble with a Team/Forming a Team</h5>
                  </div>
                  <div className="contact-subqueries">
                    <div className="contact-subquery">
                      <div className="arrow-right-img">
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">How to Form a Team</h5>
                    </div>
                    <div className="subquery-container" style={{ display: 'none' }}>
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
                    <div className="contact-subquery">
                      <div className="arrow-right-img">
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">We Missed the Team Merger Deadline</h5>
                    </div>
                    <div className="subquery-container" style={{ display: 'none' }}>
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
                    <div className="contact-subquery">
                      <div className="arrow-right-img">
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">Removing a Team member</h5>
                    </div>
                    <div className="subquery-container" style={{ display: 'none' }}>
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
                    <div className="contact-subquery">
                      <div className="arrow-right-img">
                        <img src={img1} alt="arrow" />
                      </div>
                      <h5 className="query-title">Why can&apos;t I add a user to my team?</h5>
                    </div>
                    <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I need help with my code/entry for a competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Question on specific competition rules</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Can I use this competition data for an outside project?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I was removed from a competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have a question about an old competition</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Release private labels after competition end</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        We do not make the solution available for past competitions in order to leave past competitions open as live
                        benchmark data sets
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">Can I use this competition data for an outside project?</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">The data for this competition appears to be missing</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have a question about a Community competition</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I want to extend my competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        If the competition has already ended, you will need to setup a new competition. If the competition is still active
                        you can change the deadline by going to: Your competition {'>'} Host {'>'} Settings {'>'} Deadline
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I need to upload a new solution file and rescore the competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I&apos;d like to change my metric</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">Unfortunately, we do not support metric changes after a competition has launched.</p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I need some assistance setting up my competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
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
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I&apos;m a host and I’d like to reuse a previous competition</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <p className="contact-sub-para">
                        Right now, you are not able to clone a past competition. You’ll need to start setup from the beginning, but now that
                        you’ve done all the testing and data cleaning it should go quickly!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-subqueries">
                  <div className="contact-subquery">
                    <div className="arrow-right-img">
                      <img src={img1} alt="arrow" />
                    </div>
                    <h5 className="query-title">I’m having trouble with a Team/Forming a Team</h5>
                  </div>
                  <div className="subquery-container" style={{ display: 'none' }}>
                    <div className="contact-subqueries">
                      <div className="contact-subquery">
                        <div className="arrow-right-img">
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">How to Form a Team</h5>
                      </div>
                      <div className="subquery-container" style={{ display: 'none' }}>
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
                      <div className="contact-subquery">
                        <div className="arrow-right-img">
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">We Missed the Team Merger Deadline</h5>
                      </div>
                      <div className="subquery-container" style={{ display: 'none' }}>
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
                      <div className="contact-subquery">
                        <div className="arrow-right-img">
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">Removing a Team member</h5>
                      </div>
                      <div className="subquery-container" style={{ display: 'none' }}>
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
                      <div className="contact-subquery">
                        <div className="arrow-right-img">
                          <img src={img1} alt="arrow" />
                        </div>
                        <h5 className="query-title">Why can&apos;t I add a user to my team?</h5>
                      </div>
                      <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I&apos;m interested in hosting a competition</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I&apos;d like to report cheating in a Competition</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">Using data for a project/questions about data license</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">Using data for a project/questions about data license</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I’d like to delete my dataset</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Please contact us to help troubleshoot. It will help narrow down the problem if you provide a bit of information.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">I&apos;d like to request a package/library</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I need to delete my notebook</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I want you to delete my personal data</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    Please click on &quot;I&apos;d like to delete my account&quot; in the menu above for more information.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">I want to delete content I&apos;ve created on Kaggle</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I want you to delete content that someone else created</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I want a copy of all my data</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries">
                  <p className="contact-sub-para">
                    You may request a copy of the data Kaggle has associated with your account, which you will receive in a machine-readable
                    format. Please contact us using the form below and we will respond
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">I want to exercise my rights under the EU General Data Protection Regulation</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">
                  I am under the age of 18 (or the age of contractual majority in my country) and want to use Kaggle or enter into Kaggle
                  competitions
                </h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">
                  I&apos;m a parent or guardian of a child under 13 and found out that my child has been using Kaggle
                </h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have questions about the Privacy Policy or want to contact your Data Protection Office</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I received an inappropriate message from another user</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I have a media/press/appearance inquiry</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries"></div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">Kaggle Logos and Brand Guidelines</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">Feature Request/Enhancement</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
              <div className="contact-query">
                <h5 className="query-title">I found an issue with the website</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
                <div className="contact-subqueries"></div>
              </div>
            </div>
            <div className="contact-queries">
              <div className="contact-query">
                <h5 className="query-title">Where else can I find Kaggle&apos;s community guidelines?</h5>
              </div>
              <div className="subquery-container" style={{ display: 'none' }}>
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
