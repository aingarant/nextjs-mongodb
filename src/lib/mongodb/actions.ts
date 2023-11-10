"use server"

import {connectToDB} from "@/lib/mongodb/config"
import {User} from "@/lib/mongodb/model";

export const addUser = async (formData: FormData) => {

    const {name, email, password} = Object.fromEntries(formData);
    try {
        await connectToDB();
        const newUser = new User({
            email: email,
            password: password,
            name: name
        })

        await newUser.save();
    }
    catch(error)
    {
        return ("Failed to create user!");
    }

}
