import axios from "axios"

export default async function getData(Number) {
    const { data: users } =
    await axios("https://jsonplaceholder.typicode.com/users/" + Number)
    const post1 =
        await axios("https://jsonplaceholder.typicode.com/posts?userId=" + Number)

    users.posts = post1.data
    console.log(users)

}