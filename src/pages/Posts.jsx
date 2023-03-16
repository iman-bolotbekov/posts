import React, {useEffect} from 'react'
import { useState } from 'react'
import '../style/App.css'
import {getPageCount} from "../utils/pages";
import {useFetch} from "../hooks/useFetch";
import PostService from "../components/API/PostService";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import MyModel from "../components/UI/MyModel/MyModel";
import {usePosts} from "../hooks/usePost";
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage ] = useState(1)


    const [fetchPosts, isPostsLoading, postError] = useFetch(async (limit, page) => {
        const response = await PostService.getPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }


    return (
        <div style={{ paddingTop: '30px' }} className="App">
            <h1 style={{ textAlign: 'center' }}>Посты</h1>
            <MyButton onClick={() => setModal(true)} children="Создать пост" />
            <MyModel visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModel>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Произошла ошибка {postError}</h1>}
            {isPostsLoading ? <Loader /> : <PostList
                posts={sortedAndSearchedPosts}
                remove={removePost}
                title="Посты про посты"
            /> }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />

        </div>
    )
}

export default Posts