import './App.css'
import PostCard from './components/PostCard'
import { useGetPostsQuery } from './redux/api'

function App() {

  const { isLoading, isError, isSuccess, data , error  } = useGetPostsQuery("")

  console.log(isLoading, isError, isSuccess, data , error)

  return (
    <div>
      {
        isLoading ? <div>Loading...</div> : data?.map(i => (
          <PostCard post={i} />
        ))
      }
    </div>
  )
}

export default App
