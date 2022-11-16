import React, { useState } from "react";
import links from "../constants/routes/nav-links";
import { HeaderWrapper, Banner, Jumbotron } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { AdvancedSearchContainer, SideNavigationContainer } from "./index";
import { FaSignOutAlt } from "react-icons/fa";


const HeaderContainer = ({ bg, source }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };
  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Dweller Affairs
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          <HeaderWrapper.LinksContainer>
            <HeaderWrapper.List links="links">
            {user ? (
              <ul>
                <li>
                  <button className="btn" onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            ) : (<>
              {links.map((link) => (
                <HeaderWrapper.Item key={link.to}>
                  <HeaderWrapper.Anchor bg={bg} fixed={fixed} to={`${link.to}`}>
                    {link.name}
                  </HeaderWrapper.Anchor>
                </HeaderWrapper.Item>
              ))}
            </>)}
   
            </HeaderWrapper.List>
            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor to="/dashboard" special="true">
                  Admin Dashboard
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
            <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === "true" && (
        <Jumbotron>
          <Jumbotron.Left>
            <Jumbotron.Title>Looking for an apartment has never been easier</Jumbotron.Title>
            <Jumbotron.Text>
              Imagine finding a place to stay all in one click and getting approval on the spot? It's all possible with Dweller Affairs booking system
            </Jumbotron.Text>
          </Jumbotron.Left>
          <Jumbotron.Right>
            <AdvancedSearchContainer />
          </Jumbotron.Right>
        </Jumbotron>
      )}
      <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      />
    </Banner>
  );
};

export default HeaderContainer;
