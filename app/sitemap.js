export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'
  const lastModified = new Date()

  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
      changeFrequency: 'quarterly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#process`,
      lastModified,
      changeFrequency: 'quarterly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]

  return routes
}
