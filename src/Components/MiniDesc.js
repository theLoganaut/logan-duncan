const MiniDesc = ({ hover }) => {
  return (
    <div
      style={{
        marginTop: ".5rem",
        textAlign: "center",
        width: "50%",
        minHeight: "100px",
        // marginLeft: "50%",
        transform: "translateX(50%)",
      }}
    >
      {hover}
    </div>
  );
};

export default MiniDesc;
