<span
  style={{
    color:
      scan.prediction === "Normal"
        ? "green"
        : scan.prediction === "Suspicious Lesion"
        ? "orange"
        : "red",
    fontWeight: "bold",
  }}
>
  {scan.prediction}
</span>