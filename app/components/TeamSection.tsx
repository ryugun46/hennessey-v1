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
    <section className="w-full max-w-[1440px] bg-hennessey-white py-12 px-16 mx-auto my-0">
      {/* Header Section */}
      <div className="mb-8 pl-16 pr-16">
        <div className="flex items-start justify-between">
          {/* Left side with text */}
          <div className="flex items-start gap-6 max-w-4xl">
            {/* Blue decorative dot */}
            <div className="w-4 h-4 rounded-full bg-hennessey-blue flex-shrink-0 mt-2" />
            
            {/* Header text */}
            <h2 className="text-hennessey-black text-3xl font-bold leading-tight">
              Nice to meet you. We bring reliability, transparency, and expertise to every construction procurement strategy.
            </h2>
          </div>

          {/* Let's Talk button */}
          <button className="bg-hennessey-blue text-hennessey-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity flex-shrink-0 ml-8">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Team Grid */}
      <div className="pl-16 pr-16">
        <div className="grid grid-cols-4 gap-4">
          {/* Team Member Cards */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative h-[450px] w-auto rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Team member image */}
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
              
              {/* Text overlay with crystal clear blur effect using Card */}
              <Card className="absolute bottom-3 left-3 right-3 bg-black/20 backdrop-blur-lg border-0 shadow-lg rounded-xl z-10">
                <CardContent className="p-4">
                  <h3 className="text-white text-lg font-bold mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white text-sm font-normal leading-tight">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* About Us Card */}
          <div className="relative h-[450px] w-auto rounded-2xl overflow-hidden bg-hennessey-blue p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-hennessey-white text-3xl font-bold mb-4">
                About Us
              </h3>
              <p className="text-hennessey-white text-base leading-relaxed">
                Behind every project is a team dedicated to smarter planning, reliable procurement, and measurable results.
              </p>
            </div>

            {/* Work With Us button */}
            <button className="bg-hennessey-white text-hennessey-blue px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity self-start">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

