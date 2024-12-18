import React from "react";
import CreateBookForm from "@/app/components/CreateBookForm";

const NewBooksPage = () => {
    return <div className="container h-[calc(100dvh-70px)] flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-zinc-100 rounded-xl shadow-xl p-4">
          <CreateBookForm />
        </div>
    </div>
};

export default NewBooksPage;
