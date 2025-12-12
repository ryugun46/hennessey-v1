export default function PartnerLogos() {
  const logoColor = "#666666"; // Medium-dark gray color for logos

  return (
    <div className="flex items-baseline gap-10">
      {/* LinkedIn Logo - "Linked" text + rounded box with "in" */}
      <div className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
        <span className="text-[16px] font-semibold text-[#666666] mr-1">Linked</span>
        <div className="w-[18px] h-[18px] bg-[#666666] rounded-[3px] flex items-center justify-center">
          <span className="text-[11px] font-bold text-white">in</span>
        </div>
      </div>

      {/* Instagram Logo - Cursive/script font */}
      <div className="hover:opacity-80 transition-opacity cursor-pointer">
        <span 
          className="text-[18px] text-[#666666]"
          style={{
            fontFamily: "'Brush Script MT', 'Brush Script', cursive",
            fontStyle: 'italic'
          }}
        >
          Instagram
        </span>
      </div>

      {/* Apple Pay Logo - Apple symbol + "Pay" */}
      <div className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M13.45 1.77c-0.97 0.55-2.2 0.98-3.45 0.93-0.07-1.18 0.4-2.35 1.18-2.87 0.78-0.52 1.97-0.91 3.01-0.43 0.36 1.29-0.05 2.56-0.74 3.37zm0.44 2.31c-1.33-0.08-2.46 0.78-3.08 0.78-0.64 0-1.59-0.76-2.63-0.74-1.36 0.03-2.61 0.79-3.31 2.01-1.41 2.44-0.37 6.06 1 8.04 0.68 0.99 1.49 2.1 2.56 2.06 1.04-0.05 1.43-0.67 2.69-0.67 1.26 0 1.61 0.67 2.71 0.65 1.12-0.02 1.83-1.01 2.5-2.01 0.79-1.15 1.11-2.26 1.13-2.32-0.02 0-2.17-0.83-2.2-3.3-0.02-2.09 1.71-3.09 1.78-3.14-0.97-1.41-2.47-1.56-3-1.59z" 
            fill={logoColor}
          />
        </svg>
        <span className="text-[14px] font-bold text-[#666666]">Pay</span>
      </div>

      {/* Amazon Logo - lowercase "amazon" with curved arrow */}
      <div className="relative hover:opacity-80 transition-opacity cursor-pointer pt-1">
        <span className="text-[16px] font-bold text-[#666666] lowercase">amazon</span>
        <svg 
          className="absolute bottom-0 left-0" 
          width="80" 
          height="10" 
          viewBox="0 0 80 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M3 8 Q40 2 75 8" 
            stroke={logoColor} 
            strokeWidth="1.8" 
            fill="none" 
            strokeLinecap="round"
          />
          <path 
            d="M69 6 L75 8 L73 10" 
            stroke={logoColor} 
            strokeWidth="1.8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
