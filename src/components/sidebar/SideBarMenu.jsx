import React from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./SideBarMenu.scss";

const SideBarMenu = () => {
  return (
    <section id="SideBar">
      <div className="leftMenu">
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            // maybe push to the route
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/dashboard",
              // you can use your own custom Icon component as well
              // icon is optional
              // elemBefore: () => <Icon name="inbox" />,
            },
            {
              title: "Management",
              itemId: "/management",
              // elemBefore: () => <Icon name="users" />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/management/projects",
                },
                {
                  title: "Members",
                  itemId: "/management/members",
                },
              ],
            },
            {
              title: "Another Item",
              itemId: "/another",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/management/teams",
                },
              ],
            },
            {
              title: "Product",
              itemId: "/product",
              // elemBefore: () => <Icon name="users" />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/product/projects",
                },
                {
                  title: "Members",
                  itemId: "/product/members",
                },
              ],
            },
            {
              title: "Furniture",
              itemId: "/furniture",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/management/teams",
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

export default SideBarMenu;
