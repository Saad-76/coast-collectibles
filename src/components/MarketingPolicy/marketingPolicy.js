import {React, useEffect} from "react";
import InfoComponent from "../InfoComponent";
import { useLocation } from "react-router-dom";

import "./marketingPolicy.css";

const MarketingPolicy = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <>
    <div className="marketing-policy-heading">
      <InfoComponent titleLg="MARKETING POLICY  " />
      </div>
      <div className="col-md-12 marketing-policy-content">
        <p>
         <b> Coast Collectibles Limited (‘CCL’)</b> is committed to the responsible
          marketing of its products. This policy describes the required
          marketing practices for holders of any blockchain-based, <b>cryptographic
          nonfungible token (“NFT”)</b> which, together with the license rights to
          any associated digital works of authorship or other content, whether
          or not copyrighted or copyrightable, and regardless of the format in
          which any of the foregoing is made available, comprises and is
          referred to herein as a “<b>Digital Collectible</b>”. By purchasing a Digital
          Collectible, you agree that you will comply with this Marketing Policy
          in connection with holding and transferring the Digital Collectible.
        </p>
        <p>
          <b>1.</b> Overall Focus of Marketing. In general, Digital Collectibles should
          be marketed in a manner that emphasizes the consumptive value or
          functionality of the Digital Collectible.
        </p>
        <p>
        <b>2.</b> Prohibited Marketing Activity. The following marketing activities
          are prohibited when marketing any Digital Collectible. Marketing will
          not:
        </p>
        <p>
           Include statements that could cause potential purchasers of a
          Digital Collectible to have a reasonable expectation of profits,
          including but not limited to:
        </p>
        <p>
          o References to opportunities for price appreciation, resale value or
          secondary market opportunities; and <br />o Language typically
          associated with investment returns, such as mentions of a Digital
          Collectible’s RoI, RoR, or market capitalization.
        </p>
        <p>
           Emphasize or discuss the rarity of a Digital Collectible unless the
          rarity is expressly associated with the Digital Collectible’s unique
          features, designs, or characteristics and it is made clear that the
          rarity is not intended to suggest the likelihood of price appreciation
          or future resale value.
        </p>
        <p>
           Emphasize the availability of third-party exchanges or marketplaces
          for trading a Digital Collectible. For clarity, mentions of
          transferability of the Digital Collectible to metaverses, videogames,
          and other platforms that currently support consumptive use of the
          Digital Collectible are allowed.
        </p>
        <p>
           Contain statements promising future functionality that will be
          associated with any Digital Collectible. This includes but is not
          limited to statements regarding future utility, off-chain benefits, or
          technological developments.
        </p>
        <p>
           Contain any untruthful, incomplete, unsupported, inaccurate or
          misleading statements.
        </p>
        <p>
        <b>3.</b> Marketing Physical Collectibles. Physical collectibles should be
          marketed according to the principles listed here. When reselling a
          Digital Collectible that is representing a physical collectible,
          marketing should emphasize the connection between the Digital
          Collectible and its associated physical collectibles.
        </p>
      </div>
    </>
  );
};
export default MarketingPolicy;
