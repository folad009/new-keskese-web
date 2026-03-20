export default function ContactSection() {
  return (
    <section className="px-2 py-20 md:px-6 md:py-24">
      <div className="rounded-[28px] bg-[#F2F2F2] p-6 sm:p-8 md:rounded-[48px] md:p-16">
        {/* Headline */}
        <h2 className="max-w-5xl text-4xl font-extrabold leading-[0.95] tracking-tight text-[#07123A] sm:text-5xl md:text-6xl lg:text-7xl">
          LET’S GET YOUR
          <br className="hidden sm:block" />
          PROJECT IN THE GAME
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-sm font-semibold text-[#07123A] sm:mt-8 sm:text-base md:mt-10">
          READY TO SEE YOUR PRODUCT GO FROM COOL TO LEGENDARY? <br/>OUR
          CUSTOM INFLUENCER CAMPAIGNS HAVE GOT YOU COVERED
        </p>

        {/* Form */}
        <form className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          <input
            placeholder="NAME & LAST NAME*"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />

          <input
            placeholder="YOUR EMAIL*"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />

          <input
            placeholder="COMPANY / PRODUCT"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />

          <input
            placeholder="APROXIMATE BUDGET (₦)*"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />

          <input
            placeholder="WHAT ARE YOUR GOALS?"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />

          <input
            placeholder="ADDITIONAL NOTES ABOUT THE PROJECT"
            className="rounded-md border-2 border-[#cfd6ec] bg-transparent px-5 py-4 text-sm font-semibold text-[#07123A] outline-none focus:border-[#B31F6C] sm:px-6 sm:text-base md:px-8 md:py-5"
          />
        </form>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="max-w-md text-xs font-semibold text-[#07123A] sm:text-sm ">
            BY SUBMITTING THIS FORM, YOU AGREE TO THE
            <span className="text-[#B31F6C]"> COOKIE POLICY </span>
            AND
            <span className="text-[#B31F6C]"> PRIVACY POLICY</span>.
          </p>

          <button className="w-full rounded-full bg-[#07123A] px-8 py-4 text-base font-bold text-white transition hover:scale-105 hover:bg-[#B31F6C] sm:w-fit sm:px-12 sm:py-5 sm:text-lg">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
}
