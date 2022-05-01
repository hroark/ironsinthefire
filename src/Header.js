import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
let logo = require("./Images/Logo_LightCrop.png");

function Header() {
  return (
    <>

        <div>
          <div align="center">
            <img src={logo} Alt="Logo" />
          </div>
        </div>

    </>
  );
}
export default Header;

