import axios from "axios";

const chooseTheJob = ({ path, workerId, jobId }) => {
  axios.get(
    `https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/${path}`
  );
};

const OpenJobs = {
  chooseTheJob,
};

export default OpenJobs;
