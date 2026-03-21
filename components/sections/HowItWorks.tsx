export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Register & Verify',
      description: 'Sign up with your business details. Our team verifies your documents (business license, registration). Takes 24-48 hours.',
      users: 'All Partners'
    },
    {
      num: '2',
      title: 'Set Up Your Profile',
      description: 'Clinics: Set preferred supply areas. Pharmacies: Upload price lists. Drivers: Configure delivery preferences.',
      users: 'Clinics, Pharmacies, Drivers'
    },
    {
      num: '3',
      title: 'Start Transacting',
      description: 'Clinics place orders, pharmacies respond with availability, drivers pick up and deliver.',
      users: 'All Partners'
    },
    {
      num: '4',
      title: 'Track & Earn',
      description: 'Real-time order tracking from creation to delivery. Pharmacies earn commissions. Invoices generated automatically.',
      users: 'All Partners'
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to join Africa's leading B2B medicine sourcing platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-12 h-0.5 bg-gradient-to-r from-primary-300 to-transparent" style={{ right: '-24px' }} />
              )}

              <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded">
                  {step.users}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
