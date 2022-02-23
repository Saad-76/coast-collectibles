import { React, useEffect } from "react";
import InfoComponent from "../InfoComponent";
import { useLocation } from "react-router-dom";
import "./privacyPolicy.css";
const PrivacyPolicy = () => {
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
        <InfoComponent titleLg="PRIVACY POLICY  " />
      </div>
      <div className="col-md-12 marketing-policy-content privacy-policy-content">
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit www.coastcollectibles.com
          (the “Site”).
        </p>
        <h3>PERSONAL INFORMATION WE COLLECT</h3>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <p>
           “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org .
        </p>
        <p>
           “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps.
        </p>
        <p>
           “Web beacons,” “tags,” and “pixels” are electronic files used to
          record information about how you browse the Site.
        </p>
        <p>
          We do not offer products for sale directly on our website and instead
          use third party marketplaces such as Opensea.io. Please refer to the
          privacy policies of the marketplace websites for reference with
          regards to collection of information such as address, payment
          information (including credit card numbers, email address, Metamask,
          Eth address and phone number. (“Order Information.”).
        </p>
        <h3>SHARING YOUR PERSONAL INFORMATION</h3>
        <p>
          we use Opensea to power our online store--you can read more about how
          Opensea uses your Personal Information here: Privacy Policy | OpenSea.
          We also use Google Analytics to help us understand how our customers
          use the Site--you can read more about how Google uses your Personal
          Information here: https://www.google.com/intl/en/policies/privacy/ .
          You can also opt-out of Google Analytics here:
          https://tools.google.com/dlpage/gaoptout .
        </p>
        <p>
          We may transfer or assign this Privacy Policy and any Personal
          Information to a third party entity in connection with a merger,
          acquisition, consolidation, restructuring, the sale of substantially
          all of our shares and/or assets, in connection with bankruptcy
          proceedings, reorganization, or other change of control events.
        </p>
        <p>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to any lawful requests for
          information we receive, or to otherwise protect our rights.
        </p>
        <h3>BEHAVIOURAL ADVERTISING</h3>
        <p>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you. For more information about how targeted
          advertising works, you can visit the Network Advertising Initiative’s
          (“NAI”) educational page at
          http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
          .
        </p>
        <p>You can opt out of targeted advertising by:</p>
        <p> FACEBOOK - https://www.facebook.com/settings/?tab=ads</p>
        <p> GOOGLE - https://www.google.com/settings/ads/anonymous</p>
        <p>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:
          http://optout.aboutads.info/
        </p>
        <h3>DO NOT TRACK</h3>
        <p>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>
        <h3>YOUR RIGHTS</h3>
        <p>
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted. If you would like to
          exercise this right, please use the Contact Us section to get in
          touch.
        </p>
        <p>
          Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might
          have with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
        </p>
        <h3>MINORS</h3>
        <p>The Site is not intended for individuals under the age of 18.</p>
        <h3>CHANGES</h3>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
      </div>
    </>
  );
};
export default PrivacyPolicy;
