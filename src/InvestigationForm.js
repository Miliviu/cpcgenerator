import React, { useState, useEffect } from 'react';

function InvestigationForm({ setGeneratedText, setGeneratedTitle, setGeneratedUrl }) {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    date: '',
    sectorIncidente: '',
    unidadesParticipes: '',
    descripcionIncidente: '',
    transgresores: '',
    detencionesNexo: '',
    sancionAplicada: '',
    heridos: '',
    comentarios: '',
    imagenes: '',
    infoOOC: ''
  });

  useEffect(() => {
    generateText();
    generateTitle();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateTitle = () => {
    const { number, name, date } = formData;
    const formattedTitle = `Informe nº${number} - (${name}) - ${date}`;
    setGeneratedTitle(formattedTitle);
    setGeneratedUrl(`https://wno.es/forums/forums/180/post-thread?title=${encodeURIComponent(formattedTitle)}`);
  };

  const generateText = () => {
    const {
      sectorIncidente,
      unidadesParticipes,
      descripcionIncidente,
      transgresores,
      detencionesNexo,
      sancionAplicada,
      heridos,
      comentarios,
      imagenes,
      infoOOC
    } = formData;

    const imageLinks = imagenes
      .split('\n')
      .map((img) => img.trim())
      .filter((img) => img)
      .map((img) => `[SPOILER][img]${img}[/img][/SPOILER]`)
      .join('\n');

    const generated = `[center][img]https://i.imgur.com/rilsYXq.png[/img][/center]

[center][b][size=6]INFORME DE INCIDENTE[/size][/b][/center]
[hr][/hr]

[b]A. INFORME ESCRITO[/b]

El presente informe es emitido por [b]Protección Civil[/b] de las Fuerzas de Vigilancia de la Alianza en Ciudad 24. A continuación, se detalla la información recopilada sobre el incidente ocurrido en el sector [b][${sectorIncidente}][/b]. El personal partícipe fue: [b][${unidadesParticipes}][/b].

[b]Descripción del incidente:[/b] ${descripcionIncidente}

[b]Transgresores:[/b] ${transgresores}

[b]¿Han habido detenciones a nexo?:[/b] ${detencionesNexo}

[b]Sanción aplicada:[/b] ${sancionAplicada}

[b]¿Unidades o civiles heridos?:[/b] ${heridos}

[b]Comentarios/Otros:[/b] ${comentarios}

[hr][/hr]

[b]B. DOCUMENTACIÓN FOTOGRÁFICA[/b]

[center][b][u]IMÁGENES DEL INCIDENTE[/u][/b][/center]
${imageLinks}

[hr][/hr]

[center][b][u](( FUERA DE PERSONAJE ))[/u][/b][/center]
Este apartado especifica todo lo necesario de OOC: ${infoOOC}

[hr][/hr]

[b]C. DECLARACIÓN[/b]

Como agente de Protección Civil, he realizado anotaciones detalladas de mis hallazgos y conclusiones, y estas notas están disponibles para su revisión si es necesario. Cabe destacar que estas notas no contienen opiniones personales y se basan únicamente en las pruebas y hechos disponibles.

En conclusión, espero que este informe proporcione la información necesaria para que la agencia tome las medidas correspondientes. Por favor, háganme saber si requieren información adicional o si puedo ser de mayor ayuda.

Certifico que la información contenida en este informe es veraz y precisa a mi leal saber y entender. He revisado el informe y me he asegurado de que toda la información incluida es completa y correcta.

[hr][/hr]`;

    setGeneratedText(generated);
  };

  return (
    <div className="container form-container mt-5">
      <h2 className="mb-4 text-center">Informe de Incidente</h2>
      <form>
        {/* Title Section */}
        <h3>Título</h3>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Número:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Nombre del caso:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Fecha OOC:</label>
          </div>
          <div className="col-md-8">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Body Section */}
        <h3>Cuerpo</h3>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Sector donde ocurrió el incidente:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="sectorIncidente"
              value={formData.sectorIncidente}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Unidades partícipes:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="unidadesParticipes"
              value={formData.unidadesParticipes}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Descripción del incidente:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="descripcionIncidente"
              value={formData.descripcionIncidente}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Transgresores (Nombre, apellidos y CID):</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="transgresores"
              value={formData.transgresores}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>¿Han habido detenciones a nexo? (Incluir motivo):</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="detencionesNexo"
              value={formData.detencionesNexo}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Sanción aplicada:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="sancionAplicada"
              value={formData.sancionAplicada}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>¿Unidades o civiles heridos?:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="heridos"
              value={formData.heridos}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Comentarios/Otros:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Fotografías o documentación (Enlaces de Imgur):</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="imagenes"
              value={formData.imagenes}
              onChange={handleChange}
              className="form-control"
              placeholder="Pega aquí los enlaces de Imgur, uno por línea"
              rows="3"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Información OOC:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="infoOOC"
              value={formData.infoOOC}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvestigationForm;
