import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, price, category, recipe, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        // now sent the menu  item data to the server with the image
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };
        //
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
          // show success popup
          //   reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is Updated to the menu`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      console.log(res.data);
      // Handle the response, e.g., save the URL or perform additional actions
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Update An Item"}
        subHeading={"Refresh Info"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* input filed  */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            {/* category  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">category</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select a Category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            {/* price  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="price "
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details  */}
          <textarea
            defaultValue={recipe}
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
          {/* file input  */}
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn btn-primary mt-4">Update Menu item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
