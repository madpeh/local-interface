import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import ParamsDialog from "./ParamsDialog";

export function AgentsTab(props) {
  const [open, setOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState("");

  const handleParamTypeChange = (e) => {
    setDialogType(e.target.value)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction="row"
      divider={
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: "black", borderColor: "black", borderWidth: 1 }}
        />
      }
      spacing={2}
    >
      <ParamsDialog open={open} onClose={handleClose} type={dialogType} />

      <Box
        sx={{
          width: "100%",
          height: 600,
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "inline-block",
        }}
      >
        <nav aria-label="main agents">
          <h2> Created Agents </h2>
          <List
            sx={{
              minHeight: 550,
              maxHeight: 550,
              overflow: "auto",
              border: "solid",
              borderColor: "black",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((number) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={"Agent " + number} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 700,
          maxWidth: 800,
          bgcolor: "background.paper",
          display: "inline-block",
          paddingTop: 9,
          marginLeft: 10,
        }}
      >
        <Stack>
          <Box sx={{ textAlign: "left" }}>
            <TextField
              variant="outlined"
              label="Agent Type Name"
              id="agent_type_input"
            />
          </Box>
          <Stack direction="row">
            <Box
              sx={{
                maxWidth: 360,
                minWidth: 360,
                bgcolor: "background.paper",
                display: "inline-block",
              }}
            >
              <nav aria-label="main parameters">
                <h2> Parameters </h2>
                <List
                  sx={{
                    minHeight: 422,
                    maxHeight: 422,
                    border: "solid",
                    borderColor: "black",
                    overflow: "auto",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                    (number) => {
                      return (
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={"Param " + number} />
                          </ListItemButton>
                        </ListItem>
                      );
                    }
                  )}
                </List>
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                  <InputLabel> Select type </InputLabel>
                  <Select label="Select type" onChange={handleParamTypeChange}>
                    <MenuItem value={"float"}> Float </MenuItem>
                    <MenuItem value={"enum"}> Enumerable </MenuItem>
                    <MenuItem value={"list"}>
                      {" "}
                      Connections/Messages List{" "}
                    </MenuItem>
                  </Select>
                </FormControl>
              </nav>
            </Box>
            <Box
              sx={{
                minHeight: 600,
                maxHeight: 600,
                maxWidth: 360,
                minWidth: 360,
                bgcolor: "background.paper",
                overflow: "auto",
                display: "inline-block",
              }}
            >
              <nav aria-label="main behaviours">
                <h2> Behaviours </h2>
                <List
                  sx={{
                    minHeight: 422,
                    maxHeight: 422,
                    border: "solid",
                    borderColor: "black",
                    overflow: "auto",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                    (number) => {
                      return (
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={"Behav " + number} />
                          </ListItemButton>
                        </ListItem>
                      );
                    }
                  )}
                </List>
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                  <InputLabel id="behavSelect"> Select type </InputLabel>
                  <Select label="Select type" labelId="behavSelect">
                    <MenuItem value={"onSetup"}> Setup </MenuItem>
                    <MenuItem value={"onEvent"}> OneTime/OnEvent </MenuItem>
                  </Select>
                </FormControl>
              </nav>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}