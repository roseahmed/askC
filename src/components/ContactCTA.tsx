import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export function ContactCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%20ASKC,%20I%20need%20Bangalore%20college%20admission%20guidance."
        target="_blank"
        className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-2xl hover:bg-[#1ebe57]"
      >
        <FaWhatsapp size={24} />
        {/* <span>WhatsApp</span> */}
      </a>

      {/* Phone Button */}
      <a
        href="tel:+919876543210"
        className="flex items-center gap-3 rounded-full bg-[#1D9D74] px-5 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-2xl hover:bg-[#15785d]"
      >
        <FaPhoneAlt size={24} />
        {/* <span>Call Us</span> */}
      </a>
    </div>
  );
}
