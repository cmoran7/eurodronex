// Static index of published articles — mirrors the BlogPost entity
// (slug + title) so other typologies can build related-content links.
// Keep in sync with the blog admin panel.
export const articles = [
	{
		slug: 'inspeccionar-edificio-sin-andamios-2026',
		title: 'Cómo inspeccionar un edificio sin andamios en 2026',
		category: 'Inspección técnica',
	},
	{
		slug: 'arquitecto-drones-vs-piloto',
		title: 'Por qué un arquitecto con drones no es lo mismo que un piloto',
		category: 'Servicios técnicos',
	},
	{
		slug: 'inspeccionar-cubiertas-sin-riesgo',
		title: 'Cómo inspeccionar cubiertas sin riesgo ni andamios',
		category: 'Inspección técnica',
	},
]

export const getArticle = (slug) => articles.find((a) => a.slug === slug)
