import React, { useState, useEffect } from 'react';

function CompleteInvestigationForm({ setGeneratedText, setGeneratedTitle, setGeneratedUrl }) {
  const [formData, setFormData] = useState({
    number: '',
    nombreInvestigacion: '',
    fechaInicio: '',
    sector: '',
    unidad: '',
    unidadProponente: '',
    implicados: '',
    descripcionInvestigacion: '',
    imagenes: '',
    comentariosOOC: ''
  });

  useEffect(() => {
    generateText();
    generateTitle();
  }, [formData]); // Trigger text and title generation whenever formData changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateTitle = () => {
    const { number, nombreInvestigacion, fechaInicio } = formData;
    const formattedTitle = `(PROPUESTA) Investigación nº${number} - ${nombreInvestigacion} - ${fechaInicio}`;
    setGeneratedTitle(formattedTitle);
    setGeneratedUrl(`https://wno.es/forums/forums/181/post-thread?title=${encodeURIComponent(formattedTitle)}`);
  };

  const generateText = () => {
    const {
      sector,
      unidad,
      nombreInvestigacion,
      fechaInicio,
      unidadProponente,
      implicados,
      descripcionInvestigacion,
      imagenes,
      comentariosOOC
    } = formData;

    const imageLinks = imagenes
      .split('\n')
      .map((img) => img.trim())
      .filter((img) => img)
      .map((img) => `[IMG]${img}[/IMG]`)
      .join('\n');

    const generated = `[CENTER][IMG]https://i.imgur.com/rilsYXq.png[/IMG]

[B][SIZE=6]INFORME DE INVESTIGACIÓN[/SIZE][/B][/CENTER]
[HR][/HR]

[B]A. INFORME ESCRITO[/B]

El presente informe es emitido por [B]Protección Civil[/B] de las Fuerzas de Vigilancia de la Alianza. A continuación, se detalla la información recopilada sobre la investigación en el sector [B][${sector}][/B]. El personal partícipe fue: [B][${unidad}][/B].

[HR][/HR]

[B]B. DETALLES DE LA INVESTIGACIÓN[/B]

[B]Nombre de la investigación (nombre del sujeto, calle, suceso...):[/B]  
${nombreInvestigacion}

[B]Fecha de inicio:[/B]  
${fechaInicio}

[B]Unidad que propone la investigación:[/B]  
${unidadProponente}

[B]Nombres y CID de los implicados, además de detallar su implicación en el caso (si hay sujetos y si se tienen esos datos):[/B]  
${implicados}

[B]Descripción de lo investigado:[/B]  
${descripcionInvestigacion}

[B]Fotografías o documentación (se pueden añadir screenshots):[/B]  
${imageLinks}

[HR][/HR]

[CENTER][B][U](( FUERA DE PERSONAJE ))[/U][/B][/CENTER]  
Este apartado especifica todo lo necesario de OOC: ${comentariosOOC}

[HR][/HR]

[B]C. DECLARACIÓN[/B]

Como agente de Protección Civil, he realizado anotaciones detalladas de mis hallazgos y conclusiones, y estas notas están disponibles para su revisión si es necesario. Cabe destacar que estas notas no contienen opiniones personales y se basan únicamente en las pruebas y hechos disponibles.

En conclusión, espero que este informe proporcione la información necesaria para que la agencia tome las medidas correspondientes. Por favor, háganme saber si requieren información adicional o si puedo ser de mayor ayuda.

Certifico que la información contenida en este informe es veraz y precisa a mi leal saber y entender. He revisado el informe y me he asegurado de que toda la información incluida es completa y correcta.

[HR][/HR]`;

    setGeneratedText(generated);
  };

  return (
    <div className="container form-container mt-5">
      <h2 className="mb-4 text-center">Informe de Investigación</h2>
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
            <label>Nombre de la investigación:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="nombreInvestigacion"
              value={formData.nombreInvestigacion}
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
              name="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Body Section */}
        <h3>Cuerpo</h3>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Sector:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Unidad:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="unidad"
              value={formData.unidad}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Unidad que propone la investigación:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              name="unidadProponente"
              value={formData.unidadProponente}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Nombres y CID de los implicados:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="implicados"
              value={formData.implicados}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-md-4 text-md-right">
            <label>Descripción de lo investigado:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="descripcionInvestigacion"
              value={formData.descripcionInvestigacion}
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
            <label>Comentarios OOC:</label>
          </div>
          <div className="col-md-8">
            <textarea
              name="comentariosOOC"
              value={formData.comentariosOOC}
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

export default CompleteInvestigationForm;
