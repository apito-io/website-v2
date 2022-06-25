import { useState } from "react";
import React from "react";
import Sticky from "react-stickynode";
import Header from "./header";

const StickyHeader = () => {
  const [isSticky, setSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  return (
    <Sticky onStateChange={handleStateChange} innerZ={100}>
      <Header isSticky={isSticky} />
    </Sticky>
  );
};

export default StickyHeader;
