import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline border-0 border-b-4 
           mt-4 uppercase "
        >
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
