

import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails, 
  Box,
  Typography, 
  Stack
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material'

const faqs = [
  {
    question: '🐍 How do I install python and pip? ',
    answer: 
      <Stack>
        <Typography>
          Yes, here is a guide for installing python and pip on windows.
        </Typography>
        <Typography mt={'20px'}>
          1.   Visit python.org and download the latest version of Python for your operating system. You can choose either the 32-bit or the 64-bit installer, depending on your PC’s architecture.
        </Typography>
        <Typography mt={'20px'}>
          2.   Run the downloaded file and follow the instructions on the screen. Make sure to check the box that says “Add Python to PATH” to enable running Python from the command prompt. Also, check the box that says “pip” to ensure that the package manager is installed along with Python. 
        </Typography>
        <Typography mt={'20px'}>
          3.   Wait for the installation to finish and close the window. You can verify that Python and pip are installed correctly by opening the command prompt and typing python --version and pip --version. You should see the respective versions of Python and pip displayed on the screen.
        </Typography>
        <Typography mt={'20px'}>
          4.  Congratulations, you have successfully installed Python and pip on your PC! You can now use them to run Python scripts and install Python libraries. 
        </Typography>

      </Stack>
  },
  {
    question: '🦺 Are these scripts safe? ',
    answer: 
      <Stack>
        <Typography>
          These bots are designed to interact with the game by detecting pixel locations, rather than accessing the client directly. This makes them less likely to be detected by anti-cheat systems. The bots also mimic human xp rates to avoid suspicion.
        </Typography>
        <Typography pt={'20px'}>
        To further reduce the risk of being banned, it is recommended to switch worlds frequently, follow the bot instructions carefully, and be conscious of runtime.
        </Typography>
      </Stack>
  },
  {
    question: '🐜 How do I report a problem?  ',
    answer:
      <Typography>
        If you encounter any problem, you can contact us through the following channels: open an issue on our GitHub repository, mention us on Twitter, or send us a message on Discord.
      </Typography>
  },
  {
    question: '👑 When will Gold tier be available? ',
    answer:
      <Typography>
        Gold tier bots will use advanced AI computer vision and will be available mid to late 2024. In the meantime, you can register for the silver tier to enjoy all the basic bots.
      </Typography>
  },
  {
    question: '🤖 How can I request a new bot? ',
    answer:
      <Typography>
        If you have an idea, you can contact us through the following channels: open an issue on our GitHub repository, mention us on Twitter, or send us a message on Discord.
      </Typography>
  },
  {
    question: '🍏 Is Mac supported? ',
    answer: 
      <Typography>
        We regret to inform you that only Windows is currently supported. However, we are actively working on providing support for Mac users.
      </Typography>
  },
  {
    question: '🧑‍💻 Can I contribute to the project? ',
    answer: 
      <Typography>
        If you would like to contribute, you can contact us through the following channels: open an issue on our GitHub repository, mention us on Twitter, or send us a message on Discord.
      </Typography>
  }
];

export default function Faqs(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <Box
      className={'site-container'}
      mt={'85px'}>
        
          {isMobile ? 
            <Typography
              className={'site-section-title'}>
                FAQs
            </Typography>
          :
            <Typography
              className={'site-section-title'}>
                Frequent Questions
            </Typography>
          }
        <AccordionUsage/>
    </Box>
  );
}

function MapFaqs(): JSX.Element[] {
  return faqs.map(({question, answer}, i) => {
      return (
          <Accordion 
            key={question}
            elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${i}-content`}
              id={`panel${i}-header`}
            >
              {question}
            </AccordionSummary>
            <AccordionDetails>
              <Box pb={'10px'}>
                {answer}
              </Box>
            </AccordionDetails>
          </Accordion>
      )
    })
}

function AccordionUsage(): JSX.Element  {
  return (
    <div>
      <MapFaqs/>
    </div>
  );
}

