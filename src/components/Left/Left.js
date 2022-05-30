import "./Left.css";
function Left(props) {
  return (
    <div class="G_left">
      <div class="img">
        <img src={props.image} className="left_img"></img>
      </div>
      <div class="title">
        <h3 className="title_left">{props.title}</h3>
      </div>
    </div>
  );
}

export default Left;
