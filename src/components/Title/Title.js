import "./Title.css";
function Title(props) {
  return (
    <div>
      <div class="title">
        <h3 className="title_title">*{props.title}</h3>
      </div>
    </div>
  );
}

export default Title;
