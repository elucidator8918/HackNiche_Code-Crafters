import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
    <Header title="Personal Recommendation System"/>
      <ul>

      <li>Name : Anushka, </li>
      <li>Age : 35, </li>
      <li>Gender : Female, </li>
      <li>Salary : 7lpa" </li>
      </ul>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Stand Up India Scheme
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Stand Up India is a flagship scheme launched by the Government of India in 2016 to promote entrepreneurship among women and people from the Scheduled Castes (SC) and Scheduled Tribes (ST) communities. The objective of the scheme is to provide financial support and facilitate bank loans between Rs. 10 lakhs to Rs. 1 crore to at least one woman and one person belonging to SC or ST community for starting a new enterprise in the manufacturing, services or trading sector.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pradhan Mantri Mudra Yojana
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pradhan Mantri Mudra Yojana (PMMY) is a flagship scheme launched by the Government of India in 2015 to provide access to credit to small and micro enterprises in the country. The objective of the scheme is to encourage entrepreneurship and promote the growth of small businesses by providing loans up to Rs. 10 lakh to non-corporate, non-farm small/micro enterprises.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pradhan Mantri Suraksha Bima Yojana
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pradhan Mantri Suraksha Bima Yojana, provides coverage for accidental death, total and partial disability, as well as permanent disability. A person must be between the ages of 18 and 70 to apply for this program. Anyone between the ages of 18 and 70 may participate in this program, but they must have a bank account. The scheme's yearly premium, without including service tax, is Rs.20
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pradhan Mantri Jan Dhan Yojana
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A National Mission for Financial Inclusion to ensure access to financial services, namely, Banking/ Savings & Deposit Accounts, Remittance, Credit, Insurance, Pension in an affordable manner. Account can be opened in any bank branch or Business Correspondent (Bank Mitr) outlet. Accounts opened under PMJDY are being opened with Zero balance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
