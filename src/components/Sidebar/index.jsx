import styled from "styled-components";
import { useState } from "react";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  li {
    text-decoration: none;
  }
`;
const navigationItems = [
  {
    id: 0,
    label: "Home",
    iconActive: "/icons/home-active.png",
    iconInactive: "/icons/home-inactive.png",
  },
  {
    id: 1,
    label: "Most Viewed",
    iconActive: "/icons/most-viewed-active.png",
    iconInactive: "/icons/most-viewed-inactive.png",
  },
  {
    id: 2,
    label: "Most Liked",
    iconActive: "/icons/most-liked-active.png",
    iconInactive: "/icons/most-liked-inactive.png",
  },
  {
    id: 3,
    label: "New",
    iconActive: "/icons/new-active.png",
    iconInactive: "/icons/new-inactive.png",
  },
  {
    id: 4,
    label: "Surprise Me",
    iconActive: "/icons/surprise-me-active.png",
    iconInactive: "/icons/surprise-me-inactive.png",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <aside>
      <nav>
        <StyledList>
          {navigationItems.map((item, index) => (
            <NavItem
              key={item.id}
              iconActive={item.iconActive}
              iconInactive={item.iconInactive}
              active={activeIndex === index}
              onClick={() => handleItemClick(index)}
            >
              {item.label}
            </NavItem>
          ))}
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
