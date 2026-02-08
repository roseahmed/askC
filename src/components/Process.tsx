import { Reveal } from "./Reveal";

export function Process() {
  const steps = [
    "Initial Counselling",
    "Course & College Selection",
    "Eligibility & Documentation",
    "Application Submission",
    "Admission Confirmation",
  ];

  return (
    <section id="process" className="py-24 px-6 bg-slate-900 text-white">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Admission Process
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-10">
        {steps.map((s, i) => (
          <Reveal key={s}>
            <div className="text-center">
              <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-emerald-500">
                {i + 1}
              </div>
              <p>{s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
