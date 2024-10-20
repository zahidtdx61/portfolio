import { Menu, MenuItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const NavbarSmDevice = ({ routes }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setAnchorElUser(null);
  }, [pathname]);

  return (
    <div>
      <div onClick={handleOpenUserMenu} className="lg:hidden p-1">
        {anchorElUser ? <AiOutlineClose size={40} /> : <LuMenu size={40} />}
      </div>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {routes.map((route, index) => {
          return (
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              <Link
                className="text-xl text-blue-500 hover:border-b-[2px] hover:border-blue-500 font-normal hover:font-semibold hover:text-blue-700 cursor-pointer"
                to={route.path}
                smooth={true}
                duration={500}
              >
                <Typography>{route.name}</Typography>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

NavbarSmDevice.propTypes = {
  routes: PropTypes.array,
};

export default NavbarSmDevice;
