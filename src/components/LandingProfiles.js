import React from "react";
import "../styles/LandingPage.css";

const LandingProfiles = () => {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <div
              class="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                Our Creative <span> Team</span>
              </h3>
              <p>
                UDAAN Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui, ex.
              </p>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="d-flex mt-3 justify-content-between">
          <div >
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
              </div>
              <div class="single_advisor_details_info">
                <h6>Swanand Wagh</h6>
                <p class="designation">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div >
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                />
              </div>
              <div class="single_advisor_details_info">
                <h6>Vivek Nathani</h6>
                <p class="designation">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div >
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt=""
                />
              </div>
              <div class="single_advisor_details_info">
                <h6>Amish Singh</h6>
                <p class="designation">UI Designer</p>
              </div>
            </div>
          </div>
          <div >
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt=""
                />
              </div>
              <div class="single_advisor_details_info">
                <h6>Shraddha Suryawanshi</h6>
                <p class="designation">Developer</p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div class="advisor_thumb">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar8.png"
                  alt=""
                />
              </div>
              <div class="single_advisor_details_info">
                <h6>Paulami Bhattacharya</h6>
                <p class="designation">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingProfiles;
