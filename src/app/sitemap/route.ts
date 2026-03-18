import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    {
      loc: 'https://amanullah.netlify.app/',
      lastmod: '2023-10-27T12:00:00+00:00',
      changefreq: 'weekly',
      priority: '1.0',
    },
    // Add more URLs as needed
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
