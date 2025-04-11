// material-ui
import { useTheme } from "@mui/material/styles";

import RRHLogo from "../assets/images/logo.png";

export default function Logo() {
  const theme = useTheme();

  return <img src={RRHLogo} alt="RRH logo" style={{ width: "120px" }} />;
}
