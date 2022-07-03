import axios from "axios";

const getAllJobs = ({ workerId, path }) =>
  axios.get(`https://test.swipejobs.com/api/worker/${workerId}${path}`);

const getTheWorker = ({ workerId, path }) =>
  axios.get(`https://test.swipejobs.com/api/worker/${workerId}${path}`);

const OpenWorker = {
  getAllJobs,
  getTheWorker,
};

export default OpenWorker;
