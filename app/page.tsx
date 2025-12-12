import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Hero Section Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Thin blue line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-hennessey-blue z-50" />
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/site-assets/start-img.jpg"
            alt="Office setting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay Gradient - darker on right, lighter on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/80 z-10" />

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-12 py-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/site-assets/start-logo.png"
              alt="Hennessey & Company Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <a href="#" className="text-hennessey-white text-lg font-medium hover:opacity-80 transition-opacity">
              Our Firm
            </a>
            <a href="#" className="text-hennessey-white text-lg font-medium hover:opacity-80 transition-opacity">
              Projects
            </a>
            <a href="#" className="text-hennessey-white text-lg font-medium hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#" className="text-hennessey-white text-lg font-medium hover:opacity-80 transition-opacity">
              News & Insights
            </a>
            <a href="#" className="text-hennessey-white text-lg font-medium hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>

          {/* Book a Consultation Button */}
          <button className="bg-hennessey-white text-hennessey-black px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
            Book a Consultation
          </button>
        </nav>

        {/* Main Content - Left Side */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20 max-w-[800px]">
          {/* Main Heading */}
          <h1 className="text-hennessey-white text-7xl font-bold leading-tight mb-10">
            Procurement solutions for the construction industry.
          </h1>

          {/* Get in touch Button */}
          <button className="bg-hennessey-blue text-hennessey-white px-12 py-6 rounded-lg flex items-center gap-4 mb-8 hover:opacity-90 transition-opacity group text-lg">
            <span className="font-medium">Get in touch</span>
            <div className="w-8 h-8 rounded-full bg-hennessey-white/20 flex items-center justify-center group-hover:bg-hennessey-white/30 transition-colors">
              <svg
                className="w-4 h-4 text-hennessey-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Descriptive Paragraph */}
          <p className="text-hennessey-white/90 text-xl leading-relaxed mb-8">
            Construction consulting that brings clarity to pre-construction, procurement, and supply chain management. We help plan better, buy smarter, and build with confidence.
          </p>
        </div>

        {/* Scroll Indicator - Bottom Left */}
        <div className="absolute bottom-12 left-16 z-20">
          <p className="text-hennessey-white/80 text-lg">
            Scroll to know more ↓
          </p>
        </div>

        {/* Vertical Section Indicator - Right Edge */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
          {/* Exclamation Mark */}
          <div className="text-hennessey-white text-3xl font-bold">!</div>
          {/* Three Dots */}
          <div className="flex flex-col gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-hennessey-white"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-hennessey-white"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-hennessey-white"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
