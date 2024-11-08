function ButtonIcon(props) {
  return (
    <button className="bg-slate-300 p-3 text-white rounded-md" {...props}>
      {props.children}
    </button>
  );
}

export default ButtonIcon;
