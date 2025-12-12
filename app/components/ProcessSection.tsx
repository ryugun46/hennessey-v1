'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProcessBlock = 'discover' | 'strategize' | 'execute' | 'optimize'

export default function ProcessSection() {
  const [expandedBlock, setExpandedBlock] = useState<ProcessBlock>('discover')

  const toggleBlock = (block: ProcessBlock) => {
    setExpandedBlock(expandedBlock === block ? 'discover' : block)
  }

  return (
    <section className="w-full bg-hennessey-white py-24 px-16">
      {/* Top Section - Label, Heading, and Button */}
      <div className="mb-16 pl-16 pr-16">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            {/* Our Process Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-hennessey-blue flex-shrink-0"></div>
              <h2 className="text-hennessey-black text-xl font-medium">Our Process</h2>
            </div>

            {/* Main Heading */}
            <h3 className="text-hennessey-black text-5xl font-normal leading-tight max-w-4xl">
              We bring structure and transparency to every stage of construction consulting to procurement and delivery.
            </h3>
          </div>

          {/* Book a Consultation Button */}
          <button className="bg-hennessey-blue text-hennessey-white px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity flex-shrink-0 ml-8">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="pl-16 pr-16">
        <div className="flex gap-8">
          {/* Left Column - Image */}
          <div className="w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/site-assets/process-image.png"
                alt="Construction process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Accordion Blocks */}
          <div className="w-1/2 flex flex-col gap-4">
            {/* Discover Block */}
            <div
              className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedBlock === 'discover'
                  ? 'bg-hennessey-blue text-hennessey-white'
                  : 'bg-white text-hennessey-black'
              }`}
              onClick={() => toggleBlock('discover')}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-medium">Discover</h4>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {expandedBlock === 'discover' ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {expandedBlock === 'discover' && (
                  <div className="mt-6">
                    <p className="text-base leading-relaxed opacity-90">
                      We bring structure and transparency to every stage of construction consulting, from pre-construction planning to procurement and supply chain management. Implement reliable, cost-effective procurement solutions that keep your construction projects on time and on budget.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Strategize Block */}
            <div
              className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedBlock === 'strategize'
                  ? 'bg-hennessey-blue text-hennessey-white'
                  : 'bg-white text-hennessey-black'
              }`}
              onClick={() => toggleBlock('strategize')}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-medium">Strategize</h4>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {expandedBlock === 'strategize' ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {expandedBlock === 'strategize' && (
                  <div className="mt-6">
                    <p className="text-base leading-relaxed opacity-90">
                      Develop comprehensive procurement strategies aligned with your project goals. We analyze market conditions, identify optimal suppliers, and create actionable plans that minimize risk while maximizing value.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Execute Block */}
            <div
              className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedBlock === 'execute'
                  ? 'bg-hennessey-blue text-hennessey-white'
                  : 'bg-white text-hennessey-black'
              }`}
              onClick={() => toggleBlock('execute')}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-medium">Execute</h4>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {expandedBlock === 'execute' ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {expandedBlock === 'execute' && (
                  <div className="mt-6">
                    <p className="text-base leading-relaxed opacity-90">
                      Implement procurement solutions with precision and efficiency. Our team manages vendor relationships, oversees contract negotiations, and ensures seamless coordination throughout the procurement process.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Optimize Block */}
            <div
              className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedBlock === 'optimize'
                  ? 'bg-hennessey-blue text-hennessey-white'
                  : 'bg-white text-hennessey-black'
              }`}
              onClick={() => toggleBlock('optimize')}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-medium">Optimize</h4>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {expandedBlock === 'optimize' ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {expandedBlock === 'optimize' && (
                  <div className="mt-6">
                    <p className="text-base leading-relaxed opacity-90">
                      Continuously improve procurement performance through data analysis and feedback loops. We identify opportunities for cost reduction, process improvements, and enhanced supplier relationships.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
