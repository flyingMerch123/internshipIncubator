export const postsApiUrls = {
  createPost: () => '/api/v1/posts' as const,
  postById: (postId: number) => `/api/v1/posts/${postId}` as const,
  postImageById: (uploadId: string) => `/api/v1/posts/image/${uploadId}` as const,
  uploadImagePost: () => '/api/v1/posts/image' as const,
}

export const publicPostsApiUrls = {
  getAllPublicPosts: (endCursorPostId?: number) =>
    `/api/v1/public-posts/all/${endCursorPostId}` as const,
  getPublicPostByUserId: (postId?: number) => `/api/v1/public-posts/${postId}` as const,
  getPublicPostsByUserId: ({
    endCursorPostId,
    userId,
  }: {
    endCursorPostId?: number
    userId: number
  }) => `/api/v1/public-posts/user/${userId}/${endCursorPostId}` as const,
}
