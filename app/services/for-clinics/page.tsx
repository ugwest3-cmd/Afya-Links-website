import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'For Clinics & Drug Shops - Afya Links',
  description: 'Order medicines directly from wholesale pharmacies and get fast, reliable delivery to your clinic or drug shop.',
}

export default function ForClinics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">For Clinics, Retail Pharmacies and Drug Shops</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Afya Links empowers healthcare providers to quickly order medicines from trusted wholesale pharmacies and receive them through a coordinated delivery network.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#benefits" className="btn-secondary bg-white text-primary-600 border-white hover:bg-primary-50">
                Explore Benefits
              </a>
              <a href="/register" className="btn-primary bg-primary-500 hover:bg-primary-400 border-none">
                Register Your Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="benefits" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">Reliable Medicine Supply</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Afya Links helps clinics, retail pharmacies, and drug shops access medicines quickly by connecting them to trusted wholesale pharmacies. 
                Browse available medicines, compare prices in real-time, and place orders directly through our intuitive platform.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Prevent Stock-Outs', desc: 'Restock medicines quickly when supplies run low to ensure uninterrupted patient care.', icon: '🩺' },
                  { title: 'Save Time', desc: 'No more traveling to multiple suppliers. Order everything you need in minutes.', icon: '⏱️' },
                  { title: 'Faster Deliveries', desc: 'Coordinated delivery riders bring medicines directly to your facility.', icon: '🚚' }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                    <span className="text-3xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-3xl p-4 transform rotate-1">
                <img 
                  src="https://lh3.googleusercontent.com/sitesv/APaQ0SRWDDjualJp88zv8SqqrerhLp2rt7ASq1zy493o9ejeddTsdOwJEUwJD98tlQ3lyKFrAu0teVAXVMojaaQYT_x5CI8kziG_f_sLXl4wh-EJ1ESxKRPDKPxJmGSAWe1owvqckSUdUVW8t9D-jShAyxE21TodKSXVlU5U1NSh-8nVkZGZs0u4YGClJpU=w1280" 
                  alt="Choose Pharmacy Interface" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to digitize your medicine sourcing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                step: '1', 
                title: 'View Dashboard', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQHjzXy-7gKTZ4Ggek1Z-XLsmu54lZnZqVeAm4TrClMofD56Vj23PAAeQ1DF_txzZRgXiR1pO9WDztUXZCXN8iP_8QNolI9pX9N9M2Y7a8Ke6WByN-Ops-Sx_xOQpyzZ6fNZVBFIlKItKM7B14SIExIuLulMSVTSVxelvH5esO9YetN5Vopkvjns784z6GYWmErwwP5_nF4ccCajlyrZwgnA3MquIa546WbSPc=w1280',
                desc: 'Access your dedicated portal to manage orders and inventory.'
              },
              { 
                step: '2', 
                title: 'Track Your Order', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST0ElGa4gLrH2OwVfCOOlhrCZCEQbyI4K5k7gWetZt5r-ghw_Vr6xfS4Qe5-fcnaTK2tWKOC5Hkm_MZNszf52Q-ljDswfw9dSudl8pckjeu-3rJLOWklFYyBTq45tSvrQ4f11RvcaF4ixzSYTb8apf4GYaeSypUcrCuP-f5RK6JHLAa4AsFyJ5N7A8=w1280',
                desc: 'Real-time visibility of your medicine from pharmacy to doorstep.'
              },
              { 
                step: '3', 
                title: 'Place Modern Orders', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQSP4iAI3-VY_75J780t03qXPLYgJa8xsTu3-bhYGZ8RaUMETUDLz2ZlDP_Br7CpwlGZhdsVcFJZ8RBa6KSCGrfEyT54KESvf9vwG3S53J1l5t1GGAyVssBiF1Lq9hrQzuIJ2-v0GqEH9Nr1IB3mvHf5bXeigcEQkjQbPBOtKCMDZ-VefgdeOWl9x0=w1280',
                desc: 'Pick your items, choose a pharmacy, and confirm in seconds.'
              },
              { 
                step: '4', 
                title: 'Secure Payment', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRKQ0sEFJDryLtCOnVBTo_K1WI1Chg4-JgijfsF0ntjZmw-Y6CFNQFm4Fsxo4VdUt6mL0emgZM2XpriI0uLeYXsdon7u16ZsiI7T8KCcQfJfqtBdzCUxLz9-ED8dfPmqhnOujth-ZPYgQrhwORxnd13SMSwpzq22uY-Ka15iGecTF1MfAXYqE5ifVM=w1280',
                desc: 'Pay safely through digital methods to initiate fulfillment.'
              },
              { 
                step: '5', 
                title: 'Item Confirmation', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STFz_u0sr4zyHSw1ZaWtcMHHL0vjV4Y0OhzhKOsC8ddfbx_oXeeU-NqdPn9bKIKhkEX3CTely2-QDLL4FGkv38OGSJdEQ6nwbIs13KriUQWIh6NPyDIWmxSwFz5z-_l0B5WYxB2J8amdtbfECjz1oJDNzNWd6V9MZhrjQg25s=w1280',
                desc: 'Confirm receipt of items so funds are released to the pharmacy.'
              }
            ].map((step, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{step.title}</h3>
                <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                  <img src={step.img} alt={step.title} className="w-full h-auto object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}