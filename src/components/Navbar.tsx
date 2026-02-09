import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export function Navbar() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("Coming Soon!");
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ASKC Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-tight">ASKC</span>
        </a>

        <nav className="hidden gap-6 md:flex font-medium text-sm text-gray-600">
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-black transition-colors">
            Process
          </a>
          <a href="#courses" className="hover:text-black transition-colors">
            Courses
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        <Button onClick={handleComingSoon}>Book Consultation</Button>
      </div>
    </header>
  );
}
