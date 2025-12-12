import Image from 'next/image'
import MissionSection from './components/MissionSection'
import ProcessSection from './components/ProcessSection'
import TeamSection from './components/TeamSection'

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] overflow-hidden mx-auto my-0">
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
        <nav className="absolute top-0 left-0 right-0 z-20 px-12 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/site-assets/start-logo.png"
              alt="Hennessey & Company Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-hennessey-white text-base font-medium hover:opacity-80 transition-opacity">
              Our Firm
            </a>
            <a href="#" className="text-hennessey-white text-base font-medium hover:opacity-80 transition-opacity">
              Projects
            </a>
            <a href="#" className="text-hennessey-white text-base font-medium hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#" className="text-hennessey-white text-base font-medium hover:opacity-80 transition-opacity">
              News & Insights
            </a>
            <a href="#" className="text-hennessey-white text-base font-medium hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>

          {/* Book a Consultation Button */}
          <button className="bg-hennessey-white text-hennessey-black px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
            Book a Consultation
          </button>
        </nav>

        {/* Main Content - Left Side */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20 max-w-[700px]">
          {/* Main Heading */}
          <h1 className="text-hennessey-white text-5xl font-bold leading-tight mb-6">
            Procurement solutions for the construction industry.
          </h1>

          {/* Get in touch Button */}
          <button className="bg-hennessey-blue text-hennessey-white px-6 py-3 rounded-full flex items-center gap-4 mb-6 hover:opacity-90 transition-all group text-base shadow-lg">
            <span className="font-medium pl-2">Get in touch</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-hennessey-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </button>

          {/* Descriptive Paragraph */}
          <p className="text-hennessey-white/90 text-lg leading-relaxed mb-6">
            Construction consulting that brings clarity to pre-construction, procurement, and supply chain management. We help plan better, buy smarter, and build with confidence.
          </p>
        </div>

        {/* Scroll Indicator - Bottom Left */}
        <div className="absolute bottom-8 left-16 z-20">
          <p className="text-hennessey-white/80 text-base">
            Scroll to know more ↓
          </p>
        </div>

        {/* Vertical Section Indicator - Right Edge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
          {/* Exclamation Mark */}
          <div className="text-hennessey-white text-2xl font-bold">!</div>
          {/* Three Dots */}
          <div className="flex flex-col gap-1.5">
            <div className="w-2 h-2 rounded-full bg-hennessey-white"></div>
            <div className="w-2 h-2 rounded-full bg-hennessey-white"></div>
            <div className="w-2 h-2 rounded-full bg-hennessey-white"></div>
          </div>
        </div>
        </div>
      </div>

      {/* Mission Section */}
      <MissionSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Team Section */}
      <TeamSection />
    </main>
  )
}
