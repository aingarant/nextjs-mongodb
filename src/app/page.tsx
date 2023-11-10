"use client"
import {addUser} from "@/lib/mongodb/actions";

export default async function HomePage() {

  const addUserSubmit = async () => {
    const newUser = await addUser

    {
      newUser &&
      console.log(newUser)
    }
  }


  return (
    <>
      <div className='text-4xl'>Home Page</div>
      <form action={addUser}>
          <input type='text' name='name' placeholder='name' />
          <input type='password' name='password' placeholder='password' />
          <input type='text' name='email' placeholder='email' />
      <button className='bg-red-400 px-2 my-2' type="submit">click me</button>
      </form>
    </>
  )
}
