import { CopyLinkIcon, DeleteIcon, EditIcon, FollowIcon, ReportIcon, UnfollowIcon } from '@/app'
import { DropdownMenuType, PostType } from '@/components'

export const MENU_VERSION: DropdownMenuType = {
  friend: [
    {
      icon: ReportIcon,
      label: 'Report',
      isStyled: false,
      action: 'report',
    },
    {
      icon: UnfollowIcon,
      label: 'Unfollow',
      isStyled: false,
      action: 'unfollow',
    },
    {
      icon: CopyLinkIcon,
      label: 'Copy Link',
      isStyled: false,
      action: 'copy',
    },
  ],
  personal: [
    {
      icon: EditIcon,
      label: 'Edit Post',
      isStyled: false,
      action: 'edit',
    },
    {
      icon: DeleteIcon,
      label: 'Delete Post',
      isStyled: false,
      action: 'delete',
    },
  ],
  public: [
    {
      icon: ReportIcon,
      label: 'Report',
      isStyled: false,
      action: 'report',
    },
    {
      icon: FollowIcon,
      label: 'Follow',
      isStyled: false,
      action: 'follow',
    },
    {
      icon: CopyLinkIcon,
      label: 'Copy Link',
      isStyled: false,
      action: 'copy',
    },
  ],
}

export const POST_COMMENTS: PostType = {
  userName: 'Alex',
  postdId: '62',
  url: '/assets/avatar/resized/2.jpg',
  account: 'personal',
  description:
    'Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores.',
  createdAt: '1 day ago',
  comments: [
    {
      userName: 'Natti',
      url: '/assets/avatar/resized/1.jpg',
      id: '1',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '2 days ago',
    },
    {
      userName: 'David',
      url: '/assets/avatar/resized/3.jpg',
      id: '2',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '1 hour ago',
      likes: 25,
      replies: [
        {
          userName: 'Loren',
          url: '/assets/avatar/resized/4.jpg',
          id: '100',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
          createdAt: '7 hours ago',
          likes: 12,
        },
        {
          userName: 'Katty',
          url: '/assets/avatar/resized/5.jpg',
          id: '101',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
          createdAt: '25 minutes ago',
        },
      ],
    },
    {
      userName: 'Gar_D',
      url: '/assets/avatar/resized/6.jpg',
      id: '3',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
      createdAt: '3 weeks ago',
    },
  ],
}
