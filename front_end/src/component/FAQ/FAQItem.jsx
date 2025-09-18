import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqQuestions } from './FAQ';

const FAQItem = () => {
    return (
        <div>
            {faqQuestions.map((item, index) => (
                <Accordion key={index} defaultExpanded={index === faqQuestions.length - 1 ? true : false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon color='success'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.answer}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQItem;