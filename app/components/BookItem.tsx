import React from "react";

const BookItem = () => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-3 bg-white rounded-lg space-y-2 p-2 h-fit">
      <div className="member__item">
        <h3 className="member__item-title">نام کتاب :</h3>
        <p className="member__item-value">عادت های اتمی</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title">نام نویسنده :</h3>
        <p className="member__item-value">علیرضایی</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title"> تعداد کتاب:</h3>
        <p className="member__item-value">5</p>
      </div>
      <div className="member__item">
        <h3 className="member__item-title">کد اختصاصی کتاب :</h3>
        <p className="member__item-value">40057741054019</p>
      </div>
    </div>
  );
};

export default BookItem;
