import { MetadataRoute } from 'next'
import { conditions } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://revasurgicalhospital.com'

  const staticPages: MetadataRoute.Sitemap = ['', '/about', '/contact', '/facilities', '/gallery'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const conditionPages: MetadataRoute.Sitemap = conditions.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...conditionPages]
}
