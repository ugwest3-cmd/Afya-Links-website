import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Register - Afya Links',
  description: 'Register your clinic, pharmacy, or become a driver on Afya Links.',
}

export default function Register() {
  const registrationTypes = [
    {
      title: 'Clinic Registration',
      icon: 'clinic-icon',
      description: 'Register your clinic to start sourcing medicines from verified pharmacies.',
      steps: [
        'Download the Clinic App',
        'Enter phone number + OTP',
        'Upload business license',
        'Wait for admin verification (24-48 hrs)',
        'Start ordering!'
      ],
      appLink: 'https://play.google.com/store/apps/details?id=com.afyalinks.clinic',
      buttonText: 'Download Clinic App'
    },
    {
      title: 'Pharmacy Registration',
      icon: 'pharmacy-icon',
      description: 'Register your pharmacy to receive orders from clinics and earn commission.',
      steps: [
        'Download the Pharmacy App',
        'Enter business details',
        'Upload pharmacy license',
        'Upload business registration',
        'Wait for verification',
        'Upload price list CSV',
        'Start receiving orders!'
      ],
      appLink: 'https://play.google.com/store/apps/details?id=com.afyalinks.pharmacy',
      buttonText: 'Download Pharmacy App'
    },
    {
      title: 'Driver Registration',
      icon: 'delivery-icon',
      description: 'Join our driver network and earn income from verified medicine deliveries.',
      steps: [
        'Download the Driver App',
        'Create account with phone number',
        'Provide vehicle information',
        'Accept terms & conditions',
        'Verification approval',
        'Start accepting deliveries!'
      ],
      appLink: 'https://play.google.com/store/apps/details?id=com.afyalinks.driver',
      buttonText: 'Download Driver App'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h1 className="heading-1 mb-6">Join Afya Links</h1>
          <p className="text-xl text-gray-600">
            Choose your role and start using our platform today. Registration is quick and easy.
          </p>
        </div>
      </section>

      {/* Registration Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registrationTypes.map((type, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <Image src={`/assets/${type.icon}.png`} alt={type.title} width={80} height={80} className="w-20 h-20" />
                </div>
                <h2 className="heading-3 mb-4">{type.title}</h2>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Registration Steps:</h4>
                  <ol className="space-y-3">
                    {type.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex gap-3">
                        <span className="font-semibold text-primary-600 flex-shrink-0">{stepIdx + 1}.</span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <a 
                  href={type.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#1D1D1F] text-white hover:bg-black transition-all group shadow-2xl shadow-gray-900/10 w-full"
                >
                  <div className="bg-white/10 rounded-lg p-2 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 leading-none mb-1">Download APK</p>
                    <p className="text-lg font-bold leading-none">{type.title.split(' ')[0]} App</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-2 mb-12 text-center">Registration FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does verification take?',
                a: "Verification typically takes 24-48 hours after you submit your documents. You'll receive a notification once approved."
              },
              {
                q: 'What documents do I need?',
                a: 'Clinics & Pharmacies: Business license and business registration. Drivers: Vehicle documents and ID.'
              },
              {
                q: 'Is registration free?',
                a: 'Yes! Registration is completely free for all partners.'
              },
              {
                q: 'What if my documents are incomplete?',
                a: "We'll notify you if documents are incomplete. You can resubmit at any time until approved."
              },
              {
                q: 'Can I register multiple locations?',
                a: "Yes. Each location needs its own registration with separate documents."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
