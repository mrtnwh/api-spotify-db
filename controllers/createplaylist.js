const { request, response } = require("express");
const axios = require("axios");

async function postPlaylist(req = request, res = response) {

  //Sugerencia, se puede desestructurar las 3 constantes en una misma linea
  //const { id, name, description } = req.params;
  const { id } = req.params;
  const { name } = req.params;
  const { description } = req.params;
  try {
    //Ejemplo de desestructuracion del response. //Borrar si no se utiliza
    const {
            status, 
            statusText,
            data: {
              href,              
              owner: {
                display_name
              },
              public
            }
          } = await axios.post(
      `https://api.spotify.com/v1/users/${id}/playlists`,
      {
        name: `${name}`,
        description: `${description}`,
        public: false,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );

    //console.log(response);
    res.status(200).json({
      id: id,
      msg: "se ha creado la playlist solicitada",
    });
  } catch (error) {
    //Estandarizar los formatos de salida/respuesta
    //console.log(error);
    const {status:statusCode = 400, message:statusText = ''} = error?.response?.data?.error;
    //Ejemplo varios de salida de error
    res.status(statusCode).json({
        msg:error?.message,
        code:error?.code,
        status:statusCode,
        statusText:statusText,
    });
  }
}

module.exports = {
  postPlaylist,
};
