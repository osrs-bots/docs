

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
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '🐜 How do I report a problem?  ',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '👑 When is Gold tier available? ',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '🤖 How can I request a new bot? ',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '🍏 Is Mac supported? ',
    answer: 'Apologees, only windows is supported! We are diligently working on mac support.'
  },
  {
    question: '🧑‍💻 Can I contribute to the projects? ',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
  return faqs.map(({question, answer}) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {question}
          </AccordionSummary>
          <AccordionDetails>
            {answer}
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

