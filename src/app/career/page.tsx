import Link from "next/link";

const jobs = [
  {
    title: "Software Engineer",
    location: "Remote (Chile)",
    type: "Full-time",
    summary:
      "Build and scale cloud-first systems handling hundreds of terabytes of data. Own the full lifecycle of your work — from architecture and implementation to deployment and monitoring.",
    stack: ["Java", "Python", "React", "AWS", "GCP", "MySQL / Aurora", "BigQuery"],
    responsibilities: [
      "Work with product and internal stakeholders to define requirements and design scalable solutions.",
      "Develop and maintain backend services in Java and complementary components in Python.",
      "Build, maintain, and optimize APIs, distributed components, and integrations.",
      "Implement unit, integration, and automated tests.",
      "Use AI tools daily for coding acceleration, architecture exploration, troubleshooting, and documentation.",
      "Participate in deployments, release processes, observability, and performance tuning.",
      "Follow and enforce security and compliance standards.",
    ],
    requirements: [
      "3+ years of experience as a Software Engineer.",
      "Solid expertise in Java, with working experience in Python.",
      "Experience with AWS or GCP architectures and modern distributed systems.",
      "Strong understanding of relational databases (MySQL/Aurora) and large-scale data processing.",
      "High proficiency using AI tools.",
      "Strong experience with CI/CD and automated testing.",
      "Fluency in Spanish and English (written and spoken).",
    ],
    niceToHave: [
      "Experience with BigQuery or analytical data systems.",
      "Exposure to Docker, Kubernetes, or serverless architectures.",
    ],
  },
  {
    title: "Data Engineer",
    location: "Remote (Chile)",
    type: "Full-time",
    summary:
      "Build and scale the data infrastructure powering our core products and analytics. Work closely with business stakeholders and Data Scientists to translate analytical requirements into production-grade pipelines.",
    stack: ["Python", "Java", "GCP (BigQuery, Dataflow, Cloud Storage)", "AWS (S3, Lambda, EC2)", "MySQL"],
    responsibilities: [
      "Design, build, and maintain ETL/ELT pipelines and ingestion systems at massive scale.",
      "Work closely with business teams and Data Scientists to translate requirements into production-ready pipelines.",
      "Use AI tools extensively to accelerate development, improve validation, and automate documentation.",
      "Implement strong data validation, automated testing, and monitoring frameworks.",
      "Apply and enforce security and compliance standards.",
      "Own deployments and reliability of data workflows, ensuring scalability as data grows.",
      "Build and enforce Data Quality frameworks including validation rules, anomaly detection, and monitoring dashboards.",
    ],
    requirements: [
      "3+ years of experience as a Data Engineer.",
      "Strong expertise in Python for data processing.",
      "Excellent SQL skills and experience with MySQL.",
      "Hands-on experience with BigQuery and cloud-native data platforms.",
      "Experience working with large-scale datasets (hundreds of GB to many TB).",
      "Strong, hands-on expertise in Data Quality frameworks and observability.",
      "Fluency in Spanish and English (written and spoken).",
    ],
    niceToHave: [
      "Experience with orchestration tools like Airflow.",
      "Familiarity with infrastructure-as-code or containerization.",
      "Exposure to cloud optimization techniques.",
    ],
  },
];

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-16 md:py-24">
      {/* Join Our Team */}
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          JOIN OUR TEAM
        </h2>
      </div>

      {/* Open Roles */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-tc-blue">View open roles</h2>
        <div className="mt-6 space-y-6">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="rounded-xl border border-white/10 bg-white/5 p-8"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-tc-blue/40 bg-tc-blue/10 px-3 py-1 text-xs font-medium text-tc-blue">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="https://www.linkedin.com/company/truckercloud/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-tc-button px-6 py-2.5 text-sm font-medium text-white hover:bg-tc-button-hover transition-colors"
                >
                  Apply on LinkedIn
                </Link>
              </div>

              {/* Summary */}
              <p className="mt-4 text-gray-400">{job.summary}</p>

              {/* Tech Stack */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">What You&apos;ll Do</p>
                <ul className="mt-2 space-y-1.5">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tc-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">What We&apos;re Looking For</p>
                <ul className="mt-2 space-y-1.5">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tc-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">Nice to Have</p>
                <ul className="mt-2 space-y-1.5">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
