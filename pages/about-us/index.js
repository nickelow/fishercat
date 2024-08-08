import React from "react";

export default function AboutUs() {
  return (
    <section class="text-white-600 text-base body-font bg-black">
      <div class="max-w-5xl pt-52 pb-24 mx-auto flex flex-col items-center">
        <div class="flex items-center justify-center flex-wrap text-center">
          <div class="flex-1 px-4">
            <p>
              Founder Kyle Caravelli has been in the talent acquisition and
              recruiting space for over a decade, primarily supporting emerging,
              high-growth startups. Starting his career at an executive search
              agency, Kyle also spent time as an in-house recruiter with several
              venture-backed startups before joining a venture capital firm.
              Kyle has hired and placed hundreds of professionals throughout his
              career, and played a significant hand in helping founders
              establish a fundamental and practical approach to recruiting and
              talent acquisition.
              <br />A New England native, Kyle relocated to the San Francisco
              Bay Area to attend the University of California, Berkeley where he
              was a member of their national championship-winning varsity rugby
              team. These days, Kyle enjoys backpacking, snowboarding, and
              spending time with his wife and young daughter.
            </p>
          </div>
          <div class="flex-shrink-0 px-4">
            <img
              class="max-w-full h-auto"
              src="/images/kylepic.png"
              height="315"
              width="315"
              alt="Kyle Caravelli"
            />
          </div>
        </div>
        <div class="ktq4">
          <h3 class="font-semibold text-white mx-auto">
            <div className="contact-header">Contact Me</div>
            <br />
            Email:
            <a href="mailto: kcaravelli@fishercat.us" target="_blank">
              {" "}
              kcaravelli@fishercat.us
            </a>
            <br />
            Phone:
            <a href="203-770-4917"> 203-770-4917</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/kcxcaravelli/" target="_blank">
              https://www.linkedin.com/in/kcxcaravelli/
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}
