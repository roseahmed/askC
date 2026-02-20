// import { Reveal } from "@/components/Reveal";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { Config } from "../config/config";

// export function Footer() {
//   const config = new Config();

//   return (
//     <footer className="bg-indigo-950 text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
//         {/* Column 1: Branding & Mission */}
//         <Reveal>
//           <div className="flex flex-col gap-5">
//             <div className="flex items-center gap-3">
//               {/* This SVG filter trick makes any logo pure white */}
//               <img src="/logo.png" alt="ASKC Logo" className="h-10 w-auto" />
//               <span className="text-2xl font-bold tracking-tighter uppercase">
//                 ASKC
//               </span>
//             </div>
//             <p className="text-indigo-200/80 leading-relaxed text-sm">
//               Empowering students through expert education consultancy. We
//               bridge the gap between academic ambition and global opportunities
//               in Bangalore's elite universities.
//             </p>
//             <div className="flex gap-4 mt-2">
//               <a
//                 href="#"
//                 className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
//               >
//                 <FaFacebookF size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-indigo-900 rounded-lg hover:bg-emerald-500 transition-all duration-300"
//               >
//                 <FaInstagram size={16} />
//               </a>
//             </div>
//           </div>
//         </Reveal>

//         {/* Column 2: Quick Navigation */}
//         <Reveal>
//           <div>
//             <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
//             <ul className="flex flex-col gap-3 text-indigo-200/70 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#courses"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Courses
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#courses"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Reveal>

//         {/* Column 3: Important Links */}
//         <Reveal>
//           <div>
//             <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
//             <ul className="flex flex-col gap-3 text-indigo-200/70 text-sm">
//               <li>
//                 <a
//                   href="#about"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#process"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Our Process
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Contact Support
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Reveal>

//         {/* Column 4: Reach Us */}
//         <Reveal>
//           <div>
//             <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
//             <div className="flex flex-col gap-4 text-indigo-200/70 text-sm">
//               <div className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="text-emerald-500 mt-1 shrink-0" />
//                 <span>{config.orgAddresss}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaPhoneAlt className="text-emerald-500 shrink-0" />
//                 <span>
//                   {config.orgPhoneNumber} | {config.orgAltPhoneNumber}
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaEnvelope className="text-emerald-500 shrink-0" />
//                 <a href="mailto:contact@askc.in" className="hover:text-white">
//                   {config.orgEmail}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>

//       {/* Copyright Bar */}
//       <div className="mt-16 pt-8 border-t border-indigo-900/50">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-indigo-400 text-xs">
//             © {new Date().getFullYear()} ASKC Educational Consultancy. All
//             Rights Reserved.
//           </p>
//           <p className="text-indigo-500 text-[10px] uppercase tracking-widest">
//             Built for Academic Excellence
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Config } from "../config/config";

export function Footer() {
  const config = new Config();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-4">
        {/* Column 1: Branding & Mission */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="AskC Logo" className="h-10 w-auto  " />
              <span className="text-2xl font-black tracking-tighter text-white">
                AskC
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              <span className="text-emerald-500 font-bold">
                AskC Education & Career Consultancy.
              </span>
              <br />
              Bridging the gap between academic ambition and admission in
              Bengaluru's elite universities.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Column 2: Navigation */}
        <Reveal>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-emerald-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              {["Home", "Services", "Courses", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                      />
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>

        {/* Column 3: Contact Details */}
        <Reveal>
          <div>
            <h3 className=" font-bold mb-6 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <div className="flex flex-col gap-5 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0 h-5 w-5" />
                <span className="leading-relaxed">{config.orgAddresss}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-emerald-500 shrink-0 h-5 w-5 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${config.orgPhoneNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {config.orgPhoneNumber}
                  </a>
                  <a
                    href={`tel:${config.orgAltPhoneNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {config.orgAltPhoneNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0 h-5 w-5" />
                <a
                  href={`mailto:${config.orgEmail}`}
                  className="hover:text-white"
                >
                  {config.orgEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Column 4: Newsletter/Call to Action */}
        <Reveal>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-3 text-lg">
              Ready to Start?
            </h3>
            <p className="text-slate-400 text-xs mb-5 leading-relaxed">
              Join hundreds of students who secured their future in Bengaluru
              with AskC.
            </p>
            <a
              href="#contact"
              className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
            >
              Get Consultation
            </a>
          </div>
        </Reveal>
      </div>

      {/* Copyright Bar */}
      <div className="mt-20 pt-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300">
              AskC Educational Consultancy.
            </span>
            <br className="md:hidden" /> All Rights Reserved.
          </p>
          {/* <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
