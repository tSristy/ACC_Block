import { Box, Slide, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function TestMarquee() {
   const items = ["Fun!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000); // show each item for 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ height:"400px", overflow: "hidden", border: "1px solid #ccc", p: 1 }}>
      {items.map((item, i) => (
        <Slide
          key={i}
          direction="left"
          in={i === index}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 10000, exit: 10000 }} // slow 3-second slide
        >
          <Box sx={{ whiteSpace: "nowrap" }}>{item}</Box>
        </Slide>
      ))}
    </Box>
  );
}