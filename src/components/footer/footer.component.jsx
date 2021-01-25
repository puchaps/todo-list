import './footer.styles.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-icons">
        <div className="foooter-icon">
          <a href="https://github.com/puchaps">
            <img 
              src="https://www.flaticon.com/svg/vstatic/svg/733/733553.svg?token=exp=1611589484~hmac=bc1be3c80f0aa311c2337c729f01c08e"
              alt="gihub"
            />
          </a>
        </div>
        <div className="foooter-icon">
          <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
            <img 
              src="https://www.flaticon.com/svg/vstatic/svg/733/733558.svg?token=exp=1611589535~hmac=742dc640a5e7d0928ebf823656a4192c"
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