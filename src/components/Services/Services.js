import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="service-desc-container">
          <h1>
            My <span>Service's</span>
          </h1>
          <p>
            A Full-Stack developer is a professional responsible for working on
            both front-end and back-end development processes. They design,
            develop, and maintain fully-fledged and functioning platforms with
            databases or servers. These servers do not need other third-party
            applications to build an entire system from scratch.
          </p>
          <button>Hire me</button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="service-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc"></div>
            <h2>Web Development</h2>
            <p>
              Web development is the work involved in developing a website for
              the Internet (World Wide Web) or an intranet (a private network).
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services.
            </p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc"></div>
            <h2>Desktop Development</h2>
            <p>
              Desktop application development is the process of creating a
              desktop application that is able to run on a computer. Desktop
              applications are computer programs that are designed to run on a
              specific operating system and that provide the functionality to
              the user.
            </p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc"></div>
            <h2>UI/UX Design</h2>
            <p>
              A UI UX designer is a professional who identifies new
              opportunities to create better user experiences. Aesthetically
              pleasing branding strategies help them effectively reach more
              customers. They also ensure that the end-to-end journey with their
              products or services meets desired outcomes.A UI UX designer is a
              professional who identifies new opportunities to create better
              user experiences. Aesthetically pleasing branding strategies help
              them effectively reach more customers. They also ensure that the
              end-to-end journey with their products or services meets desired
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
