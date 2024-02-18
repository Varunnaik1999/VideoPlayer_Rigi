import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import VideoPlayer from "./VideoPlayer";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import ReorderIcon from "@material-ui/icons/Reorder";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  container: {
    display: "grid",
    margin: "20px",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  reorderIcon: {
    marginLeft: "5px",
    cursor: "grab",
  },
  heading: {
    marginLeft: "150px",
  },
});

const data = [
  { id: 1, name: "video1", path: video1 },
  { id: 2, name: "video2", path: video2 },
  { id: 3, name: "video3", path: video3 },
  { id: 4, name: "video4", path: video4 },
];

export default function App() {
  const classes = useStyles();

  const [videoPath, setVideoPath] = useState("");
  const [tableData, setTableData] = useState(data);

  const handleVideoPlay = (path) => {
    setVideoPath(path);
  };

  const handleReorder = () => {
    const updatedTableData = [...tableData];
    updatedTableData.reverse();
    setTableData(updatedTableData);
  };

  return (
    <>
      <h2 className={classes.heading}>Video Player</h2>
      <div className={classes.container}>
        <TableContainer component={Paper} style={{ width: "400px" }}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  ID
                  <ReorderIcon
                    className={classes.reorderIcon}
                    onClick={handleReorder}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleVideoPlay(row.path)}
                    >
                      Play
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {videoPath && <VideoPlayer videoUrl={videoPath} />}
      </div>
    </>
  );
}
