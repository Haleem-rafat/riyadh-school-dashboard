import React from "react";

const useForceReload = () => {
  const [reload, setReload] = React.useState(false);
  const forceReload = () => setReload((p) => !p);
  return {
    reload,
    forceReload,
  };
};

export default useForceReload;
