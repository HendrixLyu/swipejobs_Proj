import OpenJobs from "../../libs/OpenJobs/OpenJobs";

const acceptJob = (jobID) => {
  return OpenJobs.chooseTheJob({
    path: "accept",
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
    jobId: String({...jobID}),
  });
};
export default acceptJob;
