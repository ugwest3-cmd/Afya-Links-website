'use client'

export default function SEO() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Afya Links',
    'url': 'https://getafyalinks.com',
    'logo': 'https://getafyalinks.com/assets/logo.png',
    'description': 'Afya Links is a digital healthcare logistics platform connecting clinics, pharmacies, and drivers for efficient medicine delivery in East Africa.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mbarara',
      'addressCountry': 'Uganda'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+256760680980',
      'contactType': 'customer support',
      'email': 'info@getafyalinks.com'
    },
    'sameAs': [
      'https://twitter.com/afyalinks',
      'https://linkedin.com/company/afyalinks',
      'https://facebook.com/afyalinks'
    ]
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Afya Links',
    'url': 'https://getafyalinks.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://getafyalinks.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
