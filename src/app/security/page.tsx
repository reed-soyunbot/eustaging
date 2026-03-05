export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-16 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Security
      </h1>

      <div className="mt-12 space-y-14">
        {/* Organizational Security */}
        <section>
          <h2 className="text-2xl font-bold text-tc-blue">
            Organizational Security
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Information Security Program
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We have an Information Security Program in place that is
                communicated throughout the organization. Our Information
                Security Program follows the criteria set forth by the SOC 2
                Framework. SOC 2 is a widely known information security auditing
                procedure created by the American Institute of Certified Public
                Accountants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Third-Party Audits
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Our organization undergoes independent third-party assessments
                to test our security and compliance controls.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Third-Party Penetration Testing
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We perform an independent third-party penetration at least
                annually to ensure that the security posture of our services is
                uncompromised.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Roles and Responsibilities
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Roles and responsibilities related to our Information Security
                Program and the protection of our customer&apos;s data are well
                defined and documented. Our team members are required to review
                and accept all of the security policies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Security Awareness Training
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Our team members are required to go through employee security
                awareness training covering industry standard practices and
                information security topics such as phishing and password
                management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Confidentiality
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All team members are required to sign and adhere to an industry
                standard confidentiality agreement prior to their first day of
                work.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Background Checks
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We perform background checks on all new team members in
                accordance with local laws.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Security */}
        <section>
          <h2 className="text-2xl font-bold text-tc-blue">Cloud Security</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Cloud Infrastructure Security
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All of our services are hosted with Amazon Web Services (AWS)
                and Google Cloud Platform (GCP). They employ a robust security
                program with multiple certifications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Data Hosting Security
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All of our data is hosted on Amazon Web Services (AWS) and
                Google Cloud Platform (GCP) databases. These databases are all
                located in the United States.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Encryption at Rest
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All databases are encrypted at rest.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Encryption in Transit
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Our applications encrypt in transit with TLS/SSL only.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Vulnerability Scanning
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We perform vulnerability scanning and actively monitor for
                threats.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Logging and Monitoring
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We actively monitor and log various cloud services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Business Continuity and Disaster Recovery
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We use our data hosting provider&apos;s backup services to
                reduce any risk of data loss in the event of a hardware failure.
                We utilize monitoring services to alert the team in the event of
                any failures affecting users.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Incident Response
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We have a process for handling information security events which
                includes escalation procedures, rapid mitigation and
                communication.
              </p>
            </div>
          </div>
        </section>

        {/* Access Security */}
        <section>
          <h2 className="text-2xl font-bold text-tc-blue">Access Security</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Permissions and Authentication
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Access to cloud infrastructure and other sensitive tools are
                limited to authorized employees who require it for their role.
                Where available we have Single Sign-on (SSO), 2-factor
                authentication (2FA) and strong password policies to ensure
                access to cloud services are protected.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Least Privilege Access Control
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We follow the principle of least privilege with respect to
                identity and access management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Quarterly Access Reviews
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We perform quarterly access reviews of all team members with
                access to sensitive systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Password Requirements
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All team members are required to adhere to a minimum set of
                password requirements and complexity for access.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Password Managers
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                All company issued laptops utilize a password manager for team
                members to manage passwords and maintain password complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Vendor and Risk Management */}
        <section>
          <h2 className="text-2xl font-bold text-tc-blue">
            Vendor and Risk Management
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Annual Risk Assessments
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                We undergo at least annual risk assessments to identify any
                potential threats, including considerations for fraud.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Vendor Risk Management
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Vendor risk is determined and the appropriate vendor reviews are
                performed prior to authorizing a new vendor.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8">
        <p className="text-gray-400">
          If you have any questions, comments or concerns or if you wish to
          report a potential security issue, please contact{" "}
          <a
            href="mailto:support@truckercloud.com"
            className="text-tc-blue hover:underline"
          >
            support@truckercloud.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
