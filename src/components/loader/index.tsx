import React, { FC } from "react";

const Loader: FC<{ loading: boolean }> = ({ loading = true }) => {
  return <div>Fetching Details..</div>;
};

export default Loader;
