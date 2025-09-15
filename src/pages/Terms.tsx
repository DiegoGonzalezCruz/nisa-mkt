import React from 'react';
import { Footer } from '../components/Footer';
export const Terms = () => {
  return <div className="flex flex-col min-h-screen">
      <main className="py-section-mobile md:py-section-desktop relative flex-grow overflow-hidden">
        {/* Background pattern - now using relative positioning */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
        {/* XL Cyan gradient blob */}
        <div className="absolute right-0 bottom-[10%] w-[1300px] h-[1300px] bg-gradient-to-bl from-cyan-400/15 via-primary-300/10 to-teal-200/15 rounded-[55%_45%_50%_50%] blur-3xl -z-10" />
        {/* Background gradient blobs - contained within main content */}
        <div className="absolute top-0 left-1/4 w-[850px] h-[850px] bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-teal-400/10 rounded-[55%_45%_60%_40%] blur-3xl -z-10" />
        <div className="absolute top-[25%] right-0 w-[750px] h-[750px] bg-gradient-to-tl from-purple-400/10 via-violet-400/10 to-indigo-400/10 rounded-[40%_60%_45%_55%] blur-3xl -z-10 animate-float" style={{
        animationDelay: '1.5s'
      }} />
        <div className="absolute top-[50%] -left-[200px] w-[800px] h-[800px] bg-gradient-to-tr from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-[60%_40%_50%_50%] blur-3xl -z-10 animate-float" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-gradient-to-bl from-emerald-400/10 via-green-400/10 to-lime-400/10 rounded-[45%_55%_40%_60%] blur-3xl -z-10 animate-float" style={{
        animationDelay: '2s'
      }} />
        {/* Content container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-cyan-900 mb-6 text-center">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-500 mb-8">Last Updated: July 2025</p>
            <h2 className="text-2xl md:text-2xl font-serif font-medium text-gray-600">
              Nisa Platform End User License Agreement
            </h2>
            <p className="mb-8 text-gray-700">
              This Agreement contains a dispute resolution provision that waives
              your right to trial by jury, participation in a class or
              representative action or proceeding, and, except where otherwise
              provided herein, requires disputes to be resolved through binding
              arbitration as set out in more detail in Section 18 (Dispute
              Resolution), below. Read this Agreement carefully as it affects
              your legal rights.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              General
            </h3>
            <p className="mb-6 text-gray-700">
              This End User License Agreement (this "Agreement") is between you,
              the user of this website (this "Website") and Teaching Lab
              Ventures, Inc. ("we," "us," and "our") and governs your access to
              and use of the Website, the services made available through the
              Website (the "Services"), and any information provided, output, or
              otherwise obtained through the foregoing, including, without
              limitation, text, graphics, summary statistics, audio, video, or
              any other materials (collectively, "Materials"). Please read this
              Agreement carefully and completely before using the Website,
              Services, or Materials (collectively, the "Platform"). You and we
              may each be referred to as a "Party" and collectively as the
              "Parties."
            </p>
            <p className="mb-6 text-gray-700">
              BY CLICKING ON ANY "ACCEPT," "AGREE," OR SIMILARLY WORDED CHECKBOX
              OR BUTTON, SUBMITTING ANY INFORMATION TO US, OR ACCESSING OR USING
              THE PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT
              AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE PLATFORM.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Scope of Use
            </h3>
            <p className="mb-6 text-gray-700">
              The Platform is made available by us and our subsidiaries and
              affiliates (collectively, the Teaching Lab family of companies or
              "Teaching Labs"). You must comply with all applicable laws,
              regulations, and the rules of our service providers when using the
              Platform. Subject to your compliance with this Agreement and all
              applicable international, federal, state, and local laws, rules,
              and regulations, we grant you a limited, revocable, nonexclusive,
              non-sublicensable, non-transferable, license to access and use the
              Platform solely in connection with your internal, business use and
              not for republication, distribution, assignment, sublicense, sale,
              preparation of derivative works, or other use.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modifications
            </h3>
            <p className="mb-6 text-gray-700">
              We reserve the right to supplement, change, or otherwise modify
              this Agreement, the Platform, and all functionality available
              thereon at any time without advance notice to you by posting to
              this Website and updating the "Last Updated" date. If you continue
              to use the Services after such modifications are posted, you will
              be bound by such changes. In the case of substantial revisions, we
              may, in our sole discretion, provide advance notice to you through
              this Website or through any other communication method which you
              have consented to or approved. Unless explicitly indicated, any
              new Material, information, products, services, or functionality
              added to the Platform will also be subject to this Agreement
              effective upon the date made available to you. You are encouraged
              to login to the Platform and review this Agreement periodically
              for updates and changes.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Restrictions on Use
            </h3>
            <p className="mb-6 text-gray-700">
              You will not, and will not permit any third party to, do any of
              the following with respect to the Platform or any infrastructure,
              networks, systems, or technologies used to host, support, or
              deliver the Platform (collectively, the "Supporting
              Infrastructure"):
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                attempt to gain unauthorized access to any portion of the
                Platform or Supporting Infrastructure;
              </li>
              <li>
                attempt to gain unauthorized access to or otherwise misuse any
                Materials;
              </li>
              <li>
                decompile, disassemble, reverse engineer, or otherwise attempt
                to derive the source code or underlying structure of any
                software used to provide the Platform or Supporting
                Infrastructure;
              </li>
              <li>frame or mirror the Website or any part thereof;</li>
              <li>
                use any robot, spider, scraper, or other automated or manual
                process to access the Platform or Supporting Infrastructure, or
                to copy any Materials;
              </li>
              <li>
                remove, obscure, or alter any proprietary rights notices
                (including copyright or trademark notices) of ours or of our
                affiliates, partners, suppliers, or licensors;
              </li>
              <li>
                modify, adapt, translate, enhance, or create derivative works of
                the Platform or any part thereof;
              </li>
              <li>
                disable, interfere with, disrupt, or otherwise impair the
                operation or availability of the Platform or Supporting
                Infrastructure;
              </li>
              <li>
                probe, scan, or test the vulnerability of the Platform or
                Supporting Infrastructure, or breach or circumvent any security
                or authentication measures protecting the same;
              </li>
              <li>
                use the Platform to engage in any unlawful, fraudulent, or
                criminal activity, or for any purpose prohibited by applicable
                law; or
              </li>
              <li>
                interfere with or disrupt any other user's access to or
                enjoyment of the Platform.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Privacy Policy
            </h3>
            <p className="mb-6 text-gray-700">
              You may view a copy of our privacy policy linked here ("Privacy
              Policy"), which describes how we collect, use, and share
              information through or in connection with the Platform. The
              Privacy Policy is incorporated into this Agreement and governs our
              handling of any information you provide or make available to us
              through or in connection with the Platform.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Access & Security
            </h3>
            <p className="mb-6 text-gray-700">
              Access to the Services is provided at our sole discretion. To use
              the Services, you may need to register for an account which will
              require submission of certain information which may include your
              name, phone number, email address, or other contact details. You
              agree to provide accurate, current, and complete information. If
              any information you provide is false, outdated, or incomplete, or
              if we have reason to believe it is, we may suspend or terminate
              your access to the Services, now or in the future. We may take any
              actions we deem necessary to protect the security and integrity of
              the Platform and Supporting Infrastructure. We are not liable to
              you or any third party for terminating or restricting your access
              to the Services. We also reserve the right to modify, suspend,
              discontinue, or restrict access to any part of the Services at any
              time, without notice or liability to you.
            </p>
            <p className="mb-6 text-gray-700">
              You are responsible for providing and maintaining, at your own
              risk, option and expense, any hardware, software, and
              communication lines required to access and use the Services.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Your Content
            </h3>
            <p className="mb-6 text-gray-700">
              The Services may allow you to post, submit, or upload content,
              text, photographs, messages, third-party links, or other
              information (collectively, "Content"). You are fully and solely
              responsible for all Content, including any Content shared with
              teachers, school administrators, or other end users. You agree not
              to provide any Content that is inaccurate, misleading, or false.
              If any Content you've provided later becomes inaccurate,
              misleading, or false, you agree to promptly correct such Content.
            </p>
            <p className="mb-6 text-gray-700">
              Although we are not obligated to monitor Content and do not
              undertake any responsibility to review it, we reserve the right,
              at any time and without notice, to review, remove, or restrict
              access to any Content that we determine, in our sole discretion,
              violates this Agreement, is unlawful, or may compromise the rights
              or safety of others. We may also terminate the accounts of
              violators at any time without notice. We reserve the right to
              investigate and take appropriate legal action against anyone who,
              in our sole discretion, violates this Agreement.
            </p>
            <p className="mb-6 text-gray-700">
              You may not provide Content that is defamatory, abusive, profane,
              offensive, threatening, harassing, racially or ethnically
              offensive, illegal, or otherwise objectionable. Doing so may
              result in suspension or termination of your account. You may also
              not post or transmit any Content that infringes or violates the
              rights of others, including intellectual property, privacy,
              publicity, or copyright rights. We encourage you to report any
              inappropriate Content or misconduct that you become aware of
              through the Services.
            </p>
            <p className="mb-6 text-gray-700">
              The following types of Content are strictly prohibited:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                Content that advocates, promotes, or condones harassment or that
                harasses others;
              </li>
              <li>
                Content that is offensive, harmful, or that advocates or
                promotes racism, bigotry, hatred, or physical harm;
              </li>
              <li>
                Content involving spam, unsolicited mail, chain letters,
                advertisements, or commercial solicitations;
              </li>
              <li>
                Content that involves unauthorized promotional or commercial
                activities (e.g., contests, sweepstakes, pyramid schemes);
              </li>
              <li>
                Content that exploits others in an abusive, violent, or sexual
                manner;
              </li>
              <li>
                Content that is knowingly false, misleading, or promotes illegal
                activities;
              </li>
              <li>
                Content that is abusive, threatening, obscene, libelous, or
                defamatory;
              </li>
              <li>
                Content that infringes or violates any third-party copyright,
                trademark, or intellectual property rights; or
              </li>
              <li>
                Content that provides instructions on how to engage in illegal
                activities.
              </li>
            </ul>
            <p className="mb-6 text-gray-700">
              By submitting Content, you grant us a non-exclusive, irrevocable,
              perpetual, transferable, sub-licensable, fully paid, royalty-free,
              worldwide license to use, store, host, copy, distribute, modify,
              adapt, publicly display, perform, and create derivative works from
              that Content solely in connection with the operation, provision,
              and improvement of the Services, including customer support,
              analytics, security, and marketing in relation to the Services.
              You represent and warrant that you have all rights necessary to
              grant us this license and that our use of your Content in
              accordance with this Agreement will not infringe or violate the
              rights of any third party.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Intellectual Property
            </h3>
            <p className="mb-6 text-gray-700">
              The Platform and Third-Party Platforms (defined below) are
              protected under both United States and foreign laws, including,
              but not limited to, copyright and trademark laws. Unauthorized use
              may violate such laws. All Materials are made available for
              internal, business use only, and no other use is permitted without
              our prior written consent. We and our licensors retain all right,
              title, and interest, including all intellectual property rights,
              in and to the Platform and Third-Party Platforms. If you violate
              any part of this Agreement, your permission to access the Platform
              and Third-Party Platforms will automatically terminate and you
              must immediately destroy copies you have made of any Materials.
            </p>
            <p className="mb-6 text-gray-700">
              You retain sole and exclusive ownership over all Content. By
              submitting Content, you grant us a non-exclusive, irrevocable,
              perpetual, transferable, sub-licensable, fully paid, royalty-free,
              worldwide license to use, store, host, copy, distribute, modify,
              adapt, publicly display, perform, and create derivative works from
              that Content solely in connection with the operation, provision,
              and improvement of the Services, including customer support,
              analytics, security, and marketing in relation to the Services.
            </p>
            <p className="mb-6 text-gray-700">
              The trademarks, service marks, and logos of Teaching Lab Ventures,
              Inc. (the "TLVI Trademarks") used and displayed on the Platform
              are registered and unregistered trademarks or service marks of
              Teaching Labs. Other company, product, and service names located
              on the Platform may be trademarks or service marks owned by others
              (the "Third-Party Trademarks," and, collectively with the TLVI
              Trademarks, the "Trademarks"). Nothing in this Agreement or
              elsewhere on the Platform should be construed as granting, by
              implication, estoppel, or otherwise, any license or right to use
              the Trademarks, without our prior written permission specific for
              each such use. Use of the Trademarks as part of a link to or from
              any website is prohibited unless establishment of such a link is
              approved in advance by us in writing. All goodwill generated from
              the use of the TLVI Trademarks inures to the benefit of TLVI.
            </p>
            <p className="mb-6 text-gray-700">
              Elements of the Platform are also protected by trade dress, unfair
              competition, and other applicable laws. You may not copy or
              imitate any part of the Platform, in whole or in part, including
              through framing or mirroring. No Materials may be retransmitted
              without our express written consent for each specific instance.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Third Party Platforms
            </h3>
            <p className="mb-6 text-gray-700">
              The Platform may link or redirect you to third-party websites or
              integrate with third-party services (e.g., Google Workspaces)
              (collectively, "Third-Party Platforms"). You acknowledge that the
              Third-Party Platforms are provided by our third-party service
              providers and vendors ("Vendors") and are not under our control.
              Any information or content made available through the Third-Party
              Platforms do not necessarily reflect our opinions or imply our
              recommendation or endorsement of such Third-Party Platforms or the
              opinions expressed therein. We are not responsible for the privacy
              practices of any Third-Party Platforms. Please be aware that
              Third-Party Platforms may collect both personally identifiable
              information ("PII") and non-PII from or about you. You should
              review the terms of use and privacy policies applicable to any
              Third-Party Platforms prior to using or visiting such platforms.
            </p>
            <p className="mb-6 text-gray-700">
              We provide access to Third-Party Platforms solely as a convenience
              to you, and your use of or access to any Third-Party Platform is
              at your own risk. We have no obligation to maintain any link or
              integration with any Third-Party Platform and may disable or
              remove access at any time, in our sole discretion and for any
              reason. We are not responsible or liable, directly or indirectly,
              for any harm, loss, or damage alleged to be caused by or in
              connection with your use of or reliance on any content, products,
              services, or other materials available on or through any
              Third-Party Platform, or for any action you take based on such
              content or services.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Violation of Rules and Regulations; Disclosure of Information
            </h3>
            <p className="mb-6 text-gray-700">
              We reserve the right to seek all remedies available at law and in
              equity for violations of the rules and regulations governing the
              Platform and Supporting Infrastructure, including, without
              limitation, this Agreement, including the right to block access
              from a particular IP address. We may cooperate with legal
              authorities and/or third parties in the investigation of any
              suspected or alleged crime or civil wrong. Except as may be
              expressly limited by the Privacy Policy we reserve the right at
              all times to: (i) disclose any information as we deem necessary to
              satisfy any applicable law, regulation, legal process, or
              governmental request; or (ii) edit or remove any information or
              materials, in whole or in part, as applicable, in our sole
              discretion.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Indemnity
            </h3>
            <p className="mb-6 text-gray-700">
              You agree to indemnify, defend, and hold us and our subsidiaries,
              affiliates, officers, agents, employees, contractors, partners,
              and licensors (including Vendors) harmless from and against any
              and all suits, actions, losses, claims, proceedings, demands,
              expenses, damages, settlements, judgments, injuries, liabilities,
              obligations, risks, and costs, including, without limitation,
              reasonable attorneys' fees, due to, relating to, or arising out
              of: (i) your use of the Platform and Third-Party Platforms; (ii)
              your violation of this Agreement; (iii) your negligence, fraud, or
              willful misconduct; (iv) any Content you submit, post, transmit,
              or otherwise make available through the Services, including,
              without limitation, any claim that such Content infringes or
              misappropriates the intellectual property, privacy, publicity, or
              other rights of any third party, or otherwise violates applicable
              law; and/or (v) your violation of any law or regulation or any
              third party's rights. We reserve the right, at your expense, to
              assume the exclusive defense and control of any matter which you
              are required to indemnify against, and you agree to cooperate in
              our defense of such matter. This indemnification will survive
              termination of this Agreement.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Limitation of Liability
            </h3>
            <p className="mb-6 text-gray-700">
              YOU UNDERSTAND AND AGREE THAT NEITHER WE NOR OUR VENDORS WILL BE
              LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
              PUNITIVE, EXEMPLARY, OR SPECIAL DAMAGES ARISING OUT OF OR RELATED
              TO YOUR ACCESS TO OR USE OF THE PLATFORM OR THIRD-PARTY PLATFORMS,
              WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE,
              EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES INCLUDING,
              WITHOUT LIMITATION, DAMAGES RESULTING FROM: (A) ANY ACTION TAKEN
              IN CONNECTION WITH AN INVESTIGATION BY LAW ENFORCEMENT AUTHORITIES
              REGARDING YOUR OR ANY OTHER PARTY'S USE OF THE PLATFORM OR
              THIRD-PARTY PLATFORMS; (B) ANY ACTION TAKEN IN CONNECTION WITH
              COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; (C) DAMAGE TO
              YOUR OR ANY OTHER USER'S COMPUTER, MOBILE DEVICE, OR OTHER
              EQUIPMENT OR TECHNOLOGY USED TO ACCESS THE PLATFORM OR THIRD-PARTY
              PLATFORMS; (D) RELIANCE ON ANY MATERIALS; (E) INABILITY TO ACCESS
              THE PLATFORM OR THIRD-PARTY PLATFORMS DUE TO INTERRUPTIONS,
              DELAYS, OR FAILURES IN TELECOMMUNICATION NETWORKS OR HOSTING
              EQUIPMENT; OR (F) UNAUTHORIZED ACCESS TO OR USE OF THE PLATFORM OR
              THIRD-PARTY PLATFORMS.
            </p>
            <p className="mb-6 text-gray-700">
              OUR TOTAL LIABILITY TO YOU FROM ALL CAUSES OF ACTION AND UNDER ALL
              THEORIES WILL BE LIMITED TO ONE HUNDRED UNITED STATES DOLLARS
              ($100.00). YOU ALSO ACKNOWLEDGE AND AGREE THAT YOU ARE ACCESSING
              OR USING THE PLATFORM WITH A FULL UNDERSTANDING OF THE LIMITATION
              OF OUR LIABILITY IN THIS AGREEMENT.
            </p>
            <p className="mb-6 text-gray-700">
              BY ACCESSING THE PLATFORM, YOU UNDERSTAND THAT YOU MAY BE WAIVING
              RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR
              UNSUSPECTED, AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE
              THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, THE
              BENEFITS OF SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, AND ANY
              SIMILAR LAW OF ANY STATE OR TERRITORY, WHICH PROVIDES AS FOLLOWS:
              "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR
              DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF
              EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY
              AFFECTED HIS SETTLEMENT WITH THE DEBTOR."
            </p>
            <p className="mb-6 text-gray-700">
              Some jurisdictions do not allow exclusions of liability for
              certain types of damages. Accordingly, some of the above
              limitations may not apply to you to the extent prohibited by law.
              In such cases, our liability will be limited to the fullest extent
              permitted by applicable law.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No Warranties
            </h3>
            <p className="mb-6 text-gray-700">
              All information provided through the Platform is subject to
              change. While we make reasonable efforts to ensure the accuracy of
              the information on the Platform, it is not possible to guarantee
              its completeness or timeliness. We assume no responsibility or
              liability for any actions taken as a result of using the Platform,
              or for any errors or omissions in the Materials. THE PLATFORM AND
              ALL THIRD-PARTY PLATFORMS ON THE WEBSITE ARE PROVIDED TO YOU ON AN
              "AS-IS," "AS-AVAILABLE" BASIS AND WE EXPRESSLY DISCLAIM ALL
              WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. WE MAKE NO WARRANTY
              AS TO THE ACCURACY, COMPLETENESS, CURRENCY OR RELIABILITY OF THE
              PLATFORM OR ANY THIRD-PARTY PLATFORMS, OR ANY PRODUCTS,
              INFORMATION, OPINIONS, AND MATERIALS AVAILABLE THEREON. YOU ARE
              RESPONSIBLE FOR VERIFYING ANY INFORMATION YOU OBTAIN FROM THE
              PLATFORM OR ANY THIRD-PARTY PLATFORMS BEFORE RELYING ON IT. USE OF
              THE PLATFORM OR ANY THIRD-PARTY PLATFORMS IS AT YOUR SOLE RISK. WE
              MAKE NO REPRESENTATIONS OR WARRANTIES THAT USE OF THE PLATFORM OR
              ANY THIRD-PARTY PLATFORMS WILL BE UNINTERRUPTED, COMPLETELY
              SECURE, VIRUS-FREE, OR ERROR-FREE. EXCEPT AS EXPRESSLY SET FORTH
              IN SECTION 12, YOUR SOLE AND EXCLUSIVE REMEDY RELATING TO YOUR USE
              OF THE PLATFORM OR ANY THIRD-PARTY PLATFORMS SHALL BE TO
              DISCONTINUE USE.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No Fiduciary Relationship
            </h3>
            <p className="mb-6 text-gray-700">
              Except to the extent set forth in a separate agreement between you
              and us, there is no fiduciary relationship between you and us.
              This Agreement does not create any relationship of principal and
              agent, partnership, joint venture, or employer and employee,
              between you and us. You may not enter into any contract on our
              behalf or bind us in any way.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Right to Monitor
            </h3>
            <p className="mb-6 text-gray-700">
              We reserve the right to actively monitor your use of the Platform
              and use any information gathered during such monitoring for any
              permissible purpose under the Privacy Policy. Additionally, we
              may, at any time as we deem appropriate, remove any materials from
              the Platform that, in our sole discretion, may be illegal, may
              subject us to liability, may violate this Agreement, or are, in
              our sole discretion, inconsistent with our purpose for the
              Platform.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Electronic Communications
            </h3>
            <p className="mb-6 text-gray-700">
              You acknowledge and agree that you may send and receive electronic
              messages through or in connection with the Platform, including,
              without limitation, by logging into your account or sending
              e-mails or text messages to us. You agree that we will communicate
              with you by e-mail or text message using the contact information
              we have on file for you (if any) or by posting notices on the
              Platform. You agree that all agreements, notices, disclosures and
              other communications that we provide to you electronically satisfy
              any legal requirement that such communications be in writing. You
              further agree that any notices provided by us electronically are
              deemed to be given and received on the date we transmit any such
              electronic communication as described in this Agreement. Any
              information you provide to us through electronic means as
              described in this paragraph will be governed by our Privacy
              Policy.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Use Outside of the United States
            </h3>
            <p className="mb-6 text-gray-700">
              The Platform is operated by us from our offices within the United
              States of America. We make no representation that the information
              in the Platform is appropriate or available for use in other
              locations, and access to the Platform from territories where the
              contents of the Platform may be illegal is prohibited. Those who
              choose to access the Platform from other locations do so on their
              own initiative and are responsible for compliance with applicable
              local laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Dispute Resolution
            </h3>
            <p className="mb-6 text-gray-700">
              EACH PARTY AGREES THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING
              OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM WILL
              BE DECIDED BY ARBITRATION OR SMALL CLAIMS COURT, AND NOT IN A
              COURT OF GENERAL JURISDICTION OR BY JURY TRIAL. DISCOVERY AND
              RIGHTS TO APPEAL IN ARBITRATION ARE GENERALLY MORE LIMITED THAN IN
              A LAWSUIT, AND OTHER RIGHTS THAT YOU AND WE WOULD HAVE IN COURT
              MAY NOT BE AVAILABLE IN ARBITRATION. NOTWITHSTANDING THE
              FOREGOING, EITHER PARTY MAY SEEK TEMPORARY OR PRELIMINARY
              INJUNCTIVE OR EQUITABLE RELIEF FROM A COURT OF COMPETENT
              JURISDICTION WHERE NECESSARY TO PROTECT RIGHTS PENDING RESOLUTION
              OF THE UNDERLYING DISPUTE IN ARBITRATION.
            </p>
            <p className="mb-6 text-gray-700">
              If the requirements for jurisdiction in small claims court are
              satisfied, either Party may seek to have a claim resolved in small
              claims court in the county of your residence or the small claims
              court in closest proximity to your residence. You may bring an
              action or proceeding in the small claims court of New York, New
              York.
            </p>
            <p className="mb-6 text-gray-700">
              If you elect to arbitrate, you must first send us a written notice
              of your claim ("Notice of Claim") to the address set out in the
              "Contact Us" paragraph, below. The Notice of Claim should include
              both the mailing address and email address you would like us to
              use when contacting you. If we elect to arbitrate, we will send,
              by certified mail, a written Notice of Claim to your address on
              file. A Notice of Claim, whether sent by you or by us, must (a)
              describe the nature and basis of the claim; and (b) set forth the
              specific amount of damages or other relief sought. If we do not
              reach an agreement to resolve the Claim within 60 days after the
              Notice of Claim is first received, you or we may commence
              arbitration by filing a demand for arbitration ("Demand for
              Arbitration").
            </p>
            <p className="mb-6 text-gray-700">
              If a claim qualifies for small claims court, but a Party commences
              an arbitration proceeding, each Party agree that either Party may
              elect instead to have the claim resolved in small claims court,
              and upon written notice of a Party's election, the American
              Arbitration Association ("AAA") will administratively close the
              arbitration proceeding. Arbitration and small claims proceedings
              are mutually exclusive. A claim may be resolved either in small
              claims court or through arbitration, but not both. Once either
              Party commences one process (e.g., files a Demand for Arbitration
              or initiates a small claims action), that election shall govern
              the forum for resolving the dispute, unless the small claims court
              determines that the claim does not qualify for small claims
              jurisdiction. If a Party has filed a claim in small claims court,
              neither Party may subsequently initiate arbitration unless and
              until the small claims court determines it lacks jurisdiction. Any
              dispute about whether a claim qualifies for small claims court
              shall be resolved by that court, not by an arbitrator. In the
              event of any such dispute, the arbitration proceeding shall remain
              closed unless and until a decision by the small claims court that
              the claim should proceed in arbitration. You may download or copy
              a form of notice and a form to initiate arbitration at www.adr.org
              or by calling 1-800-778-7879. The arbitration will be conducted by
              the AAA before a single AAA arbitrator under the AAA's Consumer
              Arbitration Rules, which are available at www.adr.org or by
              calling 1-800-778-7879. The Parties shall equally share the
              arbitrator's fees and administrative fees of arbitration, unless
              otherwise required by applicable law. If you demonstrate that the
              costs of arbitration will be prohibitive as compared to
              litigation, we will pay as much of the administrative fees and
              arbitrator's fees as the arbitrator deems necessary to ensure that
              the arbitration process is not cost-prohibitive.
            </p>
            <p className="mb-6 text-gray-700">
              The arbitrator shall have exclusive authority to resolve any
              dispute relating to the interpretation, applicability,
              enforceability, or formation of this arbitration agreement,
              including whether any claim is subject to arbitration, except
              where such determination is expressly reserved to a small claims
              court. If federal law provides that a claim or dispute is not
              subject to binding arbitration, this section shall not apply to
              such claim or dispute. Any claim or dispute is to be arbitrated by
              a single arbitrator on an individual basis and not as a class,
              consolidated, or representative action. You expressly waive any
              right you may have to participate in such actions.
            </p>
            <p className="mb-6 text-gray-700">
              Arbitrators shall be attorneys or retired judges. The arbitrator
              shall apply governing substantive law and the applicable statutes
              of limitation. Unless applicable law provides otherwise, the
              arbitration hearing shall be conducted in the federal district in
              which you reside. The arbitrator shall issue a reasoned written
              decision sufficient to explain the essential findings and
              conclusions on which the award is based. The award shall be
              binding only among the Parties and shall have no preclusive effect
              in any other arbitration or other proceeding involving a different
              party. We will not seek to recover our attorneys' fees and costs
              in arbitration from you unless the arbitrator finds that either
              the substance of your claim or the relief sought in your Demand
              for Arbitration was frivolous or was brought for an improper
              purpose (as measured by the standards set forth in Federal Rule of
              Civil Procedure 11(b)). Judgment on any award may be entered in
              any court having jurisdiction.
            </p>
            <p className="mb-6 text-gray-700">
              TO THE FULL EXTENT PERMITTED BY APPLICABLE LAW, THE PARTIES HEREBY
              WAIVE THEIR RIGHT TO JURY TRIAL WITH RESPECT TO ALL CLAIMS AND
              ISSUES ARISING UNDER, IN CONNECTION WITH, TOUCHING UPON OR
              RELATING TO THESE TERMS, THE BREACH THEREOF AND/OR THE SCOPE OF
              THE PROVISIONS OF THIS SECTION, WHETHER SOUNDING IN CONTRACT OR
              TORT, AND INCLUDING ANY CLAIM FOR FRAUDULENT INDUCEMENT THEREOF.
            </p>
            <p className="mb-6 text-gray-700">
              To the full extent permitted by applicable law, both you and we
              waive the right to bring any dispute as a class, consolidated,
              representative, collective, or private attorney general action, or
              to participate in a class, consolidated, representative,
              collective, or private attorney general action regarding any
              dispute brought by anyone else. Notwithstanding the arbitration
              provision set forth above, if the provision regarding waiver of
              class, collective, representative, and private attorney general
              claims of this section is found to be void or otherwise
              unenforceable, any such class, collective, representative, or
              private attorney general claims must be heard and determined
              through an appropriate court proceeding, and all other claims
              subject to arbitration shall remain in arbitration.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Time Limit on Claims Against Us
            </h3>
            <p className="mb-6 text-gray-700">
              You agree that any claim you may have arising out of or related to
              your use of the Platform or your relationship with us must be
              filed within one (1) year after the date such claim arose;
              otherwise, your claim is permanently barred.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Governing Law; Venue
            </h3>
            <p className="mb-6 text-gray-700">
              New York law and the Federal Arbitration Act govern all disputes
              arising out of or relating to the Platform and this Agreement,
              regardless of conflict of law rules. The United Nations Convention
              on Contracts for the International Sale of Goods does not apply to
              this Agreement.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Severability and Waiver
            </h3>
            <p className="mb-6 text-gray-700">
              If any provision of this Agreement will be deemed unlawful, void,
              or for any reason unenforceable, then that provision will be
              deemed severable from this Agreement and will not affect the
              validity and enforceability of any remaining provisions. Our
              failure to enforce the strict performance of any provision of this
              Agreement will not constitute a waiver of our right to
              subsequently enforce such provision or any other provisions of
              this Agreement.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Assignment
            </h3>
            <p className="mb-6 text-gray-700">
              We may assign this Agreement or any part of them without
              restriction or condition. You may not assign or otherwise transfer
              this Agreement or your rights under this Agreement without our
              prior written consent and any assignment in violation of this
              prohibition will be null and void.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Remedies
            </h3>
            <p className="mb-6 text-gray-700">
              You agree that any violation, or threatened violation, by you of
              this Agreement constitutes an unlawful and unfair business
              practice that will cause us irreparable and unquantifiable harm.
              You also agree that monetary damages would be inadequate for such
              harm and consent to our obtaining any injunctive or equitable
              relief that we deem necessary or appropriate. These remedies are
              in addition to any other remedies we may have at law or in equity.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Us
            </h3>
            <p className="mb-6 text-gray-700">
              Contact us via email at info@teachinglabstudio.com or via mail at:
            </p>
            <address className="mb-12 text-gray-700 not-italic">
              Teaching Lab Ventures, Inc.
              <br />
              ATTN: Brooke James, Nisa
              <br />
              1802 Vernon St. NW, PMB 533
              <br />
              Washington, D.C. 20009
            </address>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};