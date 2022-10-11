const { request, response } = require("express");
const axios = require("axios").default;

async function deleteFollow(req = request, res = response) {
  const { id } = req.params;
  try {
    const response = await axios.delete(
      `https://api.spotify.com/v1/playlists/${id}/followers`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    res.status(200).json({
      id: id,
      msg: "se ha dejado de seguir a la playlist solicitada",
    });
  } catch (error) {
    //Estandarizar los formatos de salida/respuesta
    console.log(error);
  }
}

module.exports = {
  deleteFollow,
};
