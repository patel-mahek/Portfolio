// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Education.css'

// const Education = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 'slide1',
//       title: 'School',
//       content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil, suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum! Quibusdam ab consequuntur rem nesciunt, ipsa enim temporibus facilis illo excepturi ullam deserunt, nemo eaque id vel eius fugiat labore ipsam at commodi odit tempora earum soluta! Expedita, neque rem.'
//     },
//     {
//       id: 'slide2',
//       title: 'High-School',
//       content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil, suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum! Quibusdam ab consequuntur rem nesciunt, ipsa enim temporibus facilis illo excepturi ullam deserunt, nemo eaque id vel eius fugiat labore ipsam at commodi odit tempora earum soluta! Expedita, neque rem.'
//     },
//     {
//       id: 'slide3',
//       title: 'College',
//       content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil, suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum! Quibusdam ab consequuntur rem nesciunt, ipsa enim temporibus facilis illo excepturi ullam deserunt, nemo eaque id vel eius fugiat labore ipsam at commodi odit tempora earum soluta! Expedita, neque rem.'
//     }
//   ];

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="background">
//       <div className="content">
//         <nav className="navbar">
//           <div className="Search">
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/Omkq"
//               alt="search"
//               width="20px"
//               height="20px"
//             />
//             <input type="text" id="searchbar" placeholder="Search.." />
//           </div>
//           <ul>
//             <li id="AboutMe">
//               <Link to="/">About Me</Link>
//             </li>
//             <li id="Education">
//               <Link to="/education">Education</Link>
//             </li>
//             <li id="Skills">
//               <Link to="/skills">Skills</Link>
//             </li>
//             <li id="Experience">
//               <Link to="/contact">Contact Me</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="page2">
//           <div className="carousel relative w-full max-w-3xl mx-auto overflow-hidden">
//             <div className="items">
//               {slides.map((slide, index) => (
//                 <div
//                   key={slide.id}
//                   className={`sliders absolute w-full transition-opacity duration-500 ${
//                     currentSlide === index ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="p-8 bg-white/80 rounded-lg shadow-lg">
//                     <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
//                     <p className="text-gray-700">{slide.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="slider flex justify-center gap-4 mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full ${
//                     currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
//                   }`}
//                   onClick={() => handleSlideChange(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <footer id="fotter" className="flex gap-4 justify-center items-center p-4 mt-8">
//           <a href="https://github.com/" className="icon">
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuUlEQVR4nO2VSytFURiGNwpRBpSOazqYGrskoswIYWxi4D4wNfIvkFuMlCKdGCi/wMToGDEwU+S4X45HqxZntVp77bU3yeC8dTq19/e+z/6+1sXzsvpvAmqBaeAQSAL38peUz6aAmt8EVgGLwDvBSgPbQN1Pof3AHeGVAvqiQmdlB1ElvDNROk3/AKrC3ToHqg3jbQaagJUA0Iqsa9XGXukCNoUXaNPoAMqBPPnfKZ4rNYWaf9lly5hWb4PTuDI5jZr/XUzSZhD71KS2kOB2Q8akzXBgMOyEgSpZe1pOwlZ8ZgC3RATrXSdtxWIF+i6skOBiLSdlKxZnr66SiOAyLefBVnxuAPdGBA9qORe24oQBfCL2ZUhoEXCq5ezbDHOYdeR0+mROvmNDxpzNVAO8+sAfgVVgGIhrvjgwAqwDTwbvK1AR9MWbimEU2DV8QI/m6QKe8deG68V/LQ1XQCmwJYNvgHkf34IP9DawWyVkSLkWxxw99QaoyBhwgipBE8AHcAl0B61sINcAHQ8F/ZK4xOV4v+VZpJRdh+5Ul9hGwBLw5gB+AdaAmPdbAmLy2sz3eZ/jutez8v5Sn8nRzQ3u3U6IAAAAAElFTkSuQmCC"
//               height="25px"
//               width="25px"
//               alt="GitHub"
//             />
//           </a>
//           <a href="https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/" className="icon">
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Yu2sVQRSHRyNiJIqSKIJRCwWDKIhYiATSaKVFbIJVulSCKcQmNv4FgpVYiYJYKQRUMGmCoo0WgiCCFiq+ICCKr4hJPjlyLkzW2d3Zx527ynwQ7s29c878vn3OXWMikUgk0gSALcAJ4BxwEtjYgEybgTPABeCUZMwrOAZ8ZylftXhZsOSKzAmcBn4kMn0Cho0LYMBRYHML6DOBADYAtzPySNadrsLL5PMmoMhbjzyXXIXvPAqxxne1IXyX9Z5SGxZYKCgyIydhzSf0TEGRBVcjLxLjZ4EjNUgcAt47+nvnqSoiLALngZUlBFYAZ+2jwXRQpMVDYHsBia3A/QL9nbgaj+o9I5OciT4Dxz0khoGPJfrbyP1uPOte8pgMPCe6Aqx29F+lh2HV/k+BPWkSu/W1G7hYcSJ0gwwU2Uie/SVbt505KSK7asz6f0SXAmVFhC96yI7q+1xMen/JMmJ9PyaZXSItrgPr9LNtwIMKIoUx7v6PgB36+RrganK8S0R4CRxwXSIDiyzal3ZgH/DcNT5NRPilAsv1+8PAh4Ais8BRaxU8Dsyljc8SaTEJ9OqY/oAi/fraqxkyx/uICK+BwcT4+fo1mE/MMahzU5dI61CbsMYPyeqzPoc/vYas/hM6J3WL/FUoP7SAm5UVYBrYVDVPpULrRPxZQmDJBaWjIlb9fuBFAYlXwMGMfp0R0R5rgWsebW4A63N6dU7E6iVLkm8pDwzcK9YmigjALuCJVfoM2Gs8oSki2rNHH/TJX0/B2uaIVIGyeaJImyDuEU/atQfiHkniu1YygcCPOVfh9D8oMuUqlAcNUzl75m5AkXsZOSTjHXlaGSpPJBKJRP5vfgN7EhHwkoccoQAAAABJRU5ErkJggg=="
//               height="25px"
//               width="25px"
//               alt="Gmail"
//             />
//           </a>
//           <a href="https://www.linkedin.com/feed/" className="icon">
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2WPQ4BQRiGZ4XOT6HRuYBGRUUlscEt9K6hcg4H0OmIqNxAtSuiFIWIsI9sMpLJNDbMrL99ki2+93s3T2aaXSES/g6gA2wwhw+4UcRh0TReFLEVxBPiPTAHjnGKD0BZ5lXgEpd4qe28uMQnoCbzHhDEJQ65AlteRDwhHspnJOedkk2ANTAAukAfWJgSOzLPynmldOtAQXs/BUytiu8ARW1u2T6xA8xkPlbykm1xRemdgbTMM7bFDa2bU3aBTXFT6+YT8VdetRHEJ4v9d/36uIbl4Te8/VCc8HPcAEWeg13wQBOQAAAAAElFTkSuQmCC"
//               height="25px"
//               width="25px"
//               alt="LinkedIn"
//             />
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from 'react';
import './Education.css'; // Ensure your CSS file is properly linked

function Education() {
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
          
        <div className="page2">
          <div className="carousel">
            <div className="items">
              <div className="sliders" id="slide1">
                <h1>School</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil,
                  suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa
                  harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum!
                </p>
              </div>
              <div className="sliders" id="slide2">
                <h1>High-School</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil,
                  suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa
                  harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum!
                </p>
              </div>
              <div className="sliders" id="slide3">
                <h1>College</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat repellendus nihil,
                  suscipit adipisci, ducimus praesentium dolorem voluptatum mollitia eius omnis culpa
                  harum. Tempora distinctio blanditiis, deserunt quo autem excepturi laborum!
                </p>
              </div>
            </div>
            <div className="slider">
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          </div>
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
}

export default Education;
