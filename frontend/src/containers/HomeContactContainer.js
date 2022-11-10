import React from "react";
import { Section, Form } from "../components";

const HomeContactContainer = () => {
  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Contact Us</Section.SubTitle>
              <Section.Text>
               Use the contact form below so we can get in touch with you and respond to your queries.
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>We Will Get In Touch</Section.SubTitle>
                  <Section.Text>
                    After submitting the form, we shall get back to you in less than 24 hours regardless of the day of the week.
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>
                    Get Instant Support From Us
                  </Section.SubTitle>
                  <Section.Text>
                    info@dwelleraffairs.co.za
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              <Form>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Name" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Email" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Phone Number" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.TextArea
                    placeholder="Your Message"
                    name=""
                    id=""
                    cols="30"
                    rows="10"></Form.TextArea>
                </Form.FormGroup>

                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Send Message" />
                </Form.FormGroup>
              </Form>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
