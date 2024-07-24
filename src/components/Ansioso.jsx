import React from "react";

function Ansioso() {
  // Define el HTML del GIF que se desea renderizar
  const gifHtml = `
    <div class="tenor-gif-embed" data-postid="3842686009992743035" data-share-method="host" data-aspect-ratio="0.564257" data-width="100%">
      <a href="https://tenor.com/view/dancing-dog-ai-poodle-gif-3842686009992743035">Dancing Dog GIF</a> from <a href="https://tenor.com/search/dancing-gifs">Dancing GIFs</a>
    </div>
    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  `;

  const gasparcitoHtml = `<div class="tenor-gif-embed" data-postid="17803773" data-share-method="host" data-aspect-ratio="1.04918" data-width="100%"><a href="https://tenor.com/view/dog-the-pet-collective-stand-up-cross-walking-gif-17803773">Dog The Pet Collective GIF</a>from <a href="https://tenor.com/search/dog-gifs">Dog GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`;
  // Renderiza el HTML del GIF de forma segura utilizando dangerouslySetInnerHTML
  return (
    <>
      <div className="relative">
        <div className="w-96 sm:w-full bg-orange-600 text-yellow-200 rounded-lg p-4 ml-40  mr-20 shadow-md max-w-xs absolute top-20 left-86">
          <p className="text-2xl italic text-center">
            {" "}
            Así nos espera Willy cuando llega la hora <br></br>de su paseo
          </p>
        </div>
        <div
          className="absolute top-20 left-96 w-1/5 h-auto rounded-3xl overflow-hidden ml-60"
          dangerouslySetInnerHTML={{ __html: gifHtml }}
        />
      </div>

      <div className="mt-20 relative">
        <div
          className="absolute tope-gaspar left-96  margen-perro w-1/5 h-auto rounded-3xl overflow-hidden ml-60"
          dangerouslySetInnerHTML={{ __html: gasparcitoHtml }}
        />
      </div>

      <div className="text-center margen-logo">
        {" "}
        {/* Añadimos un margen superior para separar el logoFooter */}
        <img
          src={"./imagenes/LogoFooter.jpg"}
          alt="Paseador ansioso"
          className="w-2/6 mx-auto" // Añadimos la clase margin-logo
        />
      </div>
    </>
  );
}

export default Ansioso;
