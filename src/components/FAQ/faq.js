import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoComponent from "../InfoComponent";
import { BsArrowUpRight } from "react-icons/bs";
import "./faq.css";
import { Link } from "react-router-dom";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq-main-section">
        <div className="faq-top-head">
          <InfoComponent
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
              <Typography>
                We offer our products exclusively on Opensea which works with
                the Ethereum blockchain.
              </Typography>
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
                Once the physical asset is fractionalised and minted as NFTs, it
                will cease to exist.
                <div className="terms-question">
                  <Link to="/terms">
                    <b> See our Terms and Conditions for details.</b>
                  </Link>
                </div>
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
                A smart contract is programming that exists within the
                blockchain. This enables the network to store the information
                that is indicated in an NFT transaction. This information can be
                accessed when needed. The smart contract also ensures that the
                information stored is transparent as well as immutable.
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

          <Accordion
            expanded={expanded === "pane16"}
            onChange={handleChange("pane16")}
          >
            <AccordionSummary
              className="icon-color"
              expandIcon={<BsArrowUpRight size={16} />}
              aria-controls="pane16bh-content"
              id="pane16bh-header"
            >
              <Typography
                className="heading-fonts-faq"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                6. What does it mean to buy a fraction?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Full Control: When you buy a fraction of our memorabilia you
                have full control over the NFT that you own. The NFT will be
                stored in your digital wallet and available to list on market
                places such as OpenSea.
                <br />
                <br />
                Fractional ownership: You will be a fractional owner of the
                memorabilia that your NFT represents. The more fractions you
                collect the more of the memorabilia you will own, giving you a
                higher value in your assets.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "pane17"}
            onChange={handleChange("pane17")}
          >
            <AccordionSummary
              className="icon-color"
              expandIcon={<BsArrowUpRight size={16} />}
              aria-controls="pane17bh-content"
              id="pane17bh-header"
            >
              <Typography
                className="heading-fonts-faq"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                7. What sets the price?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Market: The rarer the asset the higher the value. Depending on
                which fraction of our memorabilia you buy will also determine
                the price range which your fraction is valued at.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "pane18"}
            onChange={handleChange("pane18")}
          >
            <AccordionSummary
              className="icon-color"
              expandIcon={<BsArrowUpRight size={16} />}
              aria-controls="pane18bh-content"
              id="pane18bh-header"
            >
              <Typography
                className="heading-fonts-faq"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                8. How do I get started?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Guide: It has now become very easy for people to start
                collecting assets and fractional assets through NFTs. You will
                need to create a profile on Opensea.io where you can explore and
                collect our fractional NFTs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
