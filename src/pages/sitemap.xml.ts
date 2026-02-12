import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET({ request }: APIContext) {
	const origin = new URL(request.url).origin;
	const posts = await getCollection("blog");

	const urls = [];
	// add homepage
	urls.push({
		loc: `${origin}/`,
		lastmod: new Date().toISOString(),
		priority: "1.0",
	});
	// add about
	urls.push({
		loc: `${origin}/about`,
		lastmod: new Date().toISOString(),
		priority: "0.7",
	});

	for (const post of posts) {
		const loc = `${origin}/blog/${post.slug}`;
		const lastmod = post.data.pubDate
			? new Date(post.data.pubDate).toISOString()
			: new Date().toISOString();
		urls.push({ loc, lastmod, priority: "0.8" });
	}

	const xmlItems = urls
		.map(
			(u) =>
				`  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
