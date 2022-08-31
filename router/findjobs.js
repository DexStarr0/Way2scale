const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "8c48e01ee0ee42fbf32b46336221c1f897d13390d72cf3f2f994428133c09310"
);
//post search_job
router.post("/findjobs", async (req, res) => {
  try {
    const { job_type, location } = req.body;
    if (!job_type || !location)
      return res.status(400).json({ error: "Inalid Input" });

    // const rem = "java + developer + pune + india";
    // const url = `https://serpapi.com/search.json?engine=google_jobs&q=${rem}&google_domain=google.com&gl=us&hl=en&api_key=8c48e01ee0ee42fbf32b46336221c1f897d13390d72cf3f2f994428133c09310`;
    // const response = await fetch(url, {
    //   method: "GET",
    //   "Content-Type": "application/json",
    // });
    // const data = await response.json();
    // res.send(data["jobs_results"]);
    const params = {
      engine: "google_jobs",
      start: -1,
      q: `${job_type + " " + location}`,
      google_domain: "google.com",
      // location: location,
    };

    const callback = function (data) {
      res.send(data["jobs_results"]);
    };

    // Show result as JSON
    search.json(params, callback);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
