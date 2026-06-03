export const generateDemoPrediction = () => {
  const outcomes = [
    {
      prediction: "Normal",
      confidenceRange: [85, 98],
    },
    {
      prediction: "Suspicious Lesion",
      confidenceRange: [70, 90],
    },
    {
      prediction: "High Risk",
      confidenceRange: [60, 85],
    },
  ];

  const randomIndex = Math.floor(
    Math.random() * outcomes.length
  );

  const selected = outcomes[randomIndex];

  const confidence =
    Math.floor(
      Math.random() *
        (selected.confidenceRange[1] -
          selected.confidenceRange[0]) +
        selected.confidenceRange[0]
    );

  return {
    prediction: selected.prediction,
    confidence,
  };
};