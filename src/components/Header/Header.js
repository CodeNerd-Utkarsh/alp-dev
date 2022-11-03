/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";

import { ReactComponent as ALPLogo } from "assets/images/alpLogo.svg";
import { ListItem } from "@mui/material";

import { pages, settings } from "components/Data/data";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeLang } from "redux/reducers/langSlice";
import { useDispatch } from "react-redux";



const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  boxShadow: "none",
  zIndex: 2
}));
const LoginButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  paddingRight: "25px",
  paddingLeft: "25px",
  ":hover": {
    backgroundColor: theme.palette.primary.dark
  },
  [theme.breakpoints.down("landing")]: {
    paddingRight: "6px",
    paddingLeft: "6px"
  }
}));

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const useStyles = makeStyles()(() => {
  return {
    routerLink: {
      display: "block",
      color: "#242424",
      textDecoration: "none",
      margin: "0px 5px",
      fontWeight: 500,
    },
    underLine: {
      ["&:last-child"]: {
        textDecoration: "underline"
      }
    }
  };
});


const ResponsiveAppBar = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { keycloak, initialized } = useKeycloak();

  const [drawerState, setDrawerState] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [companyId, setCompanyId] = React.useState("");
  const isEnglish = useSelector((state) => state.lang.value)
  const dispatch = useDispatch()


  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (link) => {
    navigate(`company/${companyId}/${link}`);
    handleCloseUserMenu();
  };
  const handleLangChange = (e) => {
    e.preventDefault()
    dispatch(changeLang())
    console.log(isEnglish)
  }

  React.useEffect(() => {
    if (initialized) {
      if (keycloak?.authenticated) {
        setCompanyId(keycloak?.idTokenParsed?.sub);
      }
    }
  }, [initialized, keycloak]);

  if (!isEnglish) {
    return (
      <div className="french">
        <Header position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexBasis: "80px", display: { xs: "flex", landing: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", landing: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.text} onClick={() => navigate(page?.link)}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem key="logout" onClick={() => keycloak.logout()}>
                    <Typography textAlign="center" sx={{ fontWeight: 500 }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: { xs: "center", landing: "flex-start" },
                  padding: "0px 12px",
                }}
              >
                <Link to="/"><ALPLogo /></Link>
                <ListItem key="EN|FR" className={classes.underLine}>
                  <div style={{ cursor: "pointer" }}  >
                    <Typography textAlign="center" sx={{ fontWeight: 500 }} onClick={handleLangChange}>
                      <span>EN</span> | <span>FR</span>
                    </Typography>
                  </div>
                </ListItem>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", landing: "flex" },
                  justifyContent: "flex-end",
                  paddingRight: "25px",
                }}
              >
                {pages.map((page) => (
                  <Link key={page.text} to={page.link} className={`${classes.routerLink} ${classes.underLine}`}>{page.text}</Link>
                ))}

              </Box>

              {initialized && keycloak.authenticated
                ? (<Box
                  sx={{
                    flexBasis: "80px",
                    textAlign: "end",
                    padding: "12px",
                  }}
                >
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar src="/static/images/avatar/2.jpg">{keycloak.idTokenParsed.given_name[0]}{keycloak.idTokenParsed.family_name[0]}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting?.text} onClick={() => handleMenuClick(setting?.link)}>
                        <Typography textAlign="center" sx={{ fontWeight: 500 }}>{setting?.text}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem key="logout" onClick={() => keycloak.logout()}>
                      <Typography textAlign="center" sx={{ fontWeight: 500 }}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>)
                : (<Box
                  sx={{
                    flexBasis: "80px",
                    textAlign: "end"
                  }}
                >
                  <LoginButton onClick={() => keycloak.login()}>Connexion</LoginButton>

                </Box>)}
            </Toolbar>
          </Container>
        </Header>
        <Offset />
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerState}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <List>
            {pages.map((page) => (
              <ListItem key={page.text} className={classes.underLine}>
                <Link to={page.link} className={classes.routerLink}>{page.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    )
  }
  return (
    <div className="english">
      <Header position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexBasis: "80px", display: { xs: "flex", landing: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", landing: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.textE} onClick={() => navigate(page?.link)}>
                    <Typography textAlign="center">{page.textE}</Typography>
                  </MenuItem>
                ))}
                <MenuItem key="logout" onClick={() => keycloak.logout()}>
                  <Typography textAlign="center" sx={{ fontWeight: 500 }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: { xs: "center", landing: "flex-start" },
                padding: "0px 12px",
              }}
            >
              <Link to="/"><ALPLogo /></Link>
              <ListItem key="EN|FR" className={classes.underLine}>
                <div style={{ cursor: "pointer" }}  >
                  <Typography textAlign="center" sx={{ fontWeight: 500 }} onClick={handleLangChange}>
                    <span>EN</span> | <span>FR</span>

                  </Typography>
                </div>
              </ListItem>
            </Box>
            <Box
              sx={{
                display: { xs: "none", landing: "flex" },
                justifyContent: "flex-end",
                paddingRight: "25px",
              }}
            >
              {pages.map((page) => (
                <Link key={page.textE} to={page.link} className={`${classes.routerLink} ${classes.underLine}`}>{page.textE}</Link>
              ))}

            </Box>

            {initialized && keycloak.authenticated
              ? (<Box
                sx={{
                  flexBasis: "80px",
                  textAlign: "end",
                  padding: "12px",
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/static/images/avatar/2.jpg">{keycloak.idTokenParsed.given_name[0]}{keycloak.idTokenParsed.family_name[0]}</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting?.textE} onClick={() => handleMenuClick(setting?.link)}>
                      <Typography textAlign="center" sx={{ fontWeight: 500 }}>{setting?.textE}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem key="logout" onClick={() => keycloak.logout()}>
                    <Typography textAlign="center" sx={{ fontWeight: 500 }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>)
              : (<Box
                sx={{
                  flexBasis: "80px",
                  textAlign: "end"
                }}
              >
                <LoginButton onClick={() => keycloak.login()}>Login</LoginButton>

              </Box>)}
          </Toolbar>
        </Container>
      </Header>
      <Offset />
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {pages.map((page) => (
            <ListItem key={page.textE} className={classes.underLine}>
              <Link to={page.link} className={classes.routerLink}>{page.textE}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
};

export default ResponsiveAppBar;
