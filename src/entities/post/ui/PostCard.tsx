import { useCallback, useMemo, useState } from 'react';
import type { IPostCard } from '../../../types/types';
import { MyButton } from '../../../shared/ui/Button/MyButton';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

const PostCard = ( props : IPostCard) => {
  const [isShowMore, setIsShowMore] = useState(false)

   const toggleShowMore = useCallback(() => {
    setIsShowMore(prev => !prev);
  }, []);

  const commentsSection = useMemo(() => {
    if (!isShowMore) return null;
    return props.comments.map(comment => {
      return <CommentList id = {comment.id } comment={comment} />
    });
  }, [isShowMore, props.comments]);

  return (
    <section>
      <header>
        <h2>
          {props.post.title}
        </h2>
      </header>
      <div>
        <p>
          {props.post.body}
        </p>
      </div>
      <MyButton onClick = {toggleShowMore}>
        {!isShowMore ?'show more...' : 'hide comments...'}
      </MyButton>
      {commentsSection}
    </section>
  )
};

export default PostCard