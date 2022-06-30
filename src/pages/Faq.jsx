import { Accordion, AccordionSummary } from "@mui/material";
import React, { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.scss";

const Faq = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
    <section id="Faq">
      <h1 className="text-center mb-3">FAQ</h1>
      <div className="container" style={{ width: "80%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontWeight: "700" }}>
              How to contact with Customer Service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: "left" }}>
            <Typography>
              Our Customer Experience Team is available 7 days a week and we
              offer 2 ways to get in contact.Email and Chat . We try to reply
              quickly, so you need not to wait too long for a response!.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontWeight: "700" }}>
              App installation failed, how to update system information?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please read the documentation carefully . We also have some online
              video tutorials regarding this issue . If the problem remains,
              Please Open a ticket in the support forum
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontWeight: "700" }}>
              Website response taking time, how to improve?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: "left" }}>
            <Typography>
              At first, Please check your internet connection . We also have
              some online video tutorials regarding this issue . If the problem
              remains, Please Open a ticket in the support forum.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontWeight: "700" }}>
              How do I create a account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you want to open an account for personal use you can do it over
              the phone or online. Opening an account online should only take a
              few minutes.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
    </>
  );
};

export default Faq;
