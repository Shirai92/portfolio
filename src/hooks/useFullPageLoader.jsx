import React, { useState, useCallback } from "react";
import FullPageLoader from "../components/fullPageLoader/fullPageLoader";

const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);

  

  const setLoadingTrue = useCallback( () => {
    setLoading(true); //Show loader
  },[])
  const setLoadingFalse = useCallback( () => {
    setLoading(false); //Hide Loader
  },[])

  return [loading ? <FullPageLoader /> : null, setLoadingTrue, setLoadingFalse];
};

export default useFullPageLoader;
