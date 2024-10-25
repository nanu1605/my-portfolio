import React from "react";
import {
  ContactSection,
  Title,
  ContactButton,
  ContactInfo,
  InfoItem,
  Link,
} from "./Styles/ContactStyles";
import BackToTopButton from "./BackToTopButton";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Contact Me</Title>
      <ContactButton href="mailto:tanishqjain010@gmail.com">
        Send me an Email
      </ContactButton>
      <ContactButton href="/Tanishq_Jain_Resume.pdf" download>
        Download Resume
      </ContactButton>

      <ContactInfo>
        {/* LinkedIn */}
        <InfoItem>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/tanishqjain010/"
            target="_blank"
          >
            Tanishq Jain
          </Link>
        </InfoItem>

        {/* Slack Username */}
        <InfoItem>Slack: nanu1605</InfoItem>

        {/* GitHub */}
        <InfoItem>
          GitHub:{" "}
          <Link href="https://github.com/nanu1605" target="_blank">
            nanu1605
          </Link>
        </InfoItem>
      </ContactInfo>
      <BackToTopButton />
    </ContactSection>
  );
};

export default Contact;
