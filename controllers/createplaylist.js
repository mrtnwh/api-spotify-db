const { request, response } = require("express");
const axios = require("axios");

async function postPlaylist(req = request, res = response) {
  const { id } = req.params;
  const { name } = req.params;
  const { description } = req.params;
  try {
    const response = await axios.post(
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
    res.status(200).json({
      id: id,
      msg: "se ha creado la playlist solicitada",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  postPlaylist,
};
