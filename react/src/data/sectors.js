// Professional sectors — how EurodroneX works with each professional profile.
// A sector page answers "how can EurodroneX help a professional like me?"
// (a service page answers "what does EurodroneX do?").

import { PenTool, Building2, HardHat, Scale } from 'lucide-react';

export const sectors = [
	{
		slug: 'arquitectura-e-ingenieria',
		code: 'SEC-01',
		icon: PenTool,
		title: 'Arquitectura e ingeniería',
		tagline: 'Documentación técnica para decisiones de proyecto',
		intro: 'Trabajamos como apoyo técnico en el proceso proyectual: acceso inmediato a cualquier punto del edificio, documentación rigurosa de la envolvente e información fiable sobre la que decidir. El dron es el instrumento; el criterio, el suyo.',
		needsIntro: 'Lo que este perfil necesita habitualmente en su trabajo:',
		needs: [
			{
				title: 'Inspeccionar zonas de difícil acceso',
				text: 'Medianeras, patios interiores, cornisas, áticos retranqueados o paramentos a gran altura, donde la visita presencial es imposible o peligrosa.',
			},
			{
				title: 'Disponer de documentación visual fiable',
				text: 'Serie fotográfica ordenada y georreferenciada de toda la envolvente, útil para el expediente del proyecto y para justificar decisiones técnicas.',
			},
			{
				title: 'Estudiar patologías con base objetiva',
				text: 'Localizar, delimitar y clasificar lesiones antes de proyectar la rehabilitación, evitando soluciones a ciegas.',
			},
			{
				title: 'Complementar las visitas',
				text: 'Reducir desplazamientos y trabajo en altura: la envolvente queda documentada en una jornada de vuelo.',
			},
			{
				title: 'Levantamientos previos al proyecto',
				text: 'Modelos 3D métricos y ortofotografías como base de levantamiento As-Built y flujos BIM.',
			},
		],
		approachIntro: 'Cómo lo resuelve EurodroneX:',
		approach: [
			{
				title: 'Criterio técnico durante el vuelo',
				text: 'Vuelos dirigidos por arquitectos e ingenieros que saben qué encuentros constructivos revisar y qué ángulos documentar.',
			},
			{
				title: 'Información para decisiones técnicas',
				text: 'Clasificación de lesiones por gravedad, localización planimétrica y recomendaciones sobre la información obtenida.',
			},
			{
				title: 'Formatos compatibles con su trabajo',
				text: 'Documentación apta para expediente y visado. Además podríamos entregar en formatos CAD/BIM.',
			},
		],
		services: ['inspeccion-tecnica-con-drones', 'fotogrametria-3d-edificios', 'diagnostico-fachadas'],
		cases: ['fisuras-en-fachada-residencial', 'fotogrametria-de-edificio-patrimonial'],
		pathologies: ['fisuras-y-grietas-en-fachadas'],
		videos: ['VID-01', 'VID-11'],
		articles: ['arquitecto-drones-vs-piloto'],
	},
	{
		slug: 'administracion-de-fincas',
		code: 'SEC-02',
		icon: Building2,
		title: 'Administradores de fincas',
		tagline: 'Estado real del edificio, información para la comunidad',
		intro: 'La comunidad necesita decisiones respaldadas: qué está pasando, cuánta urgencia tiene y con qué documentación se justifica el gasto. La inspección aérea aporta esa información sin costes de medios auxiliares ni molestias para los vecinos.',
		needsIntro: 'Lo que este perfil necesita habitualmente en su trabajo:',
		needs: [
			{
				title: 'Justificar gastos ante la comunidad',
				text: 'Documentación objetiva del estado del edificio que respalde las decisiones de junta y las partidas presupuestarias.',
			},
			{
				title: 'Detectar problemas antes de que sean graves',
				text: 'Identificar lesiones y humedades en fase inicial, cuando la reparación es más simple y económica.',
			},
			{
				title: 'Planificar el mantenimiento',
				text: 'Conocer el estado de cubiertas, fachadas y elementos singulares para programar actuaciones con antelación.',
			},
			{
				title: 'Responder ante los propietarios',
				text: 'Evidencia visual clara de cada incidencia, comprensible para cualquier vecino sin formación técnica.',
			},
		],
		approachIntro: 'Cómo lo resuelve EurodroneX:',
		approach: [
			{
				title: 'Informes comprensibles',
				text: 'Clasificación de incidencias por gravedad con fotografía de cada punto, sin tecnicismos innecesarios.',
			},
			{
				title: 'Sin molestias ni medios auxiliares',
				text: 'Sin andamios en la fachada, sin cortar la vía, sin alterar la vida del edificio.',
			},
			{
				title: 'Seguimiento temporal',
				text: 'Documentación comparable entre campañas para vigilar la evolución de cada incidencia.',
			},
		],
		services: ['inspeccion-tecnica-con-drones', 'termografia-con-dron'],
		cases: ['humedades-en-cubierta-plana'],
		pathologies: ['humedades-y-filtraciones-en-cubiertas', 'fisuras-y-grietas-en-fachadas'],
		videos: ['VID-04', 'VID-09'],
		articles: ['inspeccionar-edificio-sin-andamios-2026'],
	},
	{
		slug: 'constructoras-y-promotoras',
		code: 'SEC-03',
		icon: HardHat,
		title: 'Constructoras y promotoras',
		tagline: 'Control de ejecución y trazabilidad documental',
		intro: 'La obra genera preguntas constantes: en qué punto está el avance real, qué estado tenía la parcela en cada fecha, qué se ejecutó y cuándo. La captura aérea periódica convierte esa incertidumbre en un archivo visual objetivo y ordenado.',
		needsIntro: 'Lo que este perfil necesita habitualmente en su trabajo:',
		needs: [
			{
				title: 'Controlar el avance real de obra',
				text: 'Perspectiva global del estado de trabajos que las visitas a pie de obra no pueden ofrecer.',
			},
			{
				title: 'Trazabilidad documental',
				text: 'Registro con fecha y geolocalización del estado de obra en cada momento, para auditorías y certificaciones.',
			},
			{
				title: 'Resolver discrepancias',
				text: 'Evidencia objetiva para gestionar reclamaciones, control de subcontratas y unidades ejecutadas.',
			},
			{
				title: 'Levantamientos y mediciones',
				text: 'Modelos fotogramétricos para control dimensional, acopios y comparación con la planificación.',
			},
		],
		approachIntro: 'Cómo lo resuelve EurodroneX:',
		approach: [
			{
				title: 'Misiones repetibles',
				text: 'Cada campaña repite el mismo encuadre y trayectoria, obteniendo comparativas exactas entre fechas.',
			},
			{
				title: 'Archivo cronológico',
				text: 'Toda la documentación ordenada por fecha y fase de obra, lista para consultarse años después.',
			},
			{
				title: 'Formato para el equipo',
				text: 'Informes visuales compartibles con dirección técnica, propiedad y aseguradoras.',
			},
		],
		services: ['seguimiento-de-obra', 'fotogrametria-3d-edificios'],
		cases: ['fotogrametria-de-edificio-patrimonial'],
		pathologies: [],
		videos: ['VID-13', 'VID-14'],
		articles: ['inspeccionar-edificio-sin-andamios-2026'],
	},
	{
		slug: 'aseguradoras-y-peritos',
		code: 'SEC-04',
		icon: Scale,
		title: 'Aseguradoras y peritos',
		tagline: 'Evaluación de daños sin desplazamientos ni riesgo',
		intro: 'Tras un siniestro, la pregunta es siempre la misma: qué ha pasado exactamente y con qué gravedad. La captura aérea permite evaluar daños en cubiertas y fachadas de difícil acceso sin exponer a nadie, con grabación completa para el informe pericial.',
		needsIntro: 'Lo que este perfil necesita habitualmente en su trabajo:',
		needs: [
			{
				title: 'Evaluar daños sin desplazarse',
				text: 'Valorar el estado real de cubiertas y fachadas tras temporal, incendio u otro siniestro, sin viajes ni esperas.',
			},
			{
				title: 'Acceder a puntos peligrosos',
				text: 'Zonas con riesgo de desprendimiento o inaccesibles tras el siniestro, documentadas sin exponer a operarios.',
			},
			{
				title: 'Documentación con valor probatorio',
				text: 'Registro audiovisual completo y fechado, apto para informes y procesos de reclamación.',
			},
			{
				title: 'Activación rápida',
				text: 'Respuesta ágil cuando el tiempo de evaluación condiciona la indemnización.',
			},
		],
		approachIntro: 'Cómo lo resuelve EurodroneX:',
		approach: [
			{
				title: 'Peritaje en streaming',
				text: 'El perito dirige la inspección en tiempo real desde su ubicación, solicitando los enfoques que necesita.',
			},
			{
				title: 'Grabación completa en alta definición',
				text: 'Todo el vuelo queda registrado para revisión posterior y anexo al informe.',
			},
			{
				title: 'Ingenieros al mando',
				text: 'Vuelos dirigidos por técnicos que entienden el lenguaje del perito y priorizan lo que la tasación necesita.',
			},
		],
		services: ['streaming', 'diagnostico-fachadas'],
		cases: ['fisuras-en-fachada-residencial'],
		pathologies: ['fisuras-y-grietas-en-fachadas', 'humedades-y-filtraciones-en-cubiertas'],
		videos: ['VID-07'],
		articles: ['arquitecto-drones-vs-piloto'],
	},
];

export const getSector = (slug) => sectors.find((s) => s.slug === slug);
