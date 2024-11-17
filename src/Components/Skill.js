import React, { useState } from 'react';
import './skills.css'
const Skill = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { id: 1, image: "s1.png" },
    { id: 2, image: "s2.png" },
    { id: 3, image: "s3.png" }
  ];

  const socialLinks = [
    { 
      href: "https://github.com/",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuUlEQVR4nO2VSytFURiGNwpRBpSOazqYGrskoswIYWxi4D4wNfIvkFuMlCKdGCi/wMToGDEwU+S4X45HqxZntVp77bU3yeC8dTq19/e+z/6+1sXzsvpvAmqBaeAQSAL38peUz6aAmt8EVgGLwDvBSgPbQN1Pof3AHeGVAvqiQmdlB1ElvDNROk3/AKrC3ToHqg3jbQaagJUA0Iqsa9XGXukCNoUXaNPoAMqBPPnfKZ4rNYWaf9lly5hWb4PTuDI5jZr/XUzSZhD71KS2kOB2Q8akzXBgMOyEgSpZe1pOwlZ8ZgC3RATrXSdtxWIF+i6skOBiLSdlKxZnr66SiOAyLefBVnxuAPdGBA9qORe24oQBfCL2ZUhoEXCq5ezbDHOYdeR0+mROvmNDxpzNVAO8+sAfgVVgGIhrvjgwAqwDTwbvK1AR9MWbimEU2DV8QI/m6QKe8deG68V/LQ1XQCmwJYNvgHkf34IP9DawWyVkSLkWxxw99QaoyBhwgipBE8AHcAl0B61sINcAHQ8F/ZK4xOV4v+VZpJRdh+5Ul9hGwBLw5gB+AdaAmPdbAmLy2sz3eZ/jutez8v5Sn8nRzQ3u3U6IAAAAAElFTkSuQmCC",
      alt: "GitHub"
    },
    {
      href: "https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Yu2sVQRSHRyNiJIqSKIJRCwWDKIhYiATSaKVFbIJVulSCKcQmNv4FgpVYiYJYKQRUMGmCoo0WgiCCFiq+ICCKr4hJPjlyLkzW2d3Zx527ynwQ7s29c878vn3OXWMikUgk0gSALcAJ4BxwEtjYgEybgTPABeCUZMwrOAZ8ZylftXhZsOSKzAmcBn4kMn0Cho0LYMBRYHML6DOBADYAtzPySNadrsLL5PMmoMhbjzyXXIXvPAqxxne1IXyX9Z5SGxZYKCgyIydhzSf0TEGRBVcjLxLjZ4EjNUgcAt47+nvnqSoiLALngZUlBFYAZ+2jwXRQpMVDYHsBia3A/QL9nbgaj+o9I5OciT4Dxz0khoGPJfrbyP1uPOte8pgMPCe6Aqx29F+lh2HV/k+BPWkSu/W1G7hYcSJ0gwwU2Uie/SVbt505KSK7asz6f0SXAmVFhC96yI7q+1xMen/JMmJ9PyaZXSItrgPr9LNtwIMKIoUx7v6PgB36+RrganK8S0R4CRxwXSIDiyzal3ZgH/DcNT5NRPilAsv1+8PAh4Ais8BRaxU8Dsyljc8SaTEJ9OqY/oAi/fraqxkyx/uICK+BwcT4+fo1mE/MMahzU5dI61CbsMYPyeqzPoc/vYas/hM6J3WL/FUoP7SAm5UVYBrYVDVPpULrRPxZQmDJBaWjIlb9fuBFAYlXwMGMfp0R0R5rgWsebW4A63N6dU7E6iVLkm8pDwzcK9YmigjALuCJVfoM2Gs8oSki2rNHH/TJX0/B2uaIVIGyeaJImyDuEU/atQfiHkniu1YygcCPOVfh9D8oMuUqlAcNUzl75m5AkXsZOSTjHXlaGSpPJBKJRP5vfgN7EhHwkoccoQAAAABJRU5ErkJggg==",
      alt: "Gmail"
    },
    {
      href: "https://www.linkedin.com/feed/",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2WPQ4BQRiGZ4XOT6HRuYBGRUUlscEt9K6hcg4H0OmIqNxAtSuiFIWIsI9sMpLJNDbMrL99ki2+93s3T2aaXSES/g6gA2wwhw+4UcRh0TReFLEVxBPiPTAHjnGKD0BZ5lXgEpd4qe28uMQnoCbzHhDEJQ65AlteRDwhHspnJOedkk2ANTAAukAfWJgSOzLPynmldOtAQXs/BUytiu8ARW1u2T6xA8xkPlbykm1xRemdgbTMM7bFDa2bU3aBTXFT6+YT8VdetRHEJ4v9d/36uIbl4Te8/VCc8HPcAEWeg13wQBOQAAAAAElFTkSuQmCC",
      alt: "LinkedIn"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/Omkq wCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJe FYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mIN mfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8 ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9f IDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8 dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg=="
              width="20"
              height="20"
              alt="Search"
              className="mr-2"
            />
            <input 
              type="text" 
              id="searchbar" 
              placeholder="Search.."
              className="px-2 py-1 border rounded"
            />
          </div>
          <ul className="flex space-x-6">
            <li><a href="index.html" className="hover:text-blue-600">About Me</a></li>
            <li><a href="Education.html" className="hover:text-blue-600">Education</a></li>
            <li><a href="skill.html" className="hover:text-blue-600">Skills</a></li>
            <li><a href="login.html" className="hover:text-blue-600">Contact Me</a></li>
          </ul>
        </nav>

        <div className="mt-8">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex overflow-hidden">
              {slides.map((slide) => (
                <div 
                  key={slide.id}
                  className={`w-full flex-shrink-0 transition-transform duration-500 ${
                    currentSlide === slide.id ? 'block' : 'hidden'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={`Slide ${slide.id}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(slide.id)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === slide.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="flex justify-center space-x-4 mt-8 pb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={link.icon} 
                alt={link.alt}
                className="w-6 h-6"
              />
            </a>
          ))}
        </footer>
      </div>
    </div>
  );
};

export default Skill;