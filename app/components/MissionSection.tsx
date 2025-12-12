import Image from 'next/image'

export default function MissionSection() {
  return (
    <section className="w-full bg-hennessey-white py-24 px-16">
      {/* Top Section */}
      <div className="mb-24 relative pl-16 pr-16">
        {/* Our Mission Label - Leftmost, aligned with "Scroll to know more" */}
        <div className="absolute left-16 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-hennessey-blue flex-shrink-0"></div>
          <h2 className="text-hennessey-black text-xl font-medium whitespace-nowrap">Our Mission</h2>
        </div>

        {/* Mission Statement and Button - Centered */}
        <div className="flex justify-center">
          <div className="max-w-6xl">
            <p className="text-hennessey-black text-6xl font-normal mb-10" style={{maxWidth: '1100px', lineHeight: '1.15'}}>
              Our mission is simple: To reduce complexity, improve reliability, and deliver measurable value across every project we touch.
            </p>
            <button className="bg-[#E6E3DE] text-[#444444] px-10 py-3 rounded-full border-0 shadow-none hover:opacity-90 transition-opacity font-medium text-base" style={{fontFamily: 'sans-serif'}}>
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pl-16 pr-16">
        <div className="flex items-start gap-16">
          {/* Left Side - Image Card with Button Overlay - Left edge aligned with "Scroll to know more" */}
          <div className="relative w-full max-w-[650px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/site-assets/working.png"
                alt="Working on construction"
                fill
                className="object-cover"
              />
              {/* How We Work Button Overlay - Centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="bg-gray-50 text-hennessey-black px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-gray-100 transition-all font-medium text-base group">
                  <span>How We Work</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics and Logos - Centered and positioned */}
          <div className="flex flex-col mx-auto mt-20 gap-4" style={{width: 'max-content', height: '487.5px'}}>
            {/* Statistics - Lowered slightly and centered */}
            <div className="flex items-center pt-8" style={{height: 'auto'}}>
              <div className="flex items-start gap-12 mx-auto">
                <div className="flex flex-col">
                  <div className="text-hennessey-blue text-7xl font-normal mb-3 leading-none">95%</div>
                  <div className="text-hennessey-black text-base font-medium">Project Reliability</div>
                </div>
                
                <div className="h-20 w-[1px] bg-gray-200 flex-shrink-0"></div>
                
                <div className="flex flex-col">
                  <div className="text-hennessey-blue text-7xl font-normal mb-3 leading-none">150+</div>
                  <div className="text-hennessey-black text-base font-medium">Vetted Suppliers</div>
                </div>
                
                <div className="h-20 w-[1px] bg-gray-200 flex-shrink-0"></div>
                
                <div className="flex flex-col">
                  <div className="text-hennessey-blue text-7xl font-normal mb-3 leading-none">$10M+</div>
                  <div className="text-hennessey-black text-base font-medium">Cost Savings Delivered</div>
                </div>
              </div>
            </div>

            {/* Company Logos Image - Closer to statistics */}
            <div className="flex items-start">
              <div className="w-full">
                <Image
                  src="/site-assets/company-logos.png"
                  alt="Company logos"
                  width={1000}
                  height={180}
                  className="object-contain"
                  style={{mixBlendMode: 'multiply'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
