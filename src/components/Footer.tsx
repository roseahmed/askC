import { Reveal } from "@/components/Reveal";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Config } from "../config/config";

export function Footer() {
  const config = new Config();

  return (
    <footer className="bg-indigo-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
        {/* Column 1: Branding & Mission */}
        <Reveal>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              {/* This SVG filter trick makes any logo pure white */}
              <img src="/logo.png" alt="ASKC Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold tracking-tighter uppercase">
                ASKC
              </span>
            </div>
            <p className="text-indigo-200/80 leading-relaxed text-sm">
              Empowering students through expert education consultancy. We
              bridge the gap between academic ambition and global opportunities
              in Bangalore's elite universities.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Column 2: Quick Navigation */}
        <Reveal>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-indigo-200/70 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Column 3: Important Links */}
        <Reveal>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="flex flex-col gap-3 text-indigo-200/70 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Support
                </a>
              </li>
              {/* <li>
                <a
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>
        </Reveal>

        {/* Column 4: Reach Us */}
        <Reveal>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
            <div className="flex flex-col gap-4 text-indigo-200/70 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-500 mt-1 shrink-0" />
                <span>{config.orgAddresss}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-500 shrink-0" />
                <span>{config.orgPhoneNumber}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-500 shrink-0" />
                <a href="mailto:contact@askc.in" className="hover:text-white">
                  {config.orgEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Copyright Bar */}
      <div className="mt-16 pt-8 border-t border-indigo-900/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-400 text-xs">
            © {new Date().getFullYear()} ASKC Educational Consultancy. All
            Rights Reserved.
          </p>
          <p className="text-indigo-500 text-[10px] uppercase tracking-widest">
            Built for Academic Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
