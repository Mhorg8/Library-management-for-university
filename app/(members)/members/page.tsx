import MemberItem from "@/app/components/MemberItem";
import SearchUser from "@/app/components/SearchUser";

import UserInformation from "@/app/components/UsersInfromations";

const MembersPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12  md:gap-x-10 gap-y-5 py-5 w-full h-[calc(100dvh-70px)] container">
        {/* User information , Find user with id */}
        <div className="col-span-12  md:col-span-3 flex flex-col w-full gap-10 ">
          {/*User information  */}
          <UserInformation />

          <SearchUser />
        </div>

        {/* User list */}
        <div className="col-span-12 md:col-span-9  bg-gray-200 rounded-xl p-5 h-full flex flex-col">
          <h2 className="text-2xl font-bold">لیست تمامی اعضا</h2>
          {/* member list */}
          <div className="grid grid-cols-10 gap-5 mt-10 h-[80%] flex-1">
            {/* member item */}
            <MemberItem />
          </div>
          {/* pagination */}
          <div className="w-full flex items-center justify-center justify-self-end mt-5 gap-2">
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              1
            </button>
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              2
            </button>
            <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primaryColor text-white">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
