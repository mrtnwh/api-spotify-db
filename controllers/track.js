const { request, response } = require("express");
const axios = require("axios").default;

async function getTrack(req = request, res = response) {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/tracks/${id}`,
      {
        params: {
          market: "ES",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN1}`,
        },
      }
    );
    res.send(JSON.stringify(response.data));
    //res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTrack,
};
