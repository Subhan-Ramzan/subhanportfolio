import Main from "@/components/MainContent";
import SocialIcons from "../components/SocialIcons";
// const crypto = require("crypto");
// const jwtSecret = crypto.randomBytes(32).toString("hex");
export default function Home() {
  return (
    <div>
      <Main />
      <SocialIcons />
    </div>
  );
}
