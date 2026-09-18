<div
	class="elementor-element elementor-element-17c9adc e-flex e-con-boxed e-con e-parent e-lazyloaded"
	data-id="17c9adc"
>
	<div class="e-con-inner">
		<div
			class="elementor-element elementor-element-4118703 elementor-widget elementor-widget-heading"
			data-id="4118703"
		>
			<h2 class="elementor-heading-title elementor-size-default">Solicitar presupuesto</h2>
		</div>
		<div
			class="elementor-element elementor-element-15265b2 elementor-widget elementor-widget-text-editor"
			data-id="15265b2"
		>
			<p>Respuesta en menos de 24 horas</p>
		</div>
		<div
			class="elementor-element elementor-element-4079d6d e-con-full e-flex e-con e-child e-lazyloaded"
			data-id="4079d6d"
		>
			<div
				class="elementor-element elementor-element-0ead9c1 elementor-button-align-stretch elementor-widget elementor-widget-form"
				data-id="0ead9c1"
			>
				<form
					class="elementor-form"
					method="post"
					name="New Form"
					aria-label="New Form"
					action="/services/contact_process.php"
					enctype="multipart/form-data"
					data-contact-form=""
				>
					<input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>" />
					<input
						type="text"
						name="website"
						class="form-trap"
						tabindex="-1"
						autocomplete="off"
						aria-hidden="true"
					/>
					<p class="form-status" role="status" hidden=""></p>
					<div class="elementor-form-fields-wrapper elementor-labels-above">
						<div
							class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50"
						>
							<label for="form-field-name" class="elementor-field-label">NOMBRE COMPLETO</label>
							<input
								size="1"
								type="text"
								name="nombre"
								id="form-field-name"
								class="elementor-field elementor-size-md elementor-field-textual"
								placeholder="Nombre y Apellidos"
								required=""
							/>
						</div>
						<div
							class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1cfe439 elementor-col-50"
						>
							<label for="form-field-field_1cfe439" class="elementor-field-label">EMPRESA</label>
							<input
								size="1"
								type="text"
								name="empresa"
								id="form-field-field_1cfe439"
								class="elementor-field elementor-size-md elementor-field-textual"
								placeholder="Nombre de la Empresa o particular"
							/>
						</div>
						<div
							class="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_fa09154 elementor-col-50"
						>
							<label for="form-field-field_fa09154" class="elementor-field-label">Teléfono</label>
							<input
								size="1"
								type="tel"
								name="telefono"
								id="form-field-field_fa09154"
								class="elementor-field elementor-size-md elementor-field-textual"
								placeholder="+34 600 000 000"
								pattern="[0-9()#&amp;+*-=.]+"
								title="Only numbers and phone characters (#, -, *, etc) are accepted."
							/>
						</div>
						<div
							class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required"
						>
							<label for="form-field-email" class="elementor-field-label">Email</label>
							<input
								size="1"
								type="email"
								name="email"
								id="form-field-email"
								class="elementor-field elementor-size-md elementor-field-textual"
								placeholder="email@ejemplo.com"
								required="required"
							/>
						</div>
						<div
							class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_1fe42de elementor-col-50"
						>
							<label for="form-field-field_1fe42de" class="elementor-field-label">TIPO DE CLIENTE</label>
							<div class="elementor-field elementor-select-wrapper remove-before">
								<div class="select-caret-down-wrapper">
									<svg
										aria-hidden="true"
										class="e-font-icon-svg e-eicon-caret-down"
										viewBox="0 0 571.4 571.4"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"
										></path>
									</svg>
								</div>
								<select
									name="tipoCliente"
									id="form-field-field_1fe42de"
									class="elementor-field-textual elementor-size-md"
								>
									<option value="Seleccionar tipo">Seleccionar tipo</option>
									<option value="Administrador de fincas">Administrador de fincas</option>
									<option value="Aseguradora">Aseguradora</option>
									<option value="Constructora">Constructora</option>
									<option value="Arquitecto / Ingeniero">Arquitecto / Ingeniero</option>
									<option value="Perito judicial">Perito judicial</option>
									<option value="Promotor inmobiliario">Promotor inmobiliario</option>
									<option value="Particular">Particular</option>
									<option value="Inmobiliaria">Inmobiliaria</option>
									<option value="Otro">Otro</option>
								</select>
							</div>
						</div>
						<div
							class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_34995c2 elementor-col-50"
						>
							<label for="form-field-field_34995c2" class="elementor-field-label">TIPO DE SERVICIO</label>
							<div class="elementor-field elementor-select-wrapper remove-before">
								<div class="select-caret-down-wrapper">
									<svg
										aria-hidden="true"
										class="e-font-icon-svg e-eicon-caret-down"
										viewBox="0 0 571.4 571.4"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"
										></path>
									</svg>
								</div>
								<select
									name="tipoServicio"
									id="form-field-field_34995c2"
									class="elementor-field-textual elementor-size-md"
								>
									<option value="Seleccionar servicio">Seleccionar servicio</option>
									<option value="Termografía">Termografía</option>
									<option value="Fotogrametría">Fotogrametría</option>
									<option value="Inspección en streaming">Inspección en streaming</option>
									<option value="Seguimiento de obra">Seguimiento de obra</option>
									<option value="Peritación judicial">Peritación judicial</option>
									<option value="Consulta / Asesoramiento">Consulta / Asesoramiento</option>
									<option value="Visita de obra">Visita de obra</option>
									<option value="Inspección fachada/cubierta">Inspección fachada/cubierta</option>
									<option value="Topografía">Topografía</option>
								</select>
							</div>
						</div>
						<div
							class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_2011b8b elementor-col-50"
						>
							<label for="form-field-field_2011b8b" class="elementor-field-label">TIPO DE EDIFICIO</label>
							<div class="elementor-field elementor-select-wrapper remove-before">
								<div class="select-caret-down-wrapper">
									<svg
										aria-hidden="true"
										class="e-font-icon-svg e-eicon-caret-down"
										viewBox="0 0 571.4 571.4"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"
										></path>
									</svg>
								</div>
								<select
									name="tipoEdificio"
									id="form-field-field_2011b8b"
									class="elementor-field-textual elementor-size-md"
								>
									<option value="Seleccionar tipo">Seleccionar tipo</option>
									<option value="Residencial">Residencial</option>
									<option value="Industrial">Industrial</option>
									<option value="Comercial">Comercial</option>
									<option value="Histórico">Histórico</option>
									<option value="Otro">Otro</option>
								</select>
							</div>
						</div>
						<div
							class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_3c3af2e elementor-col-50"
						>
							<label for="form-field-field_3c3af2e" class="elementor-field-label">Ubicación</label>
							<input
								size="1"
								type="text"
								name="ubicacion"
								id="form-field-field_3c3af2e"
								class="elementor-field elementor-size-md elementor-field-textual"
								placeholder="Ciudad, municipio o dirección"
							/>
						</div>
						<div
							class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_5e1f553 elementor-col-100"
						>
							<label for="form-field-field_5e1f553" class="elementor-field-label">URGENCIA</label>
							<div class="elementor-field elementor-select-wrapper remove-before">
								<div class="select-caret-down-wrapper">
									<svg
										aria-hidden="true"
										class="e-font-icon-svg e-eicon-caret-down"
										viewBox="0 0 571.4 571.4"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"
										></path>
									</svg>
								</div>
								<select
									name="urgencia"
									id="form-field-field_5e1f553"
									class="elementor-field-textual elementor-size-md"
								>
									<option value="Seleccionar urgencia">Seleccionar urgencia</option>
									<option value="No urgente (más de 1 mes)">No urgente (más de 1 mes)</option>
									<option value="Normal (2-4 semanas)">Normal (2-4 semanas)</option>
									<option value="Prioritaria (1-2 semanas)">Prioritaria (1-2 semanas)</option>
									<option value="Urgente (menos de 1 semana)">Urgente (menos de 1 semana)</option>
								</select>
							</div>
						</div>
						<div
							class="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100"
						>
							<label for="form-field-message" class="elementor-field-label">MENSAJE</label>
							<textarea
								class="elementor-field-textual elementor-field elementor-size-md"
								name="mensaje"
								id="form-field-message"
								rows="8"
								placeholder="Describa brevemente su necesidad técnica..."
							></textarea>
						</div>
						<div
							class="elementor-field-type-upload elementor-field-group elementor-column elementor-field-group-field_c5be65d elementor-col-100"
						>
							<label for="form-field-field_c5be65d" class="elementor-field-label">
								adjuntar imagenes (opcional)
							</label>
							<input
								type="file"
								name="imagenes[]"
								id="form-field-field_c5be65d"
								class="elementor-field elementor-size-md elementor-upload-field"
								multiple=""
								accept="image/jpeg,image/png,image/webp"
							/>
						</div>
						<div
							class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons"
						>
							<button class="elementor-button elementor-size-md" type="submit">
								<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Solicitar revisión técnica</span>
								</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
