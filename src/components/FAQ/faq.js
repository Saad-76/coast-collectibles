import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoComponent from "../InfoComponent";
import { BsArrowUpRight } from "react-icons/bs";
import "./faq.css";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq-top-head">
        <InfoComponent
          titleSm="FREQUANTLY ASKED QUESTIONS
       "
          titleLg="FAQ
              "
        />
      </div>

      <div className="container-style-faq">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<BsArrowUpRight size={16} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              1. Which Blockchain does Coast Collectibles support?{" "}
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Only the Ethereum blockchain is supported.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<BsArrowUpRight size={16} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              2. How do we store the asset?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once the asset is authenticated it is then fractionalised and
              minted as NFTs. The asset will cease to exist.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<BsArrowUpRight size={16} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              3. What is an NFT smart contract?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A smart contract is programming that exists within the blockchain.
              This enables the network to store the information that is
              indicated in an NFT transaction. This information can be accessed
              when needed. The smart contract also ensures that the information
              stored is transparent as well as immutable.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<BsArrowUpRight size={16} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              4. I have a suggestion I'd like to make!
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We would love to hear it. Please send us an email at
              contact@coastcollectibles.com
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "pane15"}
          onChange={handleChange("pane15")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<BsArrowUpRight size={16} />}
            aria-controls="pane15bh-content"
            id="pane15bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              5. How can I stay up to date with the latest launch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Subscribe to our newsletter at the bottom of this page.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
