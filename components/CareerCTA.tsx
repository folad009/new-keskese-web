export default function CareersCTA() {
  return (
    <section className="px-2 py-2">
      
      <div className="grid lg:grid-cols-3 gap-2">

        {/* LEFT LIGHT PANEL */}
        <div className="flex min-h-[20rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-10 lg:col-span-2 lg:min-h-120 lg:p-16">

          {/* Large Heading */}
          <h2 className="max-w-4xl text-3xl font-extrabold leading-[0.95] tracking-tight text-[#07123A] sm:text-4xl lg:text-5xl">
            SHOW US YOUR SKILLS & LET’S WORK TOGETHER
          </h2>

          {/* Subtext */}
          <p className="mt-8 max-w-lg text-base font-semibold text-[#07123A] sm:mt-12 sm:text-lg lg:mt-16 lg:text-xl">
            CHOOSE A JOB YOU’LL LOVE. CHECK OUT WHO WE’RE LOOKING FOR.
          </p>

        </div>

        {/* RIGHT LIME PANEL */}
        <div className="flex min-h-[16rem] items-center justify-center rounded-[20px] bg-[#B31F6C] p-6 sm:p-10 lg:min-h-120 lg:p-16">

          {/* Replace with real 3D asset */}
          <div className="h-40 w-40 rounded-3xl bg-white/40 sm:h-52 sm:w-52 lg:h-64 lg:w-64" />

        </div>

      </div>

    </section>
  )
}
