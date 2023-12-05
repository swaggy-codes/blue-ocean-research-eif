import React from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "@mui/system";
import { CardContent, Card } from "@mui/material";

const FinancialCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  marginTop: 50,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  borderRadius: 16,
  overflow: "hidden",
  backgroundColor: "#fff",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const Title = styled("div")({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 16,
  color: "#333",
});

const DetailItem = styled("div")({
  marginBottom: 12,
  fontSize: 16,
  color: "#555",
});

const CarouselForMultipleDetailedCards = ({ cashFlowData }) => {
  const financialDetailsList = [
    // Include multiple financial details objects as needed
    {
      fiscalDateEnding: "2023-03-31",
      reportedCurrency: "USD",
      operatingCashflow: "2853000000",
      paymentsForOperatingActivities: "None",
      // ... (other details)
    },
    {
      fiscalDateEnding: "2023-03-31",
      reportedCurrency: "USD",
      operatingCashflow: "2853000000",
      paymentsForOperatingActivities: "None",
      // ... (other details)
    },
    {
      fiscalDateEnding: "2023-03-31",
      reportedCurrency: "USD",
      operatingCashflow: "2853000000",
      paymentsForOperatingActivities: "None",
      // ... (other details)
    },
    {
      fiscalDateEnding: "2023-03-31",
      reportedCurrency: "USD",
      operatingCashflow: "2853000000",
      paymentsForOperatingActivities: "None",
      // ... (other details)
    },
    // Add more financial details objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  //   const settings = {
  //     className: "center",
  //     centerMode: true,
  //     infinite: true,
  //     centerPadding: "160px",
  //     slidesToShow: 3,
  //     speed: 500,
  //   };

  return (
    <Slider {...settings}>
      {financialDetailsList.map((financialDetails, index) => (
        <div key={index}>
          <FinancialCard>
            <CardContent>
              <Title>Balance Sheet Data</Title>

              <DetailItem>Fiscal Date Ending: {cashFlowData?.data?.yearly?.[0]?.fiscalDateEnding}</DetailItem>
              <DetailItem>Reported Currency: {cashFlowData?.data?.yearly?.[0]?.reportedCurrency}</DetailItem>
              <DetailItem>Operating Cashflow: {cashFlowData?.data?.yearly?.[0]?.operatingCashflow}</DetailItem>
              <DetailItem>Payments for Operating Activities: {cashFlowData?.data?.yearly?.[0]?.paymentsForOperatingActivities}</DetailItem>
              {/* Add more details as needed */}
            </CardContent>
          </FinancialCard>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselForMultipleDetailedCards;
