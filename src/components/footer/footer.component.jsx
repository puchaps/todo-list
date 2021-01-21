import './footer.styles.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-icons">
        <div className="foooter-icon">
          <a href="https://github.com/puchaps">
            <img 
              src="https://www.flaticon.com/svg/vstatic/svg/889/889111.svg?token=exp=1611263644~hmac=e6264c798c4a351d1661318e50bfb8c6"
              alt="gihub"
            />
          </a>
        </div>
        <div className="foooter-icon">
          <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
            <img 
              src="https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1611263841~hmac=50bb8ca61645d97bb2e85c1189b93788"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div className="footer-year">
        <span>&#169; 2021</span>
      </div>
    </footer>
  );
};

export default Footer; 