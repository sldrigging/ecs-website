import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { images } from "@/data/images";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="Ecommerce Solutions"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[var(--color-steel-light)] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--color-text-primary)] mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p className="text-[var(--color-text-muted)]">
                Effective as of January 01, 2024
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Agreement between User and Ecommerce Solutions
              </h2>
              <p>
                Welcome to Ecommerce Solutions. The nolaes.com website (the
                "Site") is comprised of various web pages operated by Ecommerce
                Solutions, LLC. Ecommerce Solutions is offered to you
                conditioned on your acceptance without modification of the
                terms, conditions, and notices contained herein (the "Terms").
                Your use of Ecommerce Solutions constitutes your agreement to
                all such Terms. Please read these terms carefully and keep a
                copy of them for your reference.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Ecommerce Solutions is an E-Commerce Site
              </h2>
              <p>
                This website is designed to provide company and product
                information to help users make purchasing decisions.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Privacy
              </h2>
              <p>
                Your use of Ecommerce Solutions is subject to Ecommerce
                Solutions' Privacy Policy. Please review our Privacy Policy,
                which also governs the Site and informs users of our data
                collection practices.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Electronic Communications
              </h2>
              <p>
                Visiting Ecommerce Solutions or sending emails to Ecommerce
                Solutions constitutes electronic communications. You consent to
                receive electronic communications and you agree that all
                agreements, notices, disclosures, and other communications that
                we provide to you electronically, via email and on the Site,
                satisfy any legal requirement that such communications be in
                writing.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Your Account
              </h2>
              <p>
                If you use this site, you are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your computer, and you agree to accept responsibility
                for all activities that occur under your account or password.
                You may not assign or otherwise transfer your account to any
                other person or entity. You acknowledge that Ecommerce Solutions
                is not responsible for third party access to your account that
                results from theft or misappropriation of your account.
                Ecommerce Solutions and its associates reserve the right to
                refuse or cancel service, terminate accounts, or remove or edit
                content in our sole discretion.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Children Under Thirteen
              </h2>
              <p>
                Ecommerce Solutions does not knowingly collect, either online or
                offline, personal information from persons under the age of
                thirteen. If you are under 18, you may use Ecommerce Solutions
                only with the permission of a parent or guardian.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Cancellation/Refund Policy
              </h2>
              <p>
                We attempt to accept returns for recently purchased items that
                are in new, sellable condition, and aren't damaged by return
                shipping. Read our full return policy on our returns page.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Links to Third Party Sites/Third Party Services
              </h2>
              <p>
                Ecommerce Solutions may contain links to other websites ("Linked
                Sites"). The Linked Sites are not under the control of Ecommerce
                Solutions and Ecommerce Solutions is not responsible for the
                contents of any Linked Site, including without limitation any
                link contained in a Linked Site, or any changes or updates to a
                Linked Site. Ecommerce Solutions provides these links to you
                only as a convenience, and the inclusion of any link does not
                imply endorsement by Ecommerce Solutions of the site or any
                association with its operators.
              </p>
              <p>
                Certain services made available via Ecommerce Solutions are
                delivered by third party sites and organizations. By using any
                product, service or functionality originating from the Ecommerce
                Solutions domain, you hereby acknowledge and consent that
                Ecommerce Solutions may share such information and data with any
                third party with whom Ecommerce Solutions has a contractual
                relationship to provide the requested product, service, or
                functionality on behalf of Ecommerce Solutions users and
                customers.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                No Unlawful or Prohibited Use/Intellectual Property
              </h2>
              <p>
                You are granted a non-exclusive, non-transferable, revocable
                license to access and use Ecommerce Solutions strictly in
                accordance with these terms of use. As a condition of your use
                of the Site, you warrant to Ecommerce Solutions that you will
                not use the Site for any purpose that is unlawful or prohibited
                by these Terms. You may not use the Site in any manner which
                could damage, disable, overburden, or impair the Site or
                interfere with any other party's use and enjoyment of the Site.
                You may not obtain or attempt to obtain any materials or
                information through any means not intentionally made available
                or provided for through the Site.
              </p>
              <p>
                All content included as part of the Service, such as text,
                graphics, logos, images, as well as the compilation thereof, and
                any software used on the Site, is the property of Ecommerce
                Solutions or its suppliers and protected by copyright and other
                laws that protect intellectual property and proprietary rights.
                You agree to observe and abide by all copyright and other
                proprietary notices, legends or other restrictions contained in
                any such content and will not make any changes thereto.
              </p>
              <p>
                You will not modify, publish, transmit, reverse engineer,
                participate in the transfer or sale, create derivative works, or
                in any way exploit any of the content, in whole or in part,
                found on the Site. Ecommerce Solutions content is not for
                resale. Your use of the Site does not entitle you to make any
                unauthorized use of any protected content, and in particular you
                will not delete or alter any proprietary rights or attribution
                notices in any content. You will use protected content solely
                for your personal use and will make no other use of the content
                without the express written permission of Ecommerce Solutions
                and the copyright owner. You agree that you do not acquire any
                ownership rights in any protected content. We do not grant you
                any licenses, express or implied, to the intellectual property
                of Ecommerce Solutions or our licensors except as expressly
                authorized by these Terms.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Use of Communication Services
              </h2>
              <p>
                The Site may contain bulletin board services, chat areas, news
                groups, forums, communities, personal web pages, calendars,
                and/or other message or communication facilities designed to
                enable you to communicate with the public at large or with a
                group (collectively, "Communication Services"). You agree to use
                the Communication Services only to post, send and receive
                messages and material that are proper and related to the
                particular Communication Service.
              </p>
              <p>
                By way of example, and not as a limitation, you agree that when
                using a Communication Service, you will not: defame, abuse,
                harass, stalk, threaten or otherwise violate the legal rights
                (such as rights of privacy and publicity) of others; publish,
                post, upload, distribute or disseminate any inappropriate,
                profane, defamatory, infringing, obscene, indecent or unlawful
                topic, name, material or information; upload files that contain
                software or other material protected by intellectual property
                laws (or by rights of privacy of publicity) unless you own or
                control the rights thereto or have received all necessary
                consents; upload files that contain viruses, corrupted files, or
                any other similar software or programs that may damage the
                operation of another's computer; advertise or offer to sell or
                buy any goods or services for any business purpose, unless such
                Communication Service specifically allows such messages; conduct
                or forward surveys, contests, pyramid schemes or chain letters;
                download any file posted by another user of a Communication
                Service that you know, or reasonably should know, cannot be
                legally distributed in such manner; falsify or delete any author
                attributions, legal or other proper notices or proprietary
                designations or labels of the origin or source of software or
                other material contained in a file that is uploaded; restrict or
                inhibit any other user from using and enjoying the Communication
                Services; violate any code of conduct or other guidelines which
                may be applicable for any particular Communication Service;
                harvest or otherwise collect information about others, including
                e-mail addresses, without their consent; violate any applicable
                laws or regulations.
              </p>
              <p>
                Ecommerce Solutions has no obligation to monitor the
                Communication Services. However, Ecommerce Solutions reserves
                the right to review materials posted to a Communication Service
                and to remove any materials in its sole discretion. Ecommerce
                Solutions reserves the right to terminate your access to any or
                all of the Communication Services at any time without notice for
                any reason whatsoever.
              </p>
              <p>
                Ecommerce Solutions reserves the right at all times to disclose
                any information as necessary to satisfy any applicable law,
                regulation, legal process or governmental request, or to edit,
                refuse to post or to remove any information or materials, in
                whole or in part, in Ecommerce Solutions' sole discretion.
              </p>
              <p>
                Always use caution when giving out any personally identifying
                information about yourself or your children in any Communication
                Service. Ecommerce Solutions does not control or endorse the
                content, messages or information found in any Communication
                Service and, therefore, Ecommerce Solutions specifically
                disclaims any liability with regard to the Communication
                Services and any actions resulting from your participation in
                any Communication Service. Managers and hosts are not authorized
                Ecommerce Solutions spokespersons, and their views do not
                necessarily reflect those of Ecommerce Solutions.
              </p>
              <p>
                Materials uploaded to a Communication Service may be subject to
                posted limitations on usage, reproduction and/or dissemination.
                You are responsible for adhering to such limitations if you
                upload the materials.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Materials Provided to Ecommerce Solutions or Posted on Any
                Ecommerce Solutions Web Page
              </h2>
              <p>
                Ecommerce Solutions does not claim ownership of the materials
                you provide to Ecommerce Solutions (including feedback and
                suggestions) or post, upload, input or submit to any Ecommerce
                Solutions Site or our associated services (collectively
                "Submissions"). However, by posting, uploading, inputting,
                providing or submitting your Submission you are granting
                Ecommerce Solutions, our affiliated companies and necessary
                sublicensees permission to use your Submission in connection
                with the operation of their Internet businesses including,
                without limitation, the rights to: copy, distribute, transmit,
                publicly display, publicly perform, reproduce, edit, translate
                and reformat your Submission; and to publish your name in
                connection with your Submission.
              </p>
              <p>
                No compensation will be paid with respect to the use of your
                Submission, as provided herein. Ecommerce Solutions is under no
                obligation to post or use any Submission you may provide and may
                remove any Submission at any time in Ecommerce Solutions' sole
                discretion.
              </p>
              <p>
                By posting, uploading, inputting, providing or submitting your
                Submission you warrant and represent that you own or otherwise
                control all of the rights to your Submission as described in
                this section including, without limitation, all the rights
                necessary for you to provide, post, upload, input or submit the
                Submissions.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                International Users
              </h2>
              <p>
                The Service is controlled, operated, and administered by
                Ecommerce Solutions from our offices within the USA. If you
                access the Service from a location outside the USA, you are
                responsible for compliance with all local laws. You agree that
                you will not use the Ecommerce Solutions Content accessed
                through Ecommerce Solutions in any country or in any manner
                prohibited by any applicable laws, restrictions, or regulations.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Indemnification
              </h2>
              <p>
                You agree to indemnify, defend and hold harmless Ecommerce
                Solutions, its officers, directors, employees, agents and third
                parties, for any losses, costs, liabilities and expenses
                (including reasonable attorney's fees) relating to or arising
                out of your use of or inability to use the Site or services, any
                user postings made by you, your violation of any terms of this
                Agreement or your violation of any rights of a third party, or
                your violation of any applicable laws, rules or regulations.
                Ecommerce Solutions reserves the right, at its own cost, to
                assume the exclusive defense and control of any matter otherwise
                subject to indemnification by you, in which event you will fully
                cooperate with Ecommerce Solutions in asserting any available
                defenses.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Arbitration
              </h2>
              <p>
                In the event the parties are not able to resolve any dispute
                between them arising out of or concerning these Terms and
                Conditions, or any provisions hereof, whether in contract, tort,
                or otherwise at law or in equity for damages or any other
                relief, then such dispute shall be resolved only by final and
                binding arbitration pursuant to the Federal Arbitration Act,
                conducted by a single neutral arbitrator and administered by the
                American Arbitration Association, or a similar arbitration
                service selected by the parties, in a location mutually agreed
                upon by the parties. The arbitrator's award shall be final, and
                judgment may be entered upon it in any court having
                jurisdiction. In the event that any legal or equitable action,
                proceeding or arbitration arises out of or concerns these Terms
                and Conditions, the prevailing party shall be entitled to
                recover its costs and reasonable attorney's fees. The parties
                agree to arbitrate all disputes and claims in regards to these
                Terms and Conditions or any disputes arising as a result of
                these Terms and Conditions, whether directly or indirectly,
                including Tort claims that are a result of these Terms and
                Conditions. The parties agree that the Federal Arbitration Act
                governs the interpretation and enforcement of this provision.
                The entire dispute, including the scope and enforceability of
                this arbitration provision shall be determined by the
                Arbitrator. This arbitration provision shall survive the
                termination of these Terms and Conditions.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Class Action Waiver
              </h2>
              <p>
                Any arbitration under these Terms and Conditions will take place
                on an individual basis; class arbitrations and
                class/representative/collective actions are not permitted. THE
                PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER
                ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR
                REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE
                ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both
                you and Ecommerce Solutions agree otherwise, the arbitrator may
                not consolidate more than one person's claims and may not
                otherwise preside over any form of a representative or class
                proceeding.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Liability Disclaimer
              </h2>
              <p>
                THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
                AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
                TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
                INFORMATION HEREIN. ECOMMERCE SOLUTIONS, LLC AND/OR ITS
                SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT
                ANY TIME.
              </p>
              <p>
                ECOMMERCE SOLUTIONS, LLC AND/OR ITS SUPPLIERS MAKE NO
                REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY,
                AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION,
                SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON
                THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY
                APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS,
                SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT
                WARRANTY OR CONDITION OF ANY KIND. ECOMMERCE SOLUTIONS, LLC
                AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND
                CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS,
                SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES
                OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, TITLE AND NON-INFRINGEMENT.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL ECOMMERCE SOLUTIONS, LLC AND/OR ITS SUPPLIERS BE LIABLE
                FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING,
                WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS,
                ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR
                PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE
                SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE
                SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES
                AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE
                ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT,
                TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF
                ECOMMERCE SOLUTIONS, LLC OR ANY OF ITS SUPPLIERS HAS BEEN
                ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME
                STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH
                ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR
                SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Disclaimer of Warranties and Limitation of Liability
              </h2>
              <p>
                Seller warrants that its goods are free from defects in
                materials and workmanship. Accordingly, Seller's liability is
                limited to replacing without charge or refunding the purchase
                price, or making fair allowance for any noncompliance with any
                specifications or any defects in materials or workmanship in its
                products existing at the time of delivery. Seller requires
                written notice and the return of the product to establish any
                claim. SELLER MAKES NO OTHER WARRANTY OF ANY KIND WHATEVER,
                EXPRESS OR IMPLIED, AND ALL IMPLIED WARRANTIES OR
                MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE WHICH EXCEED
                THE ABOVE OBLIGATION ARE HEREBY DISCLAIMED BY SELLER AND
                EXCLUDED. Seller will not be liable for any consequential
                damages, loss or expense arising in connection with the use or
                inability whatever, regardless of whether damage, loss, or
                expense results from any act or failure to act by Seller,
                whether negligent or willful, or from any other reason. Unless
                specifically stated, products are of commercial quality and
                standards. Buyer must determine suitability for the products
                particular use or purpose and will assume any and all risk and
                liability whatsoever resulting from the use of all products,
                whether used singly or in combination with other products or
                components. If requested and/or applicable, manufacturer's
                material certifications may be provided with no representations
                made as to their accuracy.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Termination/Access Restriction
              </h2>
              <p>
                Ecommerce Solutions reserves the right, in its sole discretion,
                to terminate your access to the Site and the related services or
                any portion thereof at any time, without notice. To the maximum
                extent permitted by law, this agreement is governed by the laws
                of the State of Louisiana, and you hereby consent to the
                exclusive jurisdiction and venue of courts in Louisiana in all
                disputes arising out of or relating to the use of the Site. Use
                of the Site is unauthorized in any jurisdiction that does not
                give effect to all provisions of these Terms, including, without
                limitation, this section.
              </p>
              <p>
                You agree that no joint venture, partnership, employment, or
                agency relationship exists between you and Ecommerce Solutions
                as a result of this agreement or use of the Site. Ecommerce
                Solutions' performance of this agreement is subject to existing
                laws and legal process, and nothing contained in this agreement
                is in derogation of Ecommerce Solutions' right to comply with
                governmental, court and law enforcement requests or requirements
                relating to your use of the Site or information provided to or
                gathered by Ecommerce Solutions with respect to such use. If any
                part of this agreement is determined to be invalid or
                unenforceable pursuant to applicable law including, but not
                limited to, the warranty disclaimers and liability limitations
                set forth above, then the invalid or unenforceable provision
                will be deemed superseded by a valid, enforceable provision that
                most closely matches the intent of the original provision and
                the remainder of the agreement shall continue in effect.
              </p>
              <p>
                Unless otherwise specified herein, this agreement constitutes
                the entire agreement between the user and Ecommerce Solutions
                with respect to the Site and it supersedes all prior or
                contemporaneous communications and proposals, whether
                electronic, oral or written, between the user and Ecommerce
                Solutions with respect to the Site. A printed version of this
                agreement and of any notice given in electronic form shall be
                admissible in judicial or administrative proceedings based upon
                or relating to this agreement to the same extent and subject to
                the same conditions as other business documents and records
                originally generated and maintained in printed form. It is the
                express wish to the parties that this agreement and all related
                documents be written in English.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Changes to Terms
              </h2>
              <p>
                Ecommerce Solutions reserves the right, in its sole discretion,
                to change the Terms under which Ecommerce Solutions is offered.
                The most current version of the Terms will supersede all
                previous versions. Ecommerce Solutions encourages you to
                periodically review the Terms to stay informed of our updates.
              </p>

              <h2 className="font-display text-2xl text-[var(--color-text-primary)] mt-12 mb-4">
                Contact Us
              </h2>
              <p>
                Ecommerce Solutions welcomes your questions or comments
                regarding the Terms:
              </p>
              <p>
                Ecommerce Solutions
                <br />
              </p>
              <p>
                Email Address:{" "}
                <a
                  href="mailto:info@nolaES.com"
                  className="text-[var(--color-accent-orange)] hover:underline"
                >
                  info@nolaES.com
                </a>
              </p>
              <p>
                Telephone number:{" "}
                <a
                  href="tel:+15047369477"
                  className="text-[var(--color-accent-orange)] hover:underline"
                >
                  +1 (504) 736-9477
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[var(--color-steel-dark)]/30 text-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[var(--color-steel-light)] text-xs">
              &copy; {new Date().getFullYear()} ES - Ecommerce Solutions. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--color-steel-light)]">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
