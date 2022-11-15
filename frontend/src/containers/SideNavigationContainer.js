import React from "react";
import { SideNavigation } from "../components";

import links from "../constants/routes/nav-links";

const SideNavigationContainer = ({
  sideNavShown,
  setSideNavShown,
  sideNavHidden,
  setSideNavHidden,
}) => {
  return (
    <SideNavigation shown={sideNavShown} hidden={sideNavHidden}>
      <SideNavigation.Container>
        <SideNavigation.Cross>
          <SideNavigation.Icon
            name="fas fa-times"
            onClick={() => {
              setSideNavHidden(true);
              setSideNavShown(false);
            }}
          />
        </SideNavigation.Cross>
        <SideNavigation.Header>
          <SideNavigation.Title>Dweller Affairs</SideNavigation.Title>
          <SideNavigation.Text>Renting made simple</SideNavigation.Text>
        </SideNavigation.Header>

        <SideNavigation.Links>
          <SideNavigation.List>
            {links.map((link) => (
              <SideNavigation.ListItem key={link.to}>
                <SideNavigation.Anchor to={link.to}>
                  {link.name}
                </SideNavigation.Anchor>
              </SideNavigation.ListItem>
            ))}
            <SideNavigation.ListItem>
              <SideNavigation.Anchor to="/dashboard">
                Admin Dashboard
              </SideNavigation.Anchor>
            </SideNavigation.ListItem>
          </SideNavigation.List>
        </SideNavigation.Links>
      </SideNavigation.Container>
    </SideNavigation>
  );
};

export default SideNavigationContainer;
