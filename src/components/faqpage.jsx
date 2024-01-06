import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function FAQs() {
  return (
    <>
      <div className="bg-[url('assets/images/background-pattern-desktop.svg')] w-[1440px] h-[320px]"></div>
      <div className=" bg-pink-100 w-[1440px] h-[900px]">
        <div className="  flex items-center justify-center static">
          <div
            style={{ fontFamily: "Work Sans" }}
            className="w-[600px] max-sm:w-[350px] max-sm:p-6  flex  flex-col absolute top-[225px] bg-white rounded-[15px] text-left p-10"
          >
            <h1 className="text-4xl font-bold pb-5 flex gap-4">
              <img src="src/assets/images/icon-star.svg" alt="Star Icon" />
              FAQs
            </h1>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="hover:text-purple-600 font-bold "
                        >
                          What is Frontend Mentor, and how will it help me?
                        </Box>
                        {isExpanded ? (
                          <img src="src/assets/images/icon-minus.svg" />
                        ) : (
                          <img src="src/assets/images/icon-plus.svg" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-400">
                      Frontend Mentor offers realistic coding challenges to help
                      developers improve their frontend coding skills with
                      projects in HTML, CSS, and JavaScript. It's suitable for
                      all levels and ideal for portfolio building.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <hr />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="hover:text-purple-600 font-bold"
                        >
                          Is Frontend Mentor free?
                        </Box>
                        {isExpanded ? (
                          <img src="src/assets/images/icon-minus.svg" />
                        ) : (
                          <img src="src/assets/images/icon-plus.svg" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-400">
                      Yes, Frontend Mentor offers both free and premium coding
                      challenges, with the free option providing access to a
                      range of projects suitable for all skill levels.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <hr />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="hover:text-purple-600 font-bold"
                        >
                          Can I use Frontend Mentor projects in my portfolio?
                        </Box>
                        {isExpanded ? (
                          <img src="src/assets/images/icon-minus.svg" />
                        ) : (
                          <img src="src/assets/images/icon-plus.svg" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-400">
                      Yes, you can use projects completed on Frontend Mentor in
                      your portfolio. It's an excellent way to showcase your
                      skills to potential employers!
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <hr />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="hover:text-purple-600 font-bold"
                        >
                          How can I get help if I'm stuck on a Frontend Mentor
                          challenge?
                        </Box>
                        {isExpanded ? (
                          <img src="src/assets/images/icon-minus.svg" />
                        ) : (
                          <img src="src/assets/images/icon-plus.svg" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-400 ">
                      The best place to get help is inside Frontend Mentor's
                      Discord community. There's a help channel where you can
                      ask questions and seek support from other community
                      members.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default FAQs;
