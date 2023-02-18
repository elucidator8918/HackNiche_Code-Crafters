import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import ProgressCircle1 from "../../components/ProgressCircle1";
import ProgressCircle2 from "../../components/ProgressCircle2";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="HDFC Bank"
            subtitle="Top Suggested Indian Stock"
            progress="0.75"
            increase="+14%"
            icon={
              <AccountBalanceIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="₹1,656"
            subtitle="Stock Price"
            increase="+8.25%"
            icon={
              <ShowChartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="₹1,661"
            subtitle="Yesterday's Open"
            progress="0.30"
            increase="+5%"
            icon={
              <ArrowForwardIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="₹1,668"
            subtitle="Yesterday's Close"
            progress="0.80"
            increase="+43%"
            icon={
              <ArrowOutwardIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Top Suggested International Stocks
            </Typography>
          </Box>
          {mockDataTeam.map((transaction, i) => (
            <Box
              key={`${transaction.ticker}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.ticker}
                </Typography>
                <Typography color={colors.greenAccent[100]}>
                </Typography>
              </Box>
              {transaction.companyName}
              <Box p="5px 10px" marginLeft={-40}>
                <Typography color={colors.greenAccent[100]}>
                </Typography>
              </Box>
                {transaction.price}
              <Box
                backgroundColor={colors.blueAccent[500]}
                p="5px 12px"
                borderRadius="10px"
              >
                {transaction.changes}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Best Optimum Sector
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Financial Services
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Low Risk Sector
          </Typography>
          <Box height="250px" marginLeft={17} mt="30px">
              <ProgressCircle1 size="120" />
              <Typography
                variant="h5"
                marginLeft={4}
                color={colors.greenAccent[500]}
                sx={{ mt: "20px" }}
              >
                Utilities
              </Typography>
              <Typography
                variant="h10"
                marginLeft={-6}
                sx={{ mt: "2px" }}
              >
              Includes extra misc expenditures and costs
              </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            High Risk Sector
          </Typography>
          <Box height="250px" marginLeft={12} mt="35px">
              <ProgressCircle2 size="120" />
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    marginLeft={3}
                    sx={{ mt: "20px" }}
                  >
                    Healthcare
                  </Typography>
                  <Typography
                    variant="h10"
                    marginLeft={-6}
                    sx={{ mt: "2px" }}
                  >
                  Includes extra misc expenditures and costs
                  </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
