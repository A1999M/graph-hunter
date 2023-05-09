import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="col-12 col-lg-6">
        <p className="title-footer">
          LET'S <span>CONNECT</span>{" "}
        </p>
      </div>
      <div className="col-12 col-lg-6 text-center">
        <div className="wrapper-links">
          <a href="##" className="footer-link-to-contact">
            contact us
          </a>
          <a href="##" className="footer-link-to-contact-purple">
            contact us
          </a>
        </div>
      </div>
      <div className="col-12 col-lg-12 c-border mt-8rem">
        <p>SEND US AN EMAIL</p>
        <div className="wrapper-email">
          <a href="##">HELLO@GRAPHICHUNTERS.COM</a>
          <a href="##">HELLO@GRAPHICHUNTERS.COM</a>
        </div>
      </div>
      {/* footer's our officers socials  */}
      <div className="col-6 mt-8rem">
        <p className="title-our-officers">our officers</p>
        <div className="wrapper-descs">
          <div className="left-desc">
            <p className="title-left-desc-footer">DEN BOSCH</p>
            <p className="desc-left-desc-footer">
              Sint Jorisstraat 26 5211 HB, Den Bosch The Netherlands
            </p>
          </div>
          <div className="right-desc">
            <p className="title-right-desc-footer">GELEEN</p>
            <p className="desc-right-desc-footer">
              Hofdwarsweg 5B 6161 DE, Geleen The Netherlands
            </p>
          </div>
        </div>
      </div>
      <div className="col-6 mt-8rem mb-5rem">
        <p className="title-social">social</p>
        <div className="footer-nav">
          <div className="footer-nav-items-linkedin">
            <p className="linkedin">linkedin</p>
            <p className="purple-linkedin">linkedin</p>
          </div>
          <div className="footer-nav-items-instagram">
            <p className="instagram">instagram</p>
            <p className="purple-instagram">instagram</p>
          </div>
          <div className="footer-nav-items-twitter">
            <p className="twitter">twitter</p>
            <p className="purple-twitter">twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}
