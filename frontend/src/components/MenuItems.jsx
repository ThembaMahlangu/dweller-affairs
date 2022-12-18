import { faAddressBook, faHouseUser,faBuilding,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const MenuItems = [
  // Make a list of Navlinks & their properties.
  {
    title : "Home",
    url : "/",
    cName : "nav-links",
    icon : faHouseUser
  },
  {
    title : "Accomodation",
    url : "/accomodation",
    cName : "nav-links",
    icon :faBuilding
  },
  {
    title : "About",
    url : "/about",
    cName : "nav-links",
    icon : faCircleInfo
  },
  {
    title : "Contact",
    url : "/contact",
    cName : "nav-links",
    icon : faAddressBook
  },
];
