import { publicPostsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicPostsGetAll,
  PublicPostsGetAllArg,
  PublicPostsGetPost,
  PublicPostsGetPostArg,
  PublicPostsGetPostsByUser,
  PublicPostsGetPostsByUserArg,
} from '@/app/services/public-posts/public-posts.types'
import { transformImagesData } from '@/app/utils'

const { getAllPublicPosts, getPublicPostByUserId, getPublicPostsByUserId } = publicPostsApiUrls

export const publicPostsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getPublicPostById: builder.query<PublicPostsGetPost, PublicPostsGetPostArg>({
      providesTags: ['Posts', 'Images'],
      query: queryArg => ({
        url: getPublicPostByUserId(queryArg.postId),
      }),
      transformResponse: transformImagesData,
    }),

    getPublicPosts: builder.query<PublicPostsGetAll, PublicPostsGetAllArg>({
      providesTags: ['Posts'],
      query: queryArg => {
        return {
          params: {
            pageSize: queryArg.pageSize,
            sortBy: queryArg.sortBy,
            sortDirection: queryArg.sortDirection,
          },
          url: getAllPublicPosts(queryArg.endCursorPostId),
        }
      },

      transformResponse: transformImagesData,
    }),
    getPublicPostsByUser: builder.query<PublicPostsGetPostsByUser, PublicPostsGetPostsByUserArg>({
      // },
      providesTags: ['Posts'],
      query: queryArg => ({
        params: {
          pageSize: queryArg.pageSize,
          sortBy: queryArg.sortBy,
          sortDirection: queryArg.sortDirection,
        },
        url: getPublicPostsByUserId({
          endCursorPostId: queryArg.endCursorPostId,
          userId: queryArg.userId,
        }),
      }),
      // serializeQueryArgs: ({ endpointName }) => {
      //   console.log('endpointName', endpointName)
      //
      //   return endpointName
      // },
      // // Always merge incoming data to the cache entry
      // merge: (currentCache, newItems) => {
      //   currentCache.items.push(...newItems.items)
      // },
      // // Refetch when the page arg changes
      // forceRefetch({ currentArg, previousArg }) {
      //   return currentArg !== previousArg
      transformResponse: transformImagesData,
    }),
  }),

  overrideExisting: true,
})

export const { useGetPublicPostByIdQuery, useGetPublicPostsByUserQuery, useGetPublicPostsQuery } =
  publicPostsApi
export const { getPublicPostById, getPublicPosts, getPublicPostsByUser } = publicPostsApi.endpoints
