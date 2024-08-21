import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Social from "../../components/social-icon/Social";
import "./Donation.css"
import pujaImage from "../../assets/images/pujaImage.jpg";
const Donation = () => {
  return (
    <>
      <Navbar />
      <Social />

      <div
        className="about-background"
        style={{ backgroundImage: `url(${pujaImage})` }}
      ></div>
      <div>
        <marquee behavior="" direction="">
          🚩
          <span className="about-marquee" style={{color: 'white'}}>
            Shri Saibaba Sansthan Trust, Shirdi
          </span>
          🚩
        </marquee>
        <div className="about-path">
          <span> Home &#9654; Online Services &#9654; Donation</span>
        </div>
        <div className="places-head">
          <h1>Donation</h1>
        </div>
      </div>

      <div className="Donation-Section">
        <main className="Donation_main">
          <section>
            <p style={{ color: "rgb(0 0 0 / 70%)", fontSize: "15px" }}>
              {" "}
              Sansthan accepts donation from devotees in various modes like
              Cash, Cheque, Demand Draft, Money Order, Debit/Credit Card,
              Foreign Currency and In-kind. Devotees can get the donation
              receipt, Udi Prasad and special privileges by offering donations
              at Sansthan Donation Counters in the Temple premises, Information
              Centers at 4 different cities, by post, Online portal & Android
              Mobile App and direct Bank to Bank transfers. Also, Devotees can
              donate anonymously through Donation Boxes (Hundi) in the Sansthan
              premises.
            </p>
            <h2 style={{ color: "#b15203" }}>
              Various modes of Donation available:
            </h2>
            <div className="mode">
              <h3>A) Donation Counters and Information Centers</h3>
              <p style={{ color: "rgb(0 0 0 / 70%)", fontSize: "15px" }}>
                Around 11 computerized Donation counters are available in Temple
                premises and 4 Donation counters (Information Centers) are
                available at Mumbai, Chennai, Hyderabad and Bangalore, for
                detail address of this office visit Information Centers
              </p>
              <ul>
                <li style={{ color: "rgb(0 0 0 / 70%)", fontSize: "15px" }}>
                  Donation counters accept Cash, Cheque, Demand Draft,
                  Debit/Credit Card, Foreign Currency and kind donations.
                </li>
                <li style={{ color: "rgb(0 0 0 / 70%)", fontSize: "15px" }}>
                  The Donation receipts for Cash and kind donations are given
                  immediately and for other kind of donations, the donation
                  receipts are sent by post within 15 days.
                </li>
              </ul>
              <div className="note">
                <ul>
                  <p>Note:</p>
                  <li>
                    A devotee can donate only Rs-1, 99,999/- (Rs.One Lakh ninety
                    nine thousands Nine hundred ninety-nine) in Cash in single
                    day.
                  </li>
                  <li>
                    Section 80G of Income Tax act will not be applicable for
                    Cash donation more than 2000/-.
                  </li>
                  <li>
                    Devotee donating in foreign Currency have to submit
                    self-attested Xerox copy of Passport (as per FCRA rules).
                  </li>
                </ul>
              </div>
            </div>
            <div className="mode">
              <h3>B) Donation by Post</h3>
              <p>
                Cheque, Money Order, DD or traveler’s cheque should be drawn in
                the favor of Shri Saibaba Sansthan Trust, Shirdi and should send
                on following address:
              </p>
              <div className="address">
                <p>
                  Chief Executive Officer
                  <br />
                  Shri Saibaba Sansthan Trust, Shirdi
                  <br />
                  Tal. Rahata, District Ahmednagar.
                  <br />
                  Shirdi 423 109.
                </p>
              </div>
              <p>
                Receipt of the donation by post are sent along with holy
                UDI-Prasad on devotees address within 15 days.
              </p>
            </div>
            <div className="mode">
              <h3>C) Bank to Bank Transfer</h3>
              <div className="bank-transfer-container">
                <div className="bank-transfer">
                  <h4>Direct Bank Transfer (Indian Currency)</h4>
                  <div className="bank-info">
                    <p>
                      <strong>Account Holder:</strong> SHRI SAIBABA SANSTHAN
                      TRUST, SHIRDI
                    </p>
                    <p>
                      <strong>Bank & Branch:</strong> State Bank of India,
                      Shirdi
                    </p>
                    <p>
                      <strong>Account Number:</strong> 30026657678
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> SBIN0005160
                    </p>
                  </div>
                </div>
                <div className="bank-transfer">
                  <h4>Direct Bank Transfer (Foreign Currency)</h4>
                  <div className="bank-info">
                    <p>
                      <strong>Account Holder:</strong> SHRI SAIBABA SANSTHAN
                      TRUST, SHIRDI
                    </p>
                    <p>
                      <strong>Bank & Branch:</strong> State Bank of India, Main
                      Branch, New Delhi
                    </p>
                    <p>
                      <strong>FCRA Savings Bank Account No.:</strong>{" "}
                      00000040257978885
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> SBIN0000691
                    </p>
                    <p>
                      <strong>Swift Code:</strong> SBININBB104
                    </p>
                  </div>
                </div>
              </div>
              <div className="note">
                <p>
                  Note - After donating through Direct Bank Transfer, Devotee
                  can mail to{" "}
                  <a href="mailto:chdd@sai.org.in">chdd@sai.org.in</a>,{" "}
                  <a href="mailto:obt@sai.org.in">obt@sai.org.in</a> stating
                  details of donation like transaction details, donation head,
                  Name and Address for receiving donation receipt with Holy Udi
                  within 15 days.
                </p>
              </div>
            </div>
            <div className="mode">
              <h3>D) Online Donation</h3>
              <p>
                You can make a donation using your Credit and Debit Card as well
                as your Internet Banking Accounts (Net banking) from the trust
                website{" "}
                <a
                  href="https://online.sai.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online.sai.org.in
                </a>{" "}
                and Android app. The donation receipts are sent within 15 days.
              </p>
            </div>
            <div className="button-container">
              <a
                href="https://online.sai.org.in"
                className="Donation-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#b15203" }}>Various Donation Funds:</h2>
            <div className="fund-category">
              <h3>Charity/Development Fund</h3>
              <div className="fund-block border">
                <h4>General Donation Fund</h4>
                <p>
                  This fund is utilized for providing various facilities to
                  Devotees.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Building Fund</h4>
                <p>
                  This fund is utilized for construction and maintenance of
                  buildings like Darshan Queue, Prasadalaya, and Accommodation,
                  etc.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Medical Fund</h4>
                <p>
                  Providing updated medical facilities to the needy patients at
                  affordable rates.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Education Fund</h4>
                <p>
                  Trust activities to provide advanced education facilities to
                  students from rural areas as well as Shirdi.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Annadan Fund</h4>
                <p>
                  Funds utilized for prasadalaya activity, free meals to
                  devotees, hospital patients, and students of deaf and dumb
                  schools.
                </p>
              </div>
            </div>
            <div className="fund-category">
              <h3>Religious Program Fund</h3>
              <div className="fund-block border">
                <h4>Abhishek Fund</h4>
                <p>
                  In presence of Sai Devotee, Abhishek Puja of Shri Saibaba is
                  performed daily. Pooja Material is supplied by the Sansthan
                  Trust. Donation is also accepted for this purpose.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Naivedyam Offering Fund</h4>
                <p>This fund is utilized for Shri Saibaba’s daily offering.</p>
              </div>
              <div className="fund-block border">
                <h4>Festival Fund</h4>
                <p>
                  Shri Ram Navami, Shri Guru Purnima and Dassara (Samadhi
                  Anniversary) are celebrated every year by Sansthan. Festival
                  fund is utilized for expenses incurred for it.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Kothi (Dhup Deep) Fund</h4>
                <p>
                  Pooja is performed daily in Samadhi Temple, Gurusthan,
                  Dwarkamai and Chavadi. This fund is utilized for said
                  activity.
                </p>
              </div>
              <div className="fund-block border">
                <h4>Shri Sai Satyavrata Puja Fund (Satya Narayana)</h4>
                <p>
                  Shri Sai Satyavrat puja is organized daily by the Trust. Pooja
                  Material is supplied by the Sansthan Trust. Donation is also
                  accepted for this purpose.
                </p>
              </div>
            </div>
            <div className="fund-category">
              <h3>Free Prasad Bhojan Scheme</h3>
              <div className="fund-block border">
                <h4>Prasadalaya Fund</h4>
                <p>
                  Under Bhojan Scheme devotee can donate Rs 50,000 or more for
                  free meals to devotee in Trust Prasadalaya. The Name of donor
                  devotee will be displayed on Donor Board for the date which
                  devotee books.
                </p>
              </div>
            </div>
            <div className="note">
              <p>
                Note: Donation received for the Charity/Donation Fund Category
                will only be applicable for deduction under section 80G of the
                Income Tax.
              </p>
            </div>
          </section>

          <section>
            <h2>Donor Privileges:</h2>
            <div className="privilege">
              <h3>Donation Amount: Rs.25,000 /- and above</h3>
              <p>
                <strong>Gifts:</strong> Shri Saicharitra Book, 3D Photo of Shri
                Saibaba
              </p>
              <p>
                <strong>Privileges:</strong> One time Free Darshan and Aarti
              </p>
              <div className="note">
                <ul>
                  <p>Note:</p>
                  <li>
                    If quota of Aarti is full on that day, same can be made
                    available on the next convenient day.
                  </li>
                  <li>
                    Donation privileges might change based on Sansthan Policy
                    decisions. For any information or clarification please do
                    email at <a href="mailto:obt@sai.org.in">obt@sai.org.in</a>,{" "}
                    <a href="mailto:chdd@sai.org.in">chdd@sai.org.in</a> or
                    contact on 02423-258742, 258741.
                  </li>
                </ul>
              </div>
            </div>
            <div className="button-container">
              <a
                href="https://online.sai.org.in"
                className="Donation-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
