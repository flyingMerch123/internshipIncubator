import { CopyLinkIcon, DeleteIcon, EditIcon, FollowIcon, ReportIcon, UnfollowIcon } from '@/app'
import { DropdownMenuType, PostTypes } from '@/components'

export const MENU_VERSION: DropdownMenuType = {
  friend: [
    {
      action: 'report',
      icon: ReportIcon,
      isStyled: false,
      label: 'Report',
    },
    {
      action: 'unfollow',
      icon: UnfollowIcon,
      isStyled: false,
      label: 'Unfollow',
    },
    {
      action: 'copy',
      icon: CopyLinkIcon,
      isStyled: false,
      label: 'Copy Link',
    },
  ],
  personal: [
    {
      action: 'edit',
      icon: EditIcon,
      isStyled: false,
      label: 'Edit Post',
    },
    {
      action: 'delete',
      icon: DeleteIcon,
      isStyled: false,
      label: 'Delete Post',
    },
  ],
  public: [
    {
      action: 'report',
      icon: ReportIcon,
      isStyled: false,
      label: 'Report',
    },
    {
      action: 'follow',
      icon: FollowIcon,
      isStyled: false,
      label: 'Follow',
    },
    {
      action: 'copy',
      icon: CopyLinkIcon,
      isStyled: false,
      label: 'Copy Link',
    },
  ],
}

export const POST_COMMENTS: PostTypes = {
  account: 'personal',
  comments: [
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '2 days ago',
      id: '1',
      url: '/assets/avatar/resized/1.jpg',
      userName: 'Natti',
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '1 hour ago',
      id: '2',
      likes: 25,
      replies: [
        {
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
          createdAt: '7 hours ago',
          id: '100',
          likes: 12,
          url: '/assets/avatar/resized/4.jpg',
          userName: 'Loren',
        },
        {
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
          createdAt: '25 minutes ago',
          id: '101',
          url: '/assets/avatar/resized/5.jpg',
          userName: 'Katty',
        },
      ],
      url: '/assets/avatar/resized/3.jpg',
      userName: 'David',
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '3 weeks ago',
      id: '3',
      url: '/assets/avatar/resized/6.jpg',
      userName: 'Gar_D',
    },
  ],
  createdAt: '1 day ago',
  description:
    'Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores.',
  postId: 62,
  url: '/assets/avatar/resized/2.jpg',
  userName: 'Alex',
}
