import Image from 'next/image'
import PartnerLogos from './PartnerLogos'

export default function MissionSection() {
  return (
    <section className="w-full bg-hennessey-white py-24 px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="flex items-start gap-16">
          {/* Left Side - Our Mission Label */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-hennessey-blue flex-shrink-0"></div>
            <h2 className="text-hennessey-black text-xl font-medium whitespace-nowrap">Our Mission</h2>
          </div>

          {/* Right Side - Mission Statement and Button */}
          <div className="flex-1">
            <p className="text-hennessey-black text-6xl font-bold leading-tight mb-10 max-w-5xl">
              Our mission is simple: To reduce complexity, improve reliability, and deliver measurable value across every project we touch.
            </p>
            <button className="bg-gray-50 text-hennessey-black px-8 py-4 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all font-medium text-base">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-16">
          {/* Left Side - Image Card with Button Overlay */}
          <div className="relative w-full max-w-[550px] flex-shrink-0">
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

          {/* Right Side - Statistics and Logos */}
          <div className="flex-1 flex flex-col justify-between" style={{minHeight: '412.5px'}}>
            {/* Statistics */}
            <div className="flex items-start gap-12 mb-auto">
              <div className="flex flex-col">
                <div className="text-hennessey-blue text-7xl font-bold mb-3 leading-none">95%</div>
                <div className="text-hennessey-black text-base font-medium">Project Reliability</div>
              </div>
              
              <div className="h-20 w-[1px] bg-gray-200 flex-shrink-0"></div>
              
              <div className="flex flex-col">
                <div className="text-hennessey-blue text-7xl font-bold mb-3 leading-none">150+</div>
                <div className="text-hennessey-black text-base font-medium">Vetted Suppliers</div>
              </div>
              
              <div className="h-20 w-[1px] bg-gray-200 flex-shrink-0"></div>
              
              <div className="flex flex-col">
                <div className="text-hennessey-blue text-7xl font-bold mb-3 leading-none">$10M+</div>
                <div className="text-hennessey-black text-base font-medium">Cost Savings Delivered</div>
              </div>
            </div>

            {/* Partner Logos - Aligned to bottom */}
            <div className="mt-auto">
              <PartnerLogos />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
