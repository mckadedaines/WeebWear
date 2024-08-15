import { Box } from "@mui/material";
import Header from "../components/common/Header";
import ImageCarousel from "@/components/imageComponents/ImageCarousel";
import ShirtGrid from "@/components/imageComponents/ShirtGrid";
import PantsGrid from "@/components/imageComponents/PantsGrid";
import Meteors from "@/components/magicui/meteors";

export default function Home() {
  return (
    <Box className="relative bg-black">
      <Meteors />
      <Box className="relative z-10">
        <Header />
        <ImageCarousel />
        <ShirtGrid />
        <PantsGrid />
      </Box>
    </Box>
  );
}
