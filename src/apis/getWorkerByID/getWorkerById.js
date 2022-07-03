import OpenWorker from "../../libs/OpenWorker";

const getWorkerName = () => {
  return OpenWorker.getTheWorker({
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
    path: "/profile",
  });
};
export default getWorkerName;
