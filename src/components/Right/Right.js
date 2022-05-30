import "./Right.css";

function Right(props) {
  return (
    <div class="content-big">
      <div class="img">
        <img src={props.image} className="right_img"></img>
      </div>
      <div class="title">
        <h3 className="title_right">{props.title}</h3>
      </div>
    </div>
  );
}

export default Right;
