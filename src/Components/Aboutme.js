import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutme.css'
const Aboutme = () => {
  return (
    <div className="background">
      <div className="content">
        <nav className="navbar">
          <ul>
            <li id="AboutMe">
              <Link to="/">About Me</Link>
            </li>
            <li id="Education">
              <Link to="/education">Education</Link>
            </li>
            <li id="Skills">
              <Link to="/skills">Skills</Link>
            </li>
            <li id="Experience">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>

        <div id="page1">
          <div className="written">
            <div className="Main">
              <h1>Hi,</h1>
              <h1>I'm Mahek Patel</h1>
              <p>A Developer</p>
            </div>
            <div id="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
                neque sint, quis fuga enim repellendus iure obcaecati quod nihil
                aperiam dicta at impedit! Reiciendis voluptates impedit saepe
                recusandae dolorem facilis! Iste sunt non id ab laborum eaque.
                Assumenda, dolor asperiores explicabo doloremque similique eius
                eveniet voluptas perferendis repellendus, cumque ad? Perferendis,
                facere nesciunt quasi fugiat voluptates mollitia eius eaque
                inventore?
              </p>
            </div>
          </div>
          <div id="image"></div>
        </div>

        <div id="footer">
          <icon>
            <a href="https://github.com/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuUlEQVR4nO2VSytFURiGNwpRBpSOazqYGrskoswIYWxi4D4wNfIvkFuMlCKdGCi/wMToGDEwU+S4X45HqxZntVp77bU3yeC8dTq19/e+z/6+1sXzsvpvAmqBaeAQSAL38peUz6aAmt8EVgGLwDvBSgPbQN1Pof3AHeGVAvqiQmdlB1ElvDNROk3/AKrC3ToHqg3jbQaagJUA0Iqsa9XGXukCNoUXaNPoAMqBPPnfKZ4rNYWaf9lly5hWb4PTuDI5jZr/XUzSZhD71KS2kOB2Q8akzXBgMOyEgSpZe1pOwlZ8ZgC3RATrXSdtxWIF+i6skOBiLSdlKxZnr66SiOAyLefBVnxuAPdGBA9qORe24oQBfCL2ZUhoEXCq5ezbDHOYdeR0+mROvmNDxpzNVAO8+sAfgVVgGIhrvjgwAqwDTwbvK1AR9MWbimEU2DV8QI/m6QKe8deG68V/LQ1XQCmwJYNvgHkf34IP9DawWyVkSLkWxxw99QaoyBhwgipBE8AHcAl0B61sINcAHQ8F/ZK4xOV4v+VZpJRdh+5Ul9hGwBLw5gB+AdaAmPdbAmLy2sz3eZ/jutez8v5Sn8nRzQ3u3U6IAAAAAElFTkSuQmCC"
                height="25px"
                width="25px"
                alt="GitHub Icon"
              />
            </a>
          </icon>
          <icon>
            <a href="https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Yu2sVQRSHRyNiJIqSKIJRCwWDKIhYiATSaKVFbIJVulSCKcQmNv4FgpVYiYJYKQRUMGmCoo0WgiCCFiq+ICCKr4hJPjlyLkzW2d3Zx527ynwQ7s29c878vn3OXWMikUgk0gSALcAJ4BxwEtjYgEybgTPABeCUZMwrOAZ8ZylftXhZsOSKzAmcBn4kMn0Cho0LYMBRYHML6DOBADYAtzPySNadrsLL5PMmoMhbjzyXXIXvPAqxxne1IXyX9Z5SGxZYKCgyIydhzSf0TEGRBVcjLxLjZ4EjNUgcAt47+nvnqSoiLALngZUlBFYAZ+2jwXRQpMVDYHsBia3A/QL9nbgaj+o9I5OciT4Dxz0khoGPJfrbyP1uPOte8pgMPCe6Aqx29F+lh2HV/k+BPWkSu/W1G7hYcSJ0gwwU2Uie/SVbt505KSK7asz6f0SXAmVFhC96yI7q+1xMen/JMmJ9PyaZXSItrgPr9LNtwIMKIoUx7v6PgB36+RrganK8S0R4CRxwXSIDiyzal3ZgH/DcNT5NRPilAsv1+8PAh4Ais8BRaxU8Dsyljc8SaTEJ9OqY/oAi/fraqxkyx/uICK+BwcT4+fo1mE/MMahzU5dI61CbsMYPyeqzPoc/vYas/hM6J3WL/FUoP7SAm5UVYBrYVDVPpULrRPxZQmDJBaWjIlb9fuBFAYlXwMGMfp0R0R5rgWsebW4A63N6dU7E6iVLkm8pDwzcK9YmigjALuCJVfoM2Gs8oSki2rNHH/TJX0/B2uaIVIGyeaJImyDuEU/atQfiHkniu1YygcCPOVfh9D8oMuUqlAcNUzl75m5AkXsZOSTjHXlaGSpPJBKJRP5vfgN7EhHwkoccoQAAAABJRU5ErkJggg=="
                height="25px"
                width="25px"
                alt="GitHub Icon"
              />
            </a>
          </icon>
          <icon>
            <a href="https://www.linkedin.com/feed/">
              <img
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2WPQ4BQRiGZ4XOT6HRuYBGRUUlscEt9K6hcg4H0OmIqNxAtSuiFIWIsI9sMpLJNDbMrL99ki2+93s3T2aaXSES/g6gA2wwhw+4UcRh0TReFLEVxBPiPTAHjnGKD0BZ5lXgEpd4qe28uMQnoCbzHhDEJQ65AlteRDwhHspnJOedkk2ANTAAukAfWJgSOzLPynmldOtAQXs/BUytiu8ARW1u2T6xA8xkPlbykm1xRemdgbTMM7bFDa2bU3aBTXFT6+YT8VdetRHEJ4v9d/36uIbl4Te8/VCc8HPcAEWeg13wQBOQAAAAAElFTkSuQmCC"
               height="25px"
                width="25px"
                alt="GitHub Icon"
              />
            </a>
          </icon>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;