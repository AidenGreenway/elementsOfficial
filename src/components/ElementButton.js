const ElementButton = ({ element, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: selected ? "#ff6347" : "transparent",
        color: selected ? "#fff" : "#fff",
        border: "1px solid #fff",
        borderRadius: "4px",
        padding: "8px 16px",
        transition: "background-color 0.3s, color 0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img src={`images/${element}gif.gif`} alt={`${element} GIF`} width="50" height="50" />
      <span
        style={{
          fontSize: "14px",
          marginTop: "8px",
        }}
      >
        {element}
      </span>
    </button>
  );
};

export default ElementButton;
