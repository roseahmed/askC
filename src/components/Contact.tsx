import { Reveal } from "../components/Reveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Map } from "./Map";
import { Config } from "../config/config";

export function Contact() {
  const config = new Config();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

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
    <section id="contact" className=" py-24 px-6 bg-white">
      <Toaster position="bottom-right" reverseOrder={false} />

      <Reveal>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          Contact Us
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Have questions or want to get started with admissions in Bangalore
          universities? Fill out the form below, and our counselors will get
          back to you within 24 hours.
        </p>
      </Reveal>

      {/* Form + Address Cards Side by Side */}
      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto mb-12">
        {/* Contact Form */}
        <Reveal>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Tell us about your query or course interest (e.g. MBA, MBBS, Engineering)"
              className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-indigo-600 text-white font-semibold py-3 rounded-lg transition ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </Reveal>

        {/* Address Card */}
        <Reveal>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Our Address</h3>
              <p className="text-slate-700">{config.orgAddresss}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-slate-700">{config.orgPhoneNumber}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-700">{config.orgEmail}</p>
            </div>
            <div className="mt-auto pt-6 border-t border-indigo-800">
              <p className="text-sm italic">
                * Our counselors are available Monday to Saturday, 09:00 AM —
                9:00 PM.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Map Card - Full Width with Gradient Background */}
      <Reveal>
        <div className="bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-indigo-700">
            Our Location
          </h3>
          <Map />
        </div>
      </Reveal>
    </section>
  );
}
