import {FormEvent} from "react";
import axios from "axios";

export const createBook = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const category = formData.get("category") as string;
    const publisher = formData.get("publisher") as string;
    const ISBN = Number(formData.get("ISBN")) as number;
    const pages = Number(formData.get("pages")) as number;
    const copies =Number( formData.get("copies")) as number;
    const publish_date = formData.get("publish_date") as string;

    const headers = {"Content-type": "application/json"};
    try {
        const response = await axios.post("", {
            title, author, copies, ISBN, category, publish_date, publisher, pages
        }, {headers})

        if(response.status === 200) {
          console.log(response , "success")
        }

    } catch (error) {
        console.error(error);
    }
}