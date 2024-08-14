import { Box } from "@mui/material";
import Header from "../components/common/Header";
import ImageCarousel from "@/components/imageComponents/ImageCarousel";
import ShirtGrid from "@/components/imageComponents/ShirtGrid";
import PantsGrid from "@/components/imageComponents/PantsGrid";

export default function Home() {
  return (
    <Box>
      <Header />
      <ImageCarousel />
      <ShirtGrid />
      <PantsGrid />
    </Box>
  );
}
