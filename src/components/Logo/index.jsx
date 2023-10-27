import logo from "../../assets/img/logo.png";

const Logo = ({ w = "w-full", h = "h-full" }) => {
  return (
    <a href="#">
      <img
        src={logo}
        alt="Imagem Logo da Travaler"
        className={`${w} ${h} block `}
      />
    </a>
  );
};

export default Logo;
