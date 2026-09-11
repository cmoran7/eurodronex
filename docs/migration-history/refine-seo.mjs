import fs from 'node:fs';
const routes=JSON.parse(fs.readFileSync('content/routes.json'));
const meta={
'/servicios':['Servicios de inspección de edificios con drones en Madrid','Inspección técnica de edificios, termografía, fotogrametría, diagnóstico de fachadas y seguimiento de obra en Madrid. Solicite una evaluación.'],
'/sectores':['Inspección con drones para profesionales de la construcción','Servicios técnicos para arquitectura, ingeniería, administración de fincas, constructoras y aseguradoras. Inspección y diagnóstico de edificios.'],
'/ingenieria':['Ingeniería aplicada a la inspección de edificios','Ingeniería y arquitectura para interpretar la información capturada con drones. Diagnóstico, documentación e informes técnicos en Madrid.'],
'/contacto':['Contacto y evaluación técnica de edificios','Solicite una evaluación técnica de su edificio. Llame al 611 623 480 o escriba a contacto@eurodronex.com. Madrid y provincias limítrofes.'],
'/sobre-eurodronex':['Sobre EurodroneX: ingeniería técnica e inspección aérea','Conozca el enfoque de EurodroneX: ingeniería especializada en inspección, diagnóstico y documentación de edificios mediante tecnología aérea.'],
'/tecnologia':['Tecnología y metodología de inspección con drones','Del vuelo al informe: planificación, captura aérea, termografía, fotogrametría e interpretación técnica de los datos de su edificio.'],
'/entregables':['Informes y documentación de inspección de edificios','Conozca los entregables de una inspección técnica: imágenes anotadas, informes, termografías, modelos 3D y documentación digital del edificio.'],
'/servicios/inspeccion-tecnica-con-drones':['Inspección técnica de edificios con drones en Madrid','Inspección de fachadas, cubiertas y estructuras con drones. Documentación de patologías e informes técnicos para evaluar el estado del edificio.'],
'/servicios/termografia-con-dron':['Termografía con drones en edificios de Madrid','Inspección termográfica de fachadas y cubiertas para documentar anomalías térmicas, puentes térmicos y posibles humedades con criterio técnico.'],
'/servicios/fotogrametria-3d-edificios':['Fotogrametría y modelos 3D de edificios con drones','Documentación tridimensional de edificios mediante fotogrametría aérea. Modelos 3D, ortofotos y datos para proyectos técnicos y rehabilitación.'],
'/servicios/diagnostico-fachadas':['Diagnóstico de fachadas con drones en Madrid','Documentación y evaluación técnica de fisuras, desprendimientos y lesiones en fachadas. Inspección aérea para orientar el diagnóstico del edificio.'],
'/servicios/seguimiento-de-obra':['Seguimiento de obra con drones en Madrid','Documentación aérea periódica del avance de obra. Imágenes y registros para el control técnico, la trazabilidad y la coordinación del proyecto.'],
'/servicios/streaming':['Peritaje e inspección de edificios en streaming','Inspección aérea en directo para evaluación remota de edificios y siniestros. Visualización, indicaciones y documentación sin desplazamientos.'],
'/servicios/inspeccion-precompra':['Inspección precompra de edificios e inmuebles','Evaluación técnica antes de comprar o vender un inmueble. Inspección y documentación del edificio para inmobiliarias, promotoras y compradores.'],
'/sectores/arquitectura-e-ingenieria':['Inspección con drones para arquitectura e ingeniería','Captura aérea y documentación técnica para estudios de arquitectura e ingeniería. Apoyo en diagnóstico, rehabilitación y evaluación de edificios.'],
'/sectores/administracion-de-fincas':['Inspección de edificios para administradores de fincas','Inspección de fachadas y cubiertas para comunidades y administradores de fincas. Documentación de patologías para planificar el mantenimiento.'],
'/sectores/constructoras-y-promotoras':['Inspección con drones para constructoras y promotoras','Seguimiento de obra, captura aérea y documentación técnica para constructoras y promotoras. Información para controlar el avance del proyecto.'],
'/sectores/aseguradoras-y-peritos':['Inspección con drones para aseguradoras y peritos','Documentación aérea de siniestros y edificios para aseguradoras y peritos. Captura visual, inspección remota y apoyo a la evaluación técnica.'],
'/videos':['Vídeos de inspección técnica de edificios','Galería de vídeos de referencia sobre inspección de fachadas, cubiertas, termografía y fotogrametría. Material de demostración identificado.'],
'/casos-de-estudio':['Casos de estudio de inspección de edificios','Expedientes de demostración sobre inspección técnica: problemática, metodología, captura aérea, análisis y documentación del edificio.'],
'/patologias':['Biblioteca de patologías de edificios','Fichas técnicas sobre fisuras, humedades, filtraciones y anomalías térmicas en edificios. Biblioteca de demostración para revisión profesional.']
};
for(const [route,[title,description]]of Object.entries(meta)){routes[route].title=title+' | EurodroneX';routes[route].description=description}
fs.writeFileSync('content/routes.json',JSON.stringify(routes,null,2)+'\n');
