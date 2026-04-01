import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Afya Links',
  description: 'Get in touch with the Afya Links team for partnerships, support, or questions.',
}

export default function Contact() {

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-1 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? Want to partner with us? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="heading-3 mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:info@getafyalinks.com" className="text-primary-600 hover:underline">
                    info@getafyalinks.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Uganda</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8 AM - 5 PM EAT</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary-600 hover:text-primary-700">Twitter</a>
                    <a href="#" className="text-primary-600 hover:text-primary-700">LinkedIn</a>
                    <a href="#" className="text-primary-600 hover:text-primary-700">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
