import { ref } from 'vue'

const getAllPosts = () => {
  const posts = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts')
      console.log(data);
      if (!data.ok) {
        throw Error('Error while fetching posts')
      }

      posts.value = await data.json()
      console.log(posts.value);

    } catch (err) {
      console.log(err);
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getAllPosts