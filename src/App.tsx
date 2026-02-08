import { SEO } from "./components/SEO";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <>
      <SEO
        title="Bangalore College Admission Consultants | ASK Consultants"
        description="Expert admission consultancy for Bangalore colleges & universities. Students can apply from anywhere in India or abroad."
        url="https://askc.in"
        image="https://askc.in/hero-banner.jpg" // optional OG image
      />
      <Home />
    </>
  );
}
