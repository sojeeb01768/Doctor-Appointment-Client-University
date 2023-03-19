import React from "react";
import "./Footes.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

//Footer section
const Footer = () => {
  return (
    <div className="bg-footer pb-14 text-white">
      <div className="hero ">
        <div className="hero-content2 lg:gap-36 flex-col lg:flex-row mt-8">
          <div className="lg:text-left">
            <div className="mt-12">
              <p className="title-contact">WE'D LOVE TO HERE FROM YOU</p>

              <div className="flex items-center contact mt-10">
                <FaWarehouse className="mr-6"></FaWarehouse>
                <span>sojeebahmed.sa@gmail.com</span>
              </div>

              <div className="flex items-center mt-5 contact">
                <FaMapMarkerAlt className="mr-6"></FaMapMarkerAlt>
                <span>

                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center contact mt-5">
                <FaPhoneAlt className="mr-6"></FaPhoneAlt>
                <span>+880 1768670013</span>
              </div>

              <div>
                <h1 className="title-contact mt-24 mb-5">FOLLOW US</h1>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/company/ermin-automotive/mycompany/"
                    className="mr-8"
                    target="blank"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100066954733805"
                    className="mr-8"
                    target="blank"
                  >
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a
                    href="https://www.instagram.com/erminautomotive/"
                    className="mr-8"
                    target="blank"
                  >
                    <FaInstagram></FaInstagram>
                  </a>
                  <a
                    href="https://twitter.com/ErminAutomotive"
                    className="mr-8"
                    target="blank"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="mt-12 title-contact mb-10">QUICK CONTACT</h1>
            <form>
              <div className="flex justify-between ">
                <input
                  type="text"
                  className="input-bg w-5/12"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  className="input-bg w-5/12"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  className="input-bg mt-8 w-full"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <input
                  name="message"
                  className="input-bg mt-10 w-full mb-10"
                  placeholder="Message"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <input
                  className="btn btn-outline btn-success"
                  type="submit"
                  value="SUBMIT"
                  required
                />
              </div>
              <div className="mt-8 text-gray-600">
                <small className="text-inherit">
                  @ Copyright © 2021 Ermin Automotive. All rights reserved
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
