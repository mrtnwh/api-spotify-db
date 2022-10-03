const { request, response } = require("express");
const axios = require("axios").default;

async function deleteFollow(req = request, res = response) {
  const id = JSON.stringify(req.params);
  try {
    const response = await axios.delete(
      `https://api.spotify.com/v1/playlists/${
        id[7] +
        id[8] +
        id[9] +
        id[10] +
        id[11] +
        id[12] +
        id[13] +
        id[14] +
        id[15] +
        id[16] +
        id[17] +
        id[18] +
        id[19] +
        id[20] +
        id[21] +
        id[22] +
        id[23] +
        id[24] +
        id[25] +
        id[26] +
        id[27] +
        id[28]
      }/followers`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN_FOLLOW}`,
        },
      }
    );
    res.status(200).json({
      id:
        id[7] +
        id[8] +
        id[9] +
        id[10] +
        id[11] +
        id[12] +
        id[13] +
        id[14] +
        id[15] +
        id[16] +
        id[17] +
        id[18] +
        id[19] +
        id[20] +
        id[21] +
        id[22] +
        id[23] +
        id[24] +
        id[25] +
        id[26] +
        id[27] +
        id[28],
      msg: "se ha dejado de seguir a la playlist solicitada",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  deleteFollow,
};
