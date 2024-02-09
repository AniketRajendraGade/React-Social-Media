const Welcome = ({ onGetPostClick }) => {
  return (
    <center className="welcomeMsg">
      <h1>There Are No Posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get post from Server
      </button>
    </center>
  );
};

export default Welcome;
