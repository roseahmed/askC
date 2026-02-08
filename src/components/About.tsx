import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className=" py-24 px-6 bg-slate-50">
      <Reveal>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          About AskC
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          At <span className="font-semibold">AskC</span>, we specialize in
          helping students from all across India secure admissions in top
          universities in Bangalore. Our experienced counselors guide each
          student through the application process, course selection, and
          admission requirements to ensure a smooth and stress-free experience.
          We focus exclusively on Bangalore’s universities, providing local
          expertise and personalized guidance to help students achieve their
          academic goals.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="flex flex-col h-full rounded-2xl p-6 bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-white/90 flex-1">
              To empower students across India with the knowledge, guidance, and
              support needed to gain admission in the best universities in
              Bangalore.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col h-full rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-3">Our Approach</h3>
            <p className="text-white/90 flex-1">
              Personalized counseling and hands-on assistance throughout the
              application and admission process. We ensure that each student
              finds the right university and program in Bangalore that matches
              their academic and career goals.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-slate-700 text-lg leading-relaxed">
            With years of experience and strong connections with Bangalore
            universities, AskC is your trusted partner for securing admission
            and starting your academic journey in Bangalore.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
