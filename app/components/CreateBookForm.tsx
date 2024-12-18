"use client"
import {createBook} from "@/hooks/createBook";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import React from "react";

export const CreateBookForm = () => {
    return (
        <form onSubmit={createBook} className="">
            <div className="flex items-center flex-col md:flex-row h-full w-full gap-5">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                    <Input type="text" placeholder="عادت های اتمی" name="title"
                           label="اسم کتاب"/>
                    <Input type="text" placeholder="محمدحسین علیرضایی" name="author"
                           label="نویسنده"/>
                    <Input type="text" placeholder="روانشناسی" name="category"
                           label="دستبندی "/>
                    <Input type="text" placeholder="جنگل" name="publisher" label="ناشر"/>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                    <Input type="number" placeholder="9780743273565" name="ISBN" label="ISBN"/>
                    <Input type="number" placeholder="5" name="pages" label="تعداد صفحه"/>
                    <Input type="number" placeholder="255" name="copies" label="تعداد صفحه "/>
                    <Input type="number" placeholder="1925-04-10" name="publish_date"
                           label="تاریخ انتشار"/>
                </div>
            </div>
            <PrimaryButton text="افزودن" type="submit" customStyle="w-full mt-8 py-3"/>
        </form>
    );
};

export  default CreateBookForm;
