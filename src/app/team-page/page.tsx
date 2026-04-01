import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Spencer Mitchell",
    role: "CEO",
    photo: "/images/team/spencer-mitchell.png",
    linkedin: "https://www.linkedin.com/in/spencer-mitchell-b1179035/",
  },
  {
    name: "Tiana Schowe",
    role: "Head of Commercial Strategy",
    photo: "/images/team/tiana-schowe.png",
    linkedin: "https://www.linkedin.com/in/tianaschowe/",
  },
  {
    name: "Sam McNearney",
    role: "Head of Operations",
    photo: "/images/team/sam-mcnearney.png",
    linkedin: "https://www.linkedin.com/in/sam-mcnearney-402bb367/",
  },
  {
    name: "Reed Peets",
    role: "Market Operations & Customer Success",
    photo: "/images/team/reed-peets.png",
    linkedin: "https://www.linkedin.com/in/reed-peets-286b96229/",
  },
  {
    name: "Claudia Sep\u00FAlveda Salfate",
    role: "Product Leader",
    photo: "/images/team/claudia-sepulveda.png",
    linkedin: "https://www.linkedin.com/in/claudia-sep%C3%BAlveda-salfate-57621729/",
  },
  {
    name: "Sebasti\u00E1n Arancibia",
    role: "Technology Leader",
    photo: "/images/team/sebastian-arancibia.png",
    linkedin: "https://www.linkedin.com/in/sarancibiao/",
  },
  {
    name: "Simone Castelli",
    role: "Data Science",
    photo: "/images/team/simone-castelli.png",
    linkedin: "",
  },
  {
    name: "Geoff Werner",
    role: "Strategic Advisor",
    photo: "/images/team/geoff-werner.png",
    linkedin: "https://www.linkedin.com/in/geoff-werner-3b280482/",
  },
  {
    name: "Jennifer Cancino",
    role: "Senior Product Manager",
    photo: "/images/team/jennifer-cancino.png",
    linkedin: "https://www.linkedin.com/in/jennifercancino/",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-tc-blue">
          About TruckerCloud
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          At TruckerCloud, we are dedicated to revolutionizing the
          transportation industry with innovative technology and exceptional
          service. Our team of experienced leaders drives our mission to deliver
          cutting-edge solutions that empower our clients to succeed in a
          dynamic market.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            <h2 className="mt-4 text-lg font-bold text-white">
              {member.name}
            </h2>
            <p className="text-sm font-medium text-tc-blue">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-tc-blue hover:underline"
              >
                LinkedIn Profile
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-gray-400">
          Together, our leadership team is committed to pushing the boundaries
          of what&apos;s possible in transportation technology, delivering
          solutions that empower our clients and transform the industry.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Want to join us?
        </h2>
        <div className="mt-6">
          <Link
            href="/career"
            className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}
