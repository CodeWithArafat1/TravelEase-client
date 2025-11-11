import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const Profile = () => {
  const { user } = useSelector((store) => store.userAuth);
  const { isOpenDropdown } = useSelector((store) => store.profileModal);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpenDropdown ? "block" : "hidden"
      } w-64 rounded-lg shadow-xl 
                border border-gray-300/20 bg-base-200  
                backdrop-blur-lg`}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-emerald-500">
            <img
              src={user.photoURL}
              alt="Arafat Nill"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <div className="truncate font-semibold ">{user.displayName}</div>
            <div className="truncate text-xs ">{user.email}</div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-slate-700/50 my-2"></div>

        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="w-full cursor-pointer rounded-lg bg-linear-to-r from-red-500 to-pink-500 py-3 px-4 text-center font-semibold text-white transition-all duration-200 hover:opacity-90"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
