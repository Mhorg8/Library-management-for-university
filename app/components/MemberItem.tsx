import React from "react";

const MemberItem = () => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-3 bg-white rounded-lg space-y-2 p-2 h-fit">
      <div className="member__item">
        <h3 className="member__item-title">نام :</h3>
        <p className="member__item-value">محمدحسین</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title">نام خانوادگی :</h3>
        <p className="member__item-value">علیرضایی</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title"> شماره تلفن :</h3>
        <p className="member__item-value">09331732825</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title">کد دانشجویی :</h3>
        <p className="member__item-value">40057741054019</p>
      </div>
    </div>
  );
};

export default MemberItem;
