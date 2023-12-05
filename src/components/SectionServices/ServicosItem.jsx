const ServicosItem = ({ url, title, text }) => {
  return (
    <div className=" text-center md:flex-1">
      <img src={url} className="m-auto mt-10 md:mt-0"/>
      <h2 className="font-bold md:text-lg">{title}</h2>
      <p className="md:text-lg">{text}</p>
    </div>
  );
};

export default ServicosItem;
