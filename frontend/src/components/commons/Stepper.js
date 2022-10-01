import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useTranslation } from "react-i18next";

export default function HorizontalLabelPositionBelowStepper({ step }) {
  const { t } = useTranslation();
  const steps = [t("menu"), t("bucket"), t("checkout")];
  return (
    <div className="stepper">
      <Box sx={{ width: "60%", margin: "auto" }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
