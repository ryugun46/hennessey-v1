import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Hero Section Container */}
      <div className="relative w-[1440px] h-[850px] overflow-hidden">
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
        <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/site-assets/start-logo.png"
              alt="Hennessey & Company Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-hennessey-white text-sm font-medium tracking-wide">
              HENNESSEY & COMPANY
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-hennessey-white text-sm font-medium hover:opacity-80 transition-opacity">
              Our Firm
            </a>
            <a href="#" className="text-hennessey-white text-sm font-medium hover:opacity-80 transition-opacity">
              Projects
            </a>
            <a href="#" className="text-hennessey-white text-sm font-medium hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#" className="text-hennessey-white text-sm font-medium hover:opacity-80 transition-opacity">
              News & Insights
            </a>
            <a href="#" className="text-hennessey-white text-sm font-medium hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>

          {/* Book a Consultation Button */}
          <button className="bg-hennessey-white text-hennessey-black px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Book a Consultation
          </button>
        </nav>

        {/* Main Content - Left Side */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 max-w-[600px]">
          {/* Main Heading */}
          <h1 className="text-hennessey-white text-5xl font-bold leading-tight mb-8">
            Procurement solutions for the construction industry.
          </h1>

          {/* Get in touch Button */}
          <button className="bg-hennessey-blue text-hennessey-white px-8 py-4 rounded-lg flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity group">
            <span className="font-medium">Get in touch</span>
            <div className="w-6 h-6 rounded-full bg-hennessey-white/20 flex items-center justify-center group-hover:bg-hennessey-white/30 transition-colors">
              <svg
                className="w-3 h-3 text-hennessey-white"
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
          <p className="text-hennessey-white/90 text-base leading-relaxed mb-8">
            Construction consulting that brings clarity to pre-construction, procurement, and supply chain management. We help plan better, buy smarter, and build with confidence.
          </p>
        </div>

        {/* Scroll Indicator - Bottom Left */}
        <div className="absolute bottom-8 left-12 z-20">
          <p className="text-hennessey-white/80 text-sm">
            Scroll to know more ↓
          </p>
        </div>

        {/* Vertical Section Indicator - Right Edge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
          {/* Exclamation Mark */}
          <div className="text-hennessey-white text-xl font-bold">!</div>
          {/* Three Dots */}
          <div className="flex flex-col gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-hennessey-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-hennessey-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-hennessey-white"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
