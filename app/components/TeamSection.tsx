import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  title: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Michael Anderson',
    title: 'Chief Executive Officer',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Chief Operating Officer',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'David Martinez',
    title: 'Head of Procurement Division',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Emily Thompson',
    title: 'Director of Operations',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'James Wilson',
    title: 'Head of Supply Chain',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Rachel Kim',
    title: 'Marketing & Communications Manager',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=1000&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Robert Harrison',
    title: 'Head of Construction Advisory',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80'
  }
]

export default function TeamSection() {
  return (
    <section className="w-full bg-hennessey-white py-20 px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-start justify-between">
          {/* Left side with text */}
          <div className="flex items-start gap-6 max-w-4xl">
            {/* Blue decorative dot */}
            <div className="w-4 h-4 rounded-full bg-hennessey-blue flex-shrink-0 mt-2" />
            
            {/* Header text */}
            <h2 className="text-hennessey-black text-5xl font-bold leading-tight">
              Nice to meet you. We bring reliability, transparency, and expertise to every construction procurement strategy.
            </h2>
          </div>

          {/* Let's Talk button */}
          <button className="bg-hennessey-blue text-hennessey-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex-shrink-0 ml-8">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {/* Team Member Cards */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Team member image */}
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-hennessey-white text-2xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-hennessey-white/80 text-base">
                  {member.title}
                </p>
              </div>
            </div>
          ))}

          {/* About Us Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-hennessey-blue p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-hennessey-white text-4xl font-bold mb-6">
                About Us
              </h3>
              <p className="text-hennessey-white/90 text-lg leading-relaxed">
                Behind every project is a team dedicated to smarter planning, reliable procurement, and measurable results.
              </p>
            </div>

            {/* Work With Us button */}
            <button className="bg-hennessey-white text-hennessey-blue px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity self-start">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

