import React, { useState } from "react";
import { SidebarLink, Linkbox, Arrowbox, DropdownLink } from "./style";

const SubMenu = (entrada) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  let isopen = entrada.isopen;
  let entrItem = entrada.entrada;
  return (
    <>
      <SidebarLink
        to={entrItem.path}
        onClick={entrItem.subNav && isopen ? showSubnav : null}
        className={subnav ? "active" : null}
        isopen={isopen}
      >
        <Linkbox>
          {entrItem.icon}
          <span>{entrItem.title}</span>
        </Linkbox>
        <Arrowbox isopen={isopen}>
          {entrItem.subNav && subnav
            ? entrItem.iconOpened
            : entrItem.subNav
            ? entrItem.iconClosed
            : null}
        </Arrowbox>
      </SidebarLink>
      {subnav && isopen
        ? entrItem.subNav.map((subitem, index) => {
            return (
              <DropdownLink to={subitem.path} key={index}>
                <span>{subitem.title}</span>
              </DropdownLink>
            );
          })
        : null}
    </>
  );
};

export default SubMenu;
