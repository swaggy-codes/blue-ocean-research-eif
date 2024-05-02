import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { newsArticles } from "../../../Utils/DemoJSON";

const ArticlesList = () => {
  console.log(newsArticles, "saksham");

  return (
    <div className='row'>
      {/* <div className='articles-box'></div> */}
      <h3>News Articles</h3>
      {/* <div style={{ height: "400px !important" }}> */}
      <Box className='articles-box' style={{ height: "450px", overflow: "auto", maxHeight: "450px", minHeight: "450px", border: "1px solid white" }}>
        <List sx={{ width: "100%", bgcolor: "#020817" }}>
          {newsArticles?.length > 0
            ? newsArticles?.map((el, i) => {
                return (
                  <>
                    {/* <ListItem alignItems='flex-start'>
                        <ListItemAvatar>
                          <Avatar alt='Remy Sharp' src={el?.image} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <>
                              <Typography sx={{ display: "inline" }} component='span' variant='body2' color='white'>
                                {el?.title}
                              </Typography>
                            </>
                          }
                          secondary={
                            <>
                              <Typography sx={{ display: "inline" }} component='span' variant='body2' color='white'>
                                {el?.description} {el?.description}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem> */}
                    <div>
                      <Accordion sx={{ width: "100%", bgcolor: "#020817" }} alignItems='flex-start'>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                          aria-controls='panel1a-content'
                          id='panel1a-header'>
                          {/* <Typography>Accordion 1</Typography> */}
                          <ListItemAvatar>
                            <Avatar alt='Remy Sharp' src={el?.image} />
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography sx={{ display: "flex" }} component='span' variant='body2' color='white'>
                              {el?.title}
                            </Typography>
                          </ListItemText>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ display: "flex", justifyContent: "center" }} component='span' variant='body2' color='white'>
                            {el?.description} {el?.description}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <Divider variant='inset' component='li' sx={{ bgcolor: "white" }} />
                    {/* <br color='white' /> */}
                  </>
                );
              })
            : ""}
        </List>
      </Box>
      {/* </div> */}
    </div>
  );
};

export default ArticlesList;
