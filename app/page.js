import { Box } from "@mui/material";
import Header from "../components/common/Header";
import ImageCarousel from "@/components/imageComponents/ImageCarousel";

export default function Home() {
  return (
    <Box>
      <Header />
      <ImageCarousel />
    </Box>
  );
}
