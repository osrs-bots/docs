

import React from 'react';
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
    question: '🐍 Do I need to install python? ',
    answer: 
      <Stack>
        <Typography>
          Yes, here is a guide for installing python and pip on windows.
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
    answer: 'We regret to inform you that only Windows is currently supported. However, we are actively working on providing support for Mac users.'
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
  return (
    <Box
      width={'60%'}
      ml={'20%'}
      mt={'125px'}>
        
        <Typography
          fontSize={'45px'}
          fontWeight={700}
          mb={'25px'}>
          Frequent Questions
        </Typography>
        <AccordionUsage/>
    </Box>
  );
}

function MapFaqs(): JSX.Element[] {
  return faqs.map(({question, answer}, i) => {
      return (
        <Accordion>
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

