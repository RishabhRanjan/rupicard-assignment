import icon from "./assets/icon.svg";
import "./App.css";
import bgVideo from "./assets/bg.mp4";
import cashbackImg from "./assets/one_percent_cashback.png";
import rewardsImg from "./assets/five_x_rewards.png";
import zeroMarkupImg from "./assets/forex_globe.png";
import cardImg from "./assets/new-card-6be156bfeab84ae2868374c544648e5e.webp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ background: "transparent" }}>
          <div className="header-layout">
            <div>
              <img src={icon} alt="rupicard-icon"></img>
            </div>
            <div
              className="btn"
              onClick={() => {
                window.open("https://rupicard.com/", "_blank");
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="home-body">
          <div className="card-holder">
            <div>
              <h1>
                <p>Build your</p> <p>CIBIL score</p> <p>with Rupicard</p>{" "}
              </h1>
              <p>India's #1 FD credit card</p>
              <div className="hide-md">
                <div className="number-pl">
                  <input type="text" placeholder="Enter Phone Number" />
                  <button type="submit">Apply now</button>
                </div>
                <div className="contact-box">
                  <input type="checkbox" id="agree-box" />
                  <label for="agree-box">
                    You agree to be contacted by Rupi Card over calls and SMS
                  </label>
                </div>
              </div>
            </div>
            <img src={cardImg} alt="credit cart" />
          </div>
          <video
            src={bgVideo}
            autoPlay
            playsInline
            className="bg"
            muted
            loop
          ></video>
        </div>
      </div>
      <div className="secondary-section">
        <div>
          <div>
            <p className="desc-text">
              <span className="bold-text">Earn 1% assured cashback</span> on
              your spends. Get
              <span className="bold-text"> 5X</span>
            </p>
            <p className="desc-text">
              <span className="bold-text">more value than cashback </span>at the
              Uni Store. Enjoy
            </p>
            <p className="desc-text">
              round the clock{" "}
              <span className="bold-text">Whatsapp support</span>. And it's
            </p>
            <p className="desc-text">
              <span className="bold-text">lifetime free</span>; no joining fee,
              no annual charges.
            </p>
          </div>
          <div className="anim-align">
            <div className="linear-circle">
              <div>↓</div>
            </div>
          </div>
          <div className="content-box">
            <p className="desc-text">
              <span className="bold-text">
                1% assured cashback on your spends.
              </span>
              The more you spend, the more you earn.
            </p>
            <div>
              <img
                src={cashbackImg}
                alt="one percent cashback"
                className="img-box"
              ></img>
            </div>
          </div>
          <div className="content-box">
            <div>
              <img
                src={rewardsImg}
                alt="five times rewards"
                className="img-box"
              ></img>
            </div>
            <p className="desc-text">
              <span className="bold-text">
                5x more value than your cashback,
              </span>
              &nbsp; only at the Uni Store.
            </p>
          </div>
          <div className="content-box">
            <p className="desc-text">
              <span className="bold-text">Zero Forex Markup.</span>
              &nbsp;Go international, without any fees.
            </p>
            <div>
              <img
                src={zeroMarkupImg}
                alt="one percent cashback"
                className="img-box"
              ></img>
            </div>
          </div>
          <div></div>
        </div>
        <div className="content-box">
          <p className="bold-text">
            Lifetime free. No joining fee. No annual charges.
          </p>
        </div>
      </div>
      <section>
          <footer className="footer">
            <div className="footer-sub1">
              <div className="info-container">
                <div className="info">
                    <div>
                      <img src={icon} alt="rupicard-icon"></img>
                    </div>
              <div className="fancy-border"/>
                    <div>
                      <div >
                        <p className="contact-info">
                        1081, Prestige Sunnyside Oak, Bhoganhalli, Bengaluru, Karnataka 560103
                        </p>
                        <p className="contact-info">
                          Contact Us:
                          <a href="tel: 08069819393"> 080-69819393</a>
                        </p>
                        <p className="contact-info">
                          Email:
                          <a href="mailto: support@rupicard.com"> support@rupicard.com</a>
                        </p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </footer>
        </section>
    </div>
  );
}

export default App;
