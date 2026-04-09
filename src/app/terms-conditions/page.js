import Link from 'next/link';

export const metadata = {
    title: 'Terms & Conditions | Webspires Limited',
    description: 'Terms and Conditions outlining the rules, regulations, and usage guidelines for Webspires Limited.',
    alternates: { canonical: 'https://webspires.co.uk/terms-conditions/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function TermsConditionsPage() {
    return (
        <main className="bg-[#faf9f7] min-h-screen">
            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#1a1a2e] pt-28 pb-16 lg:pt-32 lg:pb-20">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{ background: `radial-gradient(circle, ${pageColor} 0%, transparent 70%)` }} aria-hidden="true" />
                
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
                    <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
                        <ol className="flex items-center gap-2 text-[13px] text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-600">/</li>
                            <li className="text-gray-200 font-medium">Terms and Conditions</li>
                        </ol>
                    </nav>
                    <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] tracking-tight">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 lg:py-24">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] prose prose-lg prose-headings:text-[#1a1a2e] prose-headings:font-bold prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
                        
                        <p className="font-bold text-gray-800">Welcome to Webspires!</p>
                        
                        <p>These terms and conditions outline the rules and regulations for the use of Webspires’s Website, located at <a href="https://webspires.co.uk/" className="text-primary hover:underline">https://webspires.co.uk/</a>.</p>
                        
                        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Webspires if you do not agree to take all of the terms and conditions stated on this page.</p>
                        
                        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Cookies</h2>
                        <p>We employ the use of cookies. By accessing Webspires, you agreed to use cookies in agreement with the Webspires’s Privacy Policy.</p>
                        <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">License</h2>
                        <p>Unless otherwise stated, Webspires and/or its licensors own the intellectual property rights for all material on Webspires. All intellectual property rights are reserved. You may access this from Webspires for your own personal use subjected to restrictions set in these terms and conditions.</p>
                        
                        <p className="font-semibold">You must not:</p>
                        <ul>
                            <li>Republish material from Webspires</li>
                            <li>Sell, rent or sub-license material from Webspires</li>
                            <li>Reproduce, duplicate or copy material from Webspires</li>
                            <li>Redistribute content from Webspires</li>
                        </ul>
                        
                        <p>This Agreement shall begin on the date hereof.</p>
                        
                        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Webspires does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Webspires,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Webspires shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                        
                        <p>Webspires reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                        
                        <p className="font-semibold">You warrant and represent that:</p>
                        <ul>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul>
                        
                        <p>You hereby grant Webspires a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Hyperlinking to our Content</h2>
                        <p className="font-semibold">The following organizations may link to our Website without prior written approval:</p>
                        <ul>
                            <li>Government agencies;</li>
                            <li>Search engines;</li>
                            <li>News organizations;</li>
                            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                        </ul>
                        
                        <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
                        
                        <p className="font-semibold">We may consider and approve other link requests from the following types of organizations:</p>
                        <ul>
                            <li>commonly-known consumer and/or business information sources;</li>
                            <li>dot.com community sites;</li>
                            <li>associations or other groups representing charities;</li>
                            <li>online directory distributors;</li>
                            <li>internet portals;</li>
                            <li>accounting, law and consulting firms; and</li>
                            <li>educational institutions and trade associations.</li>
                        </ul>
                        
                        <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Webspires; and (d) the link is in the context of general resource information.</p>
                        
                        <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
                        
                        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Webspires. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                        
                        <p className="font-semibold">Approved organizations may hyperlink to our Website as follows:</p>
                        <ul>
                            <li>By use of our corporate name; or</li>
                            <li>By use of the uniform resource locator being linked to; or</li>
                            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                        </ul>
                        
                        <p>No use of Webspires’s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">12-Month Service Agreements</h2>
                        <p>Some services we offer, including hosting, domain registration, and other select packages, come with a 12-month agreement. Where applicable, the first year may be offered free of charge as a promotional offer. After the initial 12-month period, standard renewal fees will apply unless the service is canceled prior to the renewal date. By using these services, you agree to the 12-month term and any applicable charges following the promotional period.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">iFrames</h2>
                        <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Content Liability</h2>
                        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Reservation of Rights</h2>
                        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Removal of links from our website</h2>
                        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                        <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Disclaimer</h2>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                        <ul>
                            <li>limit or exclude our or your liability for death or personal injury;</li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                        </ul>
                        
                        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

                    </div>
                </div>
            </section>
        </main>
    );
}
