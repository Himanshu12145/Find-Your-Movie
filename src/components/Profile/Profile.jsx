import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ExitToApp } from "@mui/icons-material";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const favoriteMovies = () => {};
  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between">
        <Typography variant="4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          Favorite Movie
          {/* <RatedCards title="Favorite Movies" data={favoriteMovies} /> */}
          {/* <RatedCards title="Watchlist" data={watchlistMovies} /> */}
        </Box>
      )}
    </Box>
  );
};

export default Profile;
