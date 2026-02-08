import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">AskC</h1>

        <nav className="hidden gap-6 md:flex">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <Button asChild>
          <a href="#consultation">Book Consultation</a>
        </Button>
      </div>
    </header>
  );
}
