import {
  PostBox,
  PostDescription,
  PostDescriptionBox,
  PostHeader,
  PostHeaderIcon,
  PostHeaderTitle,
  PostHeaderTitleBox,
  PostInfoBox,
  PostInfoContent,
  PostInfoIcon,
  PostInfoP,
  PostsTitle,
} from './styles'

import { LuFileEdit } from 'react-icons/lu'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { BsCalendarWeek } from 'react-icons/bs'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { MdLocationPin } from 'react-icons/md'

function RightPane() {
  return (
    <>
      <PostsTitle>Recent Posts</PostsTitle>
      <PostBox>
        <PostHeader>
          <PostHeaderTitleBox>
            <PostHeaderTitle>Cardiologist</PostHeaderTitle>
          </PostHeaderTitleBox>
          <PostHeaderIcon>
            <LuFileEdit />
          </PostHeaderIcon>
        </PostHeader>
        <PostDescriptionBox>
          <PostDescription>
            Lister Hospital is seeking a dedicated and detail-oriented Medical
            Research Assistant to join our team of esteemed researchers. As a
            Medical Research Assistant, you will play a crucial role in
            supporting our ongoing research projects and contributing to
            advancements in the field of biomedicine.
          </PostDescription>
        </PostDescriptionBox>
        <PostInfoBox>
          <PostInfoContent>
            <PostInfoIcon>
              <MdLocationPin />
            </PostInfoIcon>
            <PostInfoP>Airport, Accra</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <LiaMoneyCheckAltSolid />
            </PostInfoIcon>
            <PostInfoP>$1500</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <BsCalendarWeek />
            </PostInfoIcon>
            <PostInfoP>7 days left</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <HiMiniUserGroup />
            </PostInfoIcon>
            <PostInfoP>192 applied</PostInfoP>
          </PostInfoContent>
        </PostInfoBox>
      </PostBox>
      <PostBox>
        <PostHeader>
          <PostHeaderTitleBox>
            <PostHeaderTitle>Cardiologist</PostHeaderTitle>
          </PostHeaderTitleBox>
          <PostHeaderIcon>
            <LuFileEdit />
          </PostHeaderIcon>
        </PostHeader>
        <PostDescriptionBox>
          <PostDescription>
            Lister Hospital is seeking a dedicated and detail-oriented Medical
            Research Assistant to join our team of esteemed researchers. As a
            Medical Research Assistant, you will play a crucial role in
            supporting our ongoing research projects and contributing to
            advancements in the field of biomedicine.
          </PostDescription>
        </PostDescriptionBox>
        <PostInfoBox>
          <PostInfoContent>
            <PostInfoIcon>
              <MdLocationPin />
            </PostInfoIcon>
            <PostInfoP>Airport, Accra</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <LiaMoneyCheckAltSolid />
            </PostInfoIcon>
            <PostInfoP>$1500</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <BsCalendarWeek />
            </PostInfoIcon>
            <PostInfoP>7 days left</PostInfoP>
          </PostInfoContent>
          <PostInfoContent>
            <PostInfoIcon>
              <HiMiniUserGroup />
            </PostInfoIcon>
            <PostInfoP>192 applied</PostInfoP>
          </PostInfoContent>
        </PostInfoBox>
      </PostBox>
    </>
  )
}
export default RightPane
