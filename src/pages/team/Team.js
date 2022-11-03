/* eslint-disable semi */
import React from 'react';
import { TeamStyle } from './TeamStyle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sidebar from 'components/sidebar/Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as IN } from "../../assets/images/in.svg";
import { ReactComponent as PH } from "../../assets/images/ph.svg";
import { ReactComponent as MSG } from "../../assets/images/msg.svg";
import { useSelector } from 'react-redux';

function createData(name, calories, fat, carbs, protein)
{
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Jean-Claude Carlu", 6.0, 24, 4.0),
  createData(2, "Claude Carlu", 9.0, 37, 4.3),
  createData(3, "Jean-Claude", 16.0, 24, 6.0),
  createData(4, "Jean-Claude Carlu", 3.7, 67, 4.3),
  createData(5, "Jean-arlu", "background.default", "background.default", "background.default"),
];
const Team = () =>
{
  const { classes } = TeamStyle();
  const isEnglish = useSelector((state) => state.lang.value)

  if (!isEnglish)
  {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Container maxWidth="xl">
              <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
                Team
              </Typography>

              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" sx={{ width: "100px" }}>
                        <Typography variant="h5">#</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h5">Nom complet</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h5">Poste</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h5">Priorité</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h5">Rôles</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h5">Bureau</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">Contact</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                            color: "#4CBFD0",
                          }}
                        >
                          <Typography variant="body1">
                            {row.calories}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          <Typography variant="body1">{row.fat}</Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          <Typography variant="body1">{row.carbs}</Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          <Typography variant="body1">{row.protein}</Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          <Typography variant="body1">{row.protein}</Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            "&.MuiTableCell-root": { borderBottom: "0px" },
                          }}
                        >
                          <Box className={classes.contact}>
                            <Box>
                              <IN />
                            </Box>
                            <Box>
                              <PH />
                            </Box>
                            <Box>
                              <MSG />
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Container maxWidth="xl">
            <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
              Team
            </Typography>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ width: "100px" }}>
                      <Typography variant="h5">#</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">Full name</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">Post</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">Priority</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">Roles</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">Office</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5">Contact</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                          color: "#4CBFD0",
                        }}
                      >
                        <Typography variant="body1">
                          {row.calories}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Typography variant="body1">{row.fat}</Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Typography variant="body1">{row.carbs}</Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Typography variant="body1">{row.protein}</Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Typography variant="body1">{row.protein}</Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Box className={classes.contact}>
                          <Box>
                            <IN />
                          </Box>
                          <Box>
                            <PH />
                          </Box>
                          <Box>
                            <MSG />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
    </>
  );

};
export default Team;