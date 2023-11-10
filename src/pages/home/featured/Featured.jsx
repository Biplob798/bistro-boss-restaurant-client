import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white bg-fixed pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 gap-6 pb-20 pt-12 px-36">
        {" "}
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-6">
          <p>march,23,2025</p>
          <p className="uppercase">where can i get some ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            adipisci error repellendus amet reprehenderit dolore, consequatur
            molestiae optio laboriosam nostrum repellat, sit obcaecati nemo modi
            cumque? Consequuntur dolorum eligendi, libero suscipit id explicabo
            cupiditate inventore odio alias repellendus asperiores quos totam ea
            omnis repellat? Itaque, molestiae et.
          </p>
          <button
            className="btn btn-outline border-0 border-b-4 
           mt-4"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
