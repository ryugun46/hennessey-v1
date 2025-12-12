import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface TeamMember {
  id: number
  name: string
  title: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  // Row 1
  {
    id: 1,
    name: 'Han Seung-min',
    title: 'Head of Electronics Division',
    imageUrl: '/site-assets/ceo.jpg'
  },
  {
    id: 2,
    name: 'Yujun Yang',
    title: 'Chief Executive Officer',
    imageUrl: '/site-assets/ceo.jpg'
  },
  {
    id: 3,
    name: 'Kim Ji-hoon',
    title: 'Chief Operating Officer',
    imageUrl: '/site-assets/ceo.jpg'
  },
  {
    id: 4,
    name: 'Lee Hyun-woo',
    title: 'Director of Construction',
    imageUrl: '/site-assets/ceo.jpg'
  },
  // Row 2
  {
    id: 5,
    name: 'Choi Soo-jin',
    title: 'Head of Interior Design',
    imageUrl: '/site-assets/ceo.jpg'
  },
  {
    id: 6,
    name: 'Jung Da-eun',
    title: 'Marketing & Communications Manager',
    imageUrl: '/site-assets/ceo.jpg'
  },
  {
    id: 7,
    name: 'Han Seung-min',
    title: 'Head of Electronics & Division',
    imageUrl: '/site-assets/ceo.jpg'
  }
]

export default function TeamSection() {
  return (
    <section className="w-full bg-hennessey-white py-20 px-16">
      {/* Header Section */}
      <div className="mb-16 pl-16 pr-16">
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
      <div className="pl-16 pr-16">
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
              
              {/* Text overlay with crystal clear blur effect using Card */}
              <Card className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-lg border-0 shadow-lg rounded-2xl z-10">
                <CardContent className="p-6">
                  <h3 className="text-white text-2xl font-bold mb-1.5 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white text-base font-normal leading-tight">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* About Us Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-hennessey-blue p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-hennessey-white text-5xl font-bold mb-8">
                About Us
              </h3>
              <p className="text-hennessey-white text-lg leading-relaxed">
                Behind every project is a team dedicated to smarter planning, reliable procurement, and measurable results.
              </p>
            </div>

            {/* Work With Us button */}
            <button className="bg-hennessey-white text-hennessey-blue px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity self-start">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

