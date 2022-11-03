import React from 'react';
import { DealHistoryStyle } from './DealHistoryStyle';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Sidebar from 'components/sidebar/Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 16,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    backgroundColor: "#E0E0E0"

  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    // backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    backgroundColor: "#4CBFD0"

  },
}));
const style = {
  fontSize:{
    lg:"16px",
    sm:"14px",
    xs:"12px",

  },
   fontWeight: "600" ,
   whiteSpace:'nowrap',
   

};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Jean-Claude Carlu", "Ouvert", "Supply chain", "Assistant 1", "15M€", "21/01/2022", "21/01/2022"),
  createData(2, "Claude Carlu", "Ouvert", "Supply chain", "Assistant 1", "15M€", "21/01/2022", "21/01/2022"),
  createData(3, "Jean-Claude", "Ouvert", "Supply chain", "Assistant 1", "15M€", "21/01/2022", "21/01/2022"),
  createData(4, "Jean-Claude", "Ouvert", "Supply chain", "Assistant 1", "15M€", "21/01/2022", "21/01/2022"),
  createData(5, "Jean-arlu", "Ouvert", "Supply chain", "Assistant 1", "15M€", "21/01/2022", "21/01/2022"),
];
const DealHistory = () => {
  const { classes } = DealHistoryStyle();

  return (
    <>

      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Container maxWidth="xl">
            <Box className={classes.title}>
              <Box>
                <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
                  DealHistory
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  endIcon={"+"}
                  sx={{ color: "white" }}
                >
                  Nouveau
                </Button>
              </Box>
            </Box>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ width: "40px" }}>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        #
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        {"Nom de l'entreprise"}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Score
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Statut
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Industrie
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Personne en charge
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Valuation
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        {"Date d'inscription"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Dernière activité
                      </Typography>
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
                          "&.MuiTableCell-root": { borderBottom: "0px", width: "140px" },
                        }}
                      >
                        {/* <Typography variant="body1">{row.fat}</Typography> */}
                        {/* <Box className={classes.scope}>
                            <Box className={classes.scopeinside} >
                            55 %
                            </Box>
                            </Box> */}

                        <Box>
                          <Box>
                            <Box className={classes.scopetext} >70 %</Box>
                            <Box>

                              <BorderLinearProgress
                                variant="determinate"
                                value={70}
                              />

                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          "&.MuiTableCell-root": { borderBottom: "0px" },
                        }}
                      >
                        <Typography variant="body1">{row.carbs}</Typography>{" "}
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
export default DealHistory;