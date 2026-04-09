import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Webspires Limited',
    description: 'Privacy Policy for Webspires Limited outlining our data collection, usage, and user rights.',
    alternates: { canonical: 'https://webspires.co.uk/privacy-policy/' }
};

const pageColor = '#EE314F'; // Brand primary color

export default function PrivacyPolicyPage() {
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
                            <li className="text-gray-200 font-medium">Privacy Policy</li>
                        </ol>
                    </nav>
                    <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.05] tracking-tight">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 lg:py-24">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] prose prose-lg prose-headings:text-[#1a1a2e] prose-headings:font-bold prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
                        
                        <h2 className="text-2xl mt-0">Who we are</h2>
                        <p>Suggested text: Our website address is: <a href="https://webspires.co.uk" className="text-primary hover:underline">https://webspires.co.uk</a>.</p>
                        
                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Comments</h2>
                        <p>Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Media</h2>
                        <p>Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Cookies</h2>
                        <p>Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                        <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                        <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                        <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Embedded content from other websites</h2>
                        <p>Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Google API & User Data Usage</h2>
                        <p>Our application accesses Google user data only after explicit user consent through Google OAuth authentication.</p>
                        <p>The application may access the following Google user data:</p>
                        <ul>
                            <li>Google Analytics (GA4) read-only data such as website traffic and engagement metrics</li>
                            <li>Google Search Console read-only data such as search performance, clicks, and impressions</li>
                        </ul>
                        <p>This data is used solely to provide analytics reporting, website monitoring, and performance insights to the authenticated user within the application dashboard.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Data Storage & Security</h2>
                        <p>Google user data accessed by our application is stored securely using industry-standard security practices.</p>
                        <ul>
                            <li>Access tokens and refresh tokens are stored in encrypted form</li>
                            <li>Data is protected against unauthorized access</li>
                            <li>Google user data is retained only for as long as necessary to provide the requested services</li>
                        </ul>
                        <p>We do not use Google user data for advertising, profiling, or marketing purposes.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Data Sharing & Third Parties</h2>
                        <p>We do not sell, rent, or share Google user data with any third parties.</p>
                        <p>Google user data is only accessed and displayed to the authenticated user who granted permission. No data is shared with external services except where required for core application functionality.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Limited Use Disclosure</h2>
                        <p>Our application’s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.</p>
                        <p>Google user data is accessed and used only to provide user-requested functionality and is not used for any other purpose.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">User Control & Revocation</h2>
                        <p>Users can revoke Google account access at any time by:</p>
                        <ul>
                            <li>Disconnecting their Google account from within the application</li>
                            <li>Revoking access directly from their Google Account permissions page</li>
                        </ul>
                        <p>Once access is revoked, the application will no longer access Google user data.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Who we share your data with</h2>
                        <p>Suggested text: If you request a password reset, your IP address will be included in the reset email.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">How long we retain your data</h2>
                        <p>Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                        <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">What rights you have over your data</h2>
                        <p>Suggested text: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>

                        <hr className="my-8 border-gray-100" />

                        <h2 className="text-2xl">Where your data is sent</h2>
                        <p>Suggested text: Visitor comments may be checked through an automated spam detection service.</p>

                    </div>
                </div>
            </section>
        </main>
    );
}
