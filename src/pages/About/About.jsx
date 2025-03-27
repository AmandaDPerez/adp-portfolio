import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#7e8abf]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Data Explorer, Insight Creator, Research Architect
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="block"
                alt="payments illustration"
                width={1207}
                height={929}
              />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hello! I'm Amanda D. Perez, PhD — a data scientist and 
              mixed-methods researcher passionate about transforming 
              complex data into meaningful insights. I specialize in 
              statistical modeling, data visualization, and storytelling 
              that bridges quantitative and qualitative research.
              </p>
              <p className="text-white">
              My focus is on making data-driven decision-making more intuitive 
              and impactful, especially in areas like public health, behavioral 
              science, and social equity. I build tools, dashboards, and 
              workflows that turn raw data into clarity.
              </p>
        

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  I'm a lifelong learner and creative problem solver, 
                  committed to building research-backed solutions that 
                  resonate with real-world needs. Whether it's designing 
                  experiments or visualizing narratives, I bring data to 
                  life with purpose and precision.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                    Amanda D. Perez, PhD – Where Data Meets Meaning
                    </cite>
          
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
