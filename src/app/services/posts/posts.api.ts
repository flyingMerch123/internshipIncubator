import { postsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import { CreatePostRequest, PostImages, PostModel } from '@/app/services/posts/posts.types'

const { createPost, postById, postImageById, uploadImagePost } = postsApiUrls

export const postsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<PostModel, CreatePostRequest>({
      invalidatesTags: ['Posts', 'Profile'],
      query: body => ({
        body,
        method: 'POST',
        url: createPost(),
      }),
    }),
    deleteImagePost: builder.mutation<void, { uploadId: string }>({
      invalidatesTags: ['Images', 'Posts'],
      query: args => ({
        method: 'DELETE',
        url: postImageById(args.uploadId),
      }),
    }),
    deletePostById: builder.mutation<void, { postId: number }>({
      invalidatesTags: ['Posts'],
      query: args => ({
        method: 'DELETE',
        url: postById(args.postId),
      }),
    }),
    updatePostById: builder.mutation<void, { description: string; postId: number }>({
      invalidatesTags: ['Posts'],
      query: args => ({
        body: { description: args.description },
        method: 'PUT',
        url: postById(args.postId),
      }),
    }),
    uploadImagePost: builder.mutation<PostImages, FormData>({
      query: body => ({
        body,
        method: 'POST',
        url: uploadImagePost(),
      }),
    }),
  }),
  overrideExisting: true,
})

export const {
  useCreatePostMutation,
  useDeleteImagePostMutation,
  useDeletePostByIdMutation,
  useUpdatePostByIdMutation,
  useUploadImagePostMutation,
} = postsApi
