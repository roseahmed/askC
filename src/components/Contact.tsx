// import { Reveal } from "@/components/Reveal";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
// import { Map } from "@/components/Map";
// import { Config } from "../config/config";

// export function Contact() {
//   const config = new Config();
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formRef.current) {
//       return;
//     }

//     setIsSubmitting(true);

//     emailjs
//       .sendForm(
//         config.emailJsServiceId,
//         config.emailJsTemplateId,
//         formRef.current,
//         config.emailJsPublicKey,
//       )
//       .then(() => {
//         toast.success("Message sent successfully!");

//         formRef.current?.reset();
//       })
//       .catch(() => {
//         toast.error("Failed to send message. Please try again later.");
//       })
//       .finally(() => setIsSubmitting(false));
//   };

//   return (
//     <section id="contact" className=" py-24 px-6 bg-white">
//       <Toaster position="bottom-right" reverseOrder={false} />

//       <Reveal>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
//           Contact Us
//         </h1>
//       </Reveal>

//       <Reveal>
//         <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
//           Have questions or want to get started with admissions in Bangalore
//           universities? Fill out the form below, and our counselors will get
//           back to you within 24 hours.
//         </p>
//       </Reveal>

//       {/* Form + Address Cards Side by Side */}
//       <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto mb-12">
//         {/* Contact Form */}
//         <Reveal>
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="bg-slate-50 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <textarea
//               name="message"
//               placeholder="Tell us about your query or course interest (e.g. MBA, MBBS, Engineering)"
//               className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
//               required
//             />

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`bg-indigo-600 text-white font-semibold py-3 rounded-lg transition ${
//                 isSubmitting
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-indigo-700"
//               }`}
//             >
//               {isSubmitting ? "Sending..." : "Submit"}
//             </button>
//           </form>
//         </Reveal>

//         {/* Address Card */}
//         <Reveal>
//           <div className="bg-slate-50 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
//             <div>
//               <h3 className="text-xl font-bold mb-2">Our Address</h3>
//               <p className="text-slate-700">{config.orgAddresss}</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-2">Phone</h3>
//               <p className="text-slate-700">{config.orgPhoneNumber}</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-2">Email</h3>
//               <p className="text-slate-700">{config.orgEmail}</p>
//             </div>
//             <div className="mt-auto pt-6 border-t border-indigo-800">
//               <p className="text-sm italic">
//                 * Our counselors are available Monday to Saturday, 09:00 AM —
//                 9:00 PM.
//               </p>
//             </div>
//           </div>
//         </Reveal>
//       </div>

//       {/* Map Card - Full Width with Gradient Background */}
//       <Reveal>
//         <div className="bg-linear-to-br from-indigo-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
//           <h3 className="text-2xl font-bold mb-4 text-center text-indigo-700">
//             Our Location
//           </h3>
//           <Map />
//         </div>
//       </Reveal>
//     </section>
//   );
// }

/**
 * Contact form: v2
 */
import { Reveal } from "@/components/Reveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
// import { Map } from "@/components/Map";
import { Config } from "../config/config";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const config = new Config();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        formRef.current,
        config.emailJsPublicKey,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-dvh scroll-mt-20 flex-col bg-white"
    >
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Centered Dashboard Container */}
      <div className="flex flex-1 flex-col justify-center px-6 py-10">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-600 mb-2">
                Get In Touch
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                Contact AskC
              </h1>
              <div className="mt-3 mx-auto h-1 w-16 bg-emerald-500 rounded-full" />
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {/* Contact Form - Height matched to Address Card */}
            <Reveal>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm md:p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Course Interest & Query (e.g. MBBS, BAMS etc at Top Bengaluru College)"
                  className="w-full flex-1 min-h-140px rounded-xl border border-slate-200 bg-white p-3.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600 active:scale-95 shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
              </form>
            </Reveal>

            {/* Address & Info Card */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:p-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                        Our Office
                      </h4>
                      <p className="text-sm text-slate-500 leading-snug mt-1">
                        {config.orgAddresss}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                        Connect Directly
                      </h4>
                      <p className="text-sm text-slate-600 font-bold mt-1">
                        {config.orgPhoneNumber} | {config.orgAltPhoneNumber}
                      </p>
                      <a
                        href={`mailto:${config.orgEmail}`}
                        className="flex items-center gap-1.5 text-sm text-emerald-600 hover:underline mt-1 font-medium"
                      >
                        <Mail className="h-3.5 w-3.5" /> {config.orgEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                        Working Hours
                      </h4>
                      <p className="text-sm text-slate-500">
                        Monday — Saturday
                      </p>
                      <p className="text-sm text-slate-500 font-medium italic">
                        09:00 AM — 09:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      Counselors Online
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    Ready to assist you with Bengaluru’s top college admissions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Map Section - Edge to Edge Experience */}
      <section className="w-full bg-slate-50 border-t border-slate-100 overflow-hidden">
        <Reveal>
          <div className="relative w-full h-80 md:h-[500px] group">
            {/* Decorative Overlay for a Premium Feel */}
            <div className="absolute inset-0 z-10 pointer-events-none border-y border-slate-950/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" />

            <iframe
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.4471538478438!2d77.55322607507816!3d13.070822987253697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA0JzE1LjAiTiA3N8KwMzMnMjAuOSJF!5e0!3m2!1sen!2sin!4v1770589897737!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AskC Office Location"
            />

            {/* Optional: Floating Label */}
            <div className="absolute bottom-6 left-6 z-20 hidden md:block">
              <div className="rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                  Office Location
                </p>
                <p className="text-sm font-bold text-slate-900">
                  Visit us in Bengaluru
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </section>
  );
}
