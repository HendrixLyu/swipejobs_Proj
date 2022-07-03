// import 'dotenv/config'
import OpenWorker from "../../libs/OpenWorker";

const getMatchedJobs = () => {
  return OpenWorker.getAllJobs({
    // workerId: process.env.worker_ID || "7f90df6e-b832-44e2-b624-3143d428001f",
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
    path: "/matches",
  });
};

export default getMatchedJobs;
