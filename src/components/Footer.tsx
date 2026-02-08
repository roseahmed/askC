import { Reveal } from "@/components/Reveal";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-4">
        {/* Branding */}
        <Reveal>
          <div>
            <h2 className="text-2xl font-bold mb-4">AskC</h2>
            <p className="text-indigo-200">
              Education & Career Consulting. Helping students achieve their
              dreams in Bangalore universities.
            </p>
          </div>
        </Reveal>

        {/* Quick Links */}
        <Reveal>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:text-emerald-400 transition"
                >
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-400 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-emerald-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Contact Info */}
        <Reveal>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-indigo-200 mb-2">
              123 Education Street, Bangalore
            </p>
            <p className="text-indigo-200 mb-2">+91 98765 43210</p>
            <p className="text-indigo-200">contact@askc.com</p>
          </div>
        </Reveal>

        {/* Social Media */}
        <Reveal>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-indigo-800 pt-6 text-center text-indigo-200 text-sm">
        © {new Date().getFullYear()} AskC – All Rights Reserved.
      </div>
    </footer>
  );
}
