import ReactPlayer from "react-player";

const paths = [
  { url: "dj-IVa7zaKE" },
  { url: "oZ4rvugb1es" },
  { url: "cm-CBUOB48Y" },
];

function DisplayVideo() {
  //const youTube = "https://youtu.be/cm-CBUOB48Y";
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/embed/cm-CBUOB48Y"
        className="center"
        width="25%"
        height="100%"
        controls="true"
      />
      <p></p>
      <ReactPlayer
        url="https://www.youtube.com/embed/oZ4rvugb1es"
        className="center"
        width="25%"
        height="100%"
        controls="true"
      />
      <p></p>
      <ReactPlayer
        url="https://www.youtube.com/embed/dj-IVa7zaKE"
        className="center"
        width="25%"
        height="100%"
        controls="true"
      />
    </div>
  );
}

export default DisplayVideo;
