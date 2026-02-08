import { Reveal } from "@/components/Reveal";

const mainCourses = [
  {
    title: "MBBS",
    description:
      "Undergraduate medical program for students aspiring to become doctors, available in India and abroad.",
    image: "/courses/mbbs.png",
  },
  {
    title: "BAMS",
    description:
      "Bachelor of Ayurvedic Medicine and Surgery, emphasizing traditional Indian medicine, holistic healthcare, and clinical practice.",
    image: "/courses/bams.png",
  },
  {
    title: "Nursing",
    description:
      "Healthcare-focused programs with international career opportunities and clinical exposure.",
    image: "/courses/nursing.png",
  },
  {
    title: "Pharmacy",
    description:
      "Programs covering pharmaceutical sciences, research, and clinical practice.",
    image: "/courses/pharmacy.png",
  },
  {
    title: "BBA",
    description:
      "Bachelor of Business Administration with global exposure in finance, marketing, and operations.",
    image: "/courses/bba.png",
  },
  {
    title: "Engineering",
    description:
      "Undergraduate and postgraduate programs in Computer Science, Mechanical, Civil, and Electrical fields.",
    image: "/courses/engineering.png",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-slate-50">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-14">
          Courses We Offer
        </h2>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mainCourses.map((course) => (
          <Reveal key={course.title}>
            <div className="flex flex-col h-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-1">
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                /> */}

                {/* Overlay Course Name */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                <p className="text-slate-700 text-sm leading-relaxed flex-1">
                  {course.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
