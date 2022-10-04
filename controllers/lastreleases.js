const { request, response } = require("express");
const axios = require("axios").default;

async function getLastReleases(req = request, res = response) {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}/albums?include_groups=single&market=ES&limit=5`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN1}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getLastReleases,
};
