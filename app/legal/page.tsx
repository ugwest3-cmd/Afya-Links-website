import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Legal - Afya Links Policies & Terms',
  description: 'Our Terms of Service, Privacy Policy, Delivery Partner Terms, and more. Understand how Afya Links operates and your rights.',
}

const sections = [
  { id: 'tos', title: 'Terms of Service' },
  { id: 'privacy', title: 'Privacy Policy' },
  { id: 'rider', title: 'Delivery Partner Terms' },
  { id: 'refund', title: 'Refund Policy' },
  { id: 'medicines', title: 'Acceptable Medicines' },
  { id: 'disclaimer', title: 'Platform Disclaimer' },
]

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">Our Policies</h1>
          <p className="text-xl text-gray-400">Legal terms, privacy, and operating guidelines for Afya Links.</p>
        </div>
      </section>

      <div className="container-custom mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-white rounded-lg transition border-l-2 border-transparent hover:border-primary-600"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
              
              <section id="tos" className="mb-16 scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Terms of Service</h2>
                <p className="text-sm font-semibold text-gray-400 mb-6">Effective Date: January 1, 2026</p>
                <p>Welcome to Afya Links. These Terms of Service govern your access and use of the Afya Links platform including our mobile applications, website, and services. By using Afya Links, you agree to these terms.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">1. Platform Overview</h3>
                <p>Afya Links is a digital platform that connects Clinics, Drug shops, Pharmacies, Wholesale medicine suppliers, and Delivery riders. The platform enables healthcare facilities to order medicines and medical supplies from registered pharmacies and wholesalers, and coordinate delivery through independent riders. Afya Links does not manufacture, distribute, or prescribe medicines.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">2. Eligibility</h3>
                <p>To use Afya Links you must be at least 18 years old, operate a licensed medical facility or pharmacy, and provide accurate business information. Afya Links may suspend or remove accounts that violate these requirements.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">3. Orders and Transactions</h3>
                <p>Clinics can place medicine orders through the platform. Once an order is placed, a pharmacy accepts it, a delivery rider is assigned, and payment is processed. Orders become binding once accepted by the pharmacy.</p>

                <h3 className="text-xl font-bold mt-8 mb-4">4. Payments</h3>
                <p>Payments are processed through third-party providers. Afya Links does not store card details or mobile money credentials. Payment processing is handled entirely by the payment provider.</p>

                <h3 className="text-xl font-bold mt-8 mb-4">5. Delivery Services</h3>
                <p>Delivery riders are independent contractors and not employees of Afya Links. We are not responsible for delivery delays, rider conduct, or damages during transportation.</p>

                <h3 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h3>
                <p>Afya Links provides the platform &quot;as is&quot;. We are not liable for incorrect prescriptions, medicine quality, clinical outcomes, or misuse of medicines. Healthcare providers remain responsible for all medical decisions.</p>
              </section>

              <section id="privacy" className="mb-16 scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Privacy Policy</h2>
                <p>Afya Links respects your privacy and is committed to protecting your personal information.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, phone, email, business details.</li>
                  <li><strong>Transaction Information:</strong> Order details, delivery records, payment status.</li>
                  <li><strong>Device Information:</strong> IP address, device type, app usage data.</li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-4">How We Use Information</h3>
                <p>Your information is used to operate the platform, process transactions, coordinate deliveries, and improve our services.</p>
                <h3 className="text-xl font-bold mt-8 mb-4">Data Sharing</h3>
                <p>We share information with pharmacies fulfilling orders, delivery riders, and payment providers. We do not sell personal data.</p>
              </section>

              <section id="rider" className="mb-16 scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Delivery Partner Terms</h2>
                <p>Delivery riders using Afya Links agree to the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Status:</strong> Riders are independent contractors and not employees of Afya Links.</li>
                  <li><strong>Responsibilities:</strong> Safely transport orders, deliver medicines intact, and confirm delivery through the platform.</li>
                  <li><strong>Fees:</strong> Riders receive delivery fees through the platform. Afya Links may deduct a 15% platform service fee.</li>
                  <li><strong>Conduct:</strong> Riders must behave professionally, follow traffic laws, and handle medicines carefully.</li>
                </ul>
              </section>

              <section id="refund" className="mb-16 scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Refund Policy</h2>
                <p>Refund eligibility depends on the nature of the issue. You may be eligible for a refund if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>An order was paid but not delivered</li>
                  <li>Incorrect items were supplied</li>
                  <li>Payment was charged incorrectly</li>
                </ul>
                <p className="mt-4">Refund requests must be submitted within 48 hours of the order. Approved refunds are processed to the original payment method.</p>
              </section>

              <section id="medicines" className="mb-16 scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Acceptable Medicines Policy</h2>
                <p>Afya Links prohibits listing or ordering counterfeit medicines, illegal pharmaceuticals, or controlled substances without authorization. Pharmacies are responsible for ensuring compliance with all medical regulations.</p>
              </section>

              <section id="disclaimer" className="scroll-mt-24">
                <h2 className="heading-2 mb-6 border-b pb-4">Platform Disclaimer</h2>
                <p>Afya Links is a logistics and digital ordering platform. We do not provide medical advice, diagnose diseases, or prescribe treatments. Healthcare providers remain fully responsible for patient care.</p>
                <div className="mt-8 space-y-6">
                  <Image src="https://lh3.googleusercontent.com/sitesv/APaQ0SSrlX847VJr868B7vqIBzn_h8uTDOAYiuUHisPmMrBSH9sUnxcOvKOrtPD4x03A0V0MBLy2ri9K6oUpR4Z6EXB4hdkamTuOuBOPzQ_MkXAUzLQlo3ym0CDGc008ea8PQ3Pig8svh7f9YiJ2r2kxiqz9UlFWeno0bGiZ9Y_Y4DfZaHLQkgeshz2xHYkJv1o32GjtaFwydgXN1qzcX53zPekUpeD5RkFWpvx3=w1280" alt="Safety Standard 1" width={1280} height={720} className="rounded-xl border border-gray-100 shadow-sm w-full h-auto" />
                  <Image src="https://lh3.googleusercontent.com/sitesv/APaQ0SQJXZ2LJdMh2RyL1TPPTGHrwWZLg_OyRiYZZzj4ygzZMOr1ZBc9tVzPi_LmtKMwsY05ax4hqfIa7NjpipYFr_IC6vyxC5VpzqG-C2z_GguKYSzRuLlJAVtR6hgXpSXjRF-3ghAYJrbucnWgdsjI_dIi3lMzYim2eCNoAuA8u-4Jo48qZdHiw5nJVmIeZv_6IAxwyAhekN6W8P3vX5IQ8mjB7Y9WIpLyDvTb7_4=w1280" alt="Safety Standard 2" width={1280} height={720} className="rounded-xl border border-gray-100 shadow-sm w-full h-auto" />
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}