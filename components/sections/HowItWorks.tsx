export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Order',
      description: 'Clinics place medicine orders through the Afya Links app by selecting pharmacies and products.',
      users: 'Clinics'
    },
    {
      num: '2',
      title: 'Receive',
      description: 'Wholesale pharmacies receive the order and confirm availability of medicines.',
      users: 'Pharmacies'
    },
    {
      num: '3',
      title: 'Pickup',
      description: 'Drivers are assigned to collect medicines from the pharmacy and deliver to the clinic.',
      users: 'Drivers'
    },
    {
      num: '4',
      title: 'Confirm',
      description: 'Clinic confirms receipt and the order is completed. Payments and settlements are processed.',
      users: 'All Partners'
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to join Africa&apos;s leading B2B medicine sourcing platform.
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
