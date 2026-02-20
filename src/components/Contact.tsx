import { Reveal } from "@/components/Reveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
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
