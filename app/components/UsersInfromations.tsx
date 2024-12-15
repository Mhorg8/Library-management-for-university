import React from "react";

const UserInformation = () => {
  return (
    <div className="bg-gray-200 h-fit w-full rounded-xl p-3">
      <h2 className="text-2xl font-bold">اطلاعات تکمیلی اعضا</h2>
      <div className="flex flex-col h-full items-start mt-10 gap-5">
        <div className="sidebar__item">
          <h3 className="sidebar__item-title">تعداد اعضا</h3>
          <p className="sidebar__item-value">
            122 <span className="text-sm">نفر</span>
          </p>
        </div>
        <div className="sidebar__item">
          <h3 className="sidebar__item-title"> تعداد اعضا فعال</h3>
          <p className="sidebar__item-value text-green-400">
            122 <span className="text-sm">نفر</span>
          </p>
        </div>
        <div className="sidebar__item">
          <h3 className="sidebar__item-title"> تعداد اعضا غیر فعال</h3>
          <p className="sidebar__item-value text-red-500">
            0 <span className="text-sm">نفر</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
