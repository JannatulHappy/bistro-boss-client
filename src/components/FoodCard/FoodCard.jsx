import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const goTo = useNavigate();
  const location = useLocation();
  const axiosSecure=useAxiosSecure()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //todo:send cart item to the database
      console.log("user ace");
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/carts", cartItem)
          .then((res) => {
            
              if (res.data.insertedId) {
                  
                   Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: `${name} added to the cart`,
                     showConfirmButton: false,
                     timer: 1500,
                   });
              }
        });
    } else {
      Swal.fire({
        title: "you are not logged in",
        text: "please login to the the the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send to the login page
          goTo("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">
        ${price}
      </p>
      <div className="flex flex-col items-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-end card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="mt-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
