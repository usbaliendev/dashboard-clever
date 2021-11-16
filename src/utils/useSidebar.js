import { useState, useEffect } from "react";
import { setToLS, getFromLS } from "../utils/storage";
import _ from "lodash";

export const useSidebar = () => {
  const [isopen, setIsopen] = useState(true);
  const [sidebarLoaded, setSidebarLoaded] = useState(true);

  const setOpen = (mode) => {
    setToLS("isopen", mode);
    setIsopen(mode);
  };

  useEffect(() => {
    const initialSidebar = getFromLS("isopen");
    initialSidebar ? setOpen(initialSidebar) : setOpen(true);
    setSidebarLoaded(true);
  }, []);

  return { isopen, setOpen, sidebarLoaded };
};
