import { Reveal } from "@/components/Reveal";

export function Services() {
  const services = [
    "Career Counselling",
    "University Shortlisting",
    "Documentation & Eligibility",
    "Application Support",
    "Pre-Departure Support",
  ];

  return (
    <section id="services" className="bg-white py-24">
      <Reveal>
        <h2 className="mb-14 text-center text-3xl font-bold text-slate-900">
          Our Services
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <Reveal key={s}>
            <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-indigo-600 group-hover:text-indigo-700">
                {s}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Expert guidance tailored to your academic and career goals.
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
