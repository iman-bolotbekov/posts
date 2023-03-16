import { useMemo } from 'react'

export const useSortedPost = (sort, posts) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}

export const usePosts = (post, sort, query) => {
  const sortedPosts = useSortedPost(sort, post)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])
  return sortedAndSearchedPosts
}
