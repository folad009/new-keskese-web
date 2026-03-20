export default function TeamSection() {
  return (
    <section className="px-2 py-1">

      {/* TOP ROW */}
      <div className="grid lg:grid-cols-3 gap-2 mb-2">

        {/* IMAGE STACK */}
        <div className="grid gap-6 lg:col-span-1">
          <div className="h-72 overflow-hidden rounded-[20px] sm:h-84 lg:h-105">
            <div
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage:
                'url("/assets/images/keskese-team-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          </div>

        </div>

        {/* BLUE CONTENT PANEL */}
        <div className="flex min-h-[18rem] flex-col justify-between rounded-[20px] bg-[#B31F6C] p-6 sm:p-10 lg:col-span-2 lg:min-h-105 lg:p-16">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            KESKESE TEAM
          </h2>

          <p className="max-w-md text-base font-semibold text-white/90 sm:text-lg lg:text-xl">
            30 EXPERTS<br/>
            WITH ONE FOCUS: GROWTH
          </p>

        </div>

      </div>

      {/* AVATAR GRID PANEL */}
      <div className="rounded-[20px] bg-[#F2F2F2] p-6 sm:p-10 lg:p-16">

        <div className="grid grid-cols-3 place-items-center gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-12">

          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-14 w-14 rounded-full bg-gray-300 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />
          ))}

        </div>

      </div>

    </section>
  )
}
