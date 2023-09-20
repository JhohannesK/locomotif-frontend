import styled from 'styled-components'
import Constants from '../../../../utils/constants'

export const PostsTitle = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 34.285px */
`
export const PostBox = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.5);
  background: #fff;
  max-width: 100%;
  max-height: inherit;
  padding: 7px;
  margin-bottom: 10px;
`

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`
export const PostHeaderTitleBox = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ededed;
`
export const PostHeaderTitle = styled.h4`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 20.571px */
`

export const PostHeaderIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 200%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
`

export const PostDescriptionBox = styled.div`
  width: 100%;
  margin: 10px 0px;
`

export const PostDescription = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 20.571px */
`

export const PostInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  max-height: 80px;
  column-gap: 25px;
  margin: 10px 0;
  max-width: 100%;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    max-height: 95px;
    column-gap: 15px;
    row-gap: 5px;
  }
`

export const PostInfoContent = styled.div`
  display: flex;
  padding: 8px 7px;
  align-items: center;
  gap: 14px;
  border-radius: 20px;
  background: #ededed;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    padding: 6px 5px;
    gap: 10px;
  }
`
export const PostInfoIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 15px;
  font-size: 200%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
`

export const PostInfoP = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 17.828px */
`
