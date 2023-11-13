import React, { useState } from "react";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav-mobile">
      {isOpen && <div className="">jel raid ovo</div>}
    </div>
  );
};

export default NavMobile;
