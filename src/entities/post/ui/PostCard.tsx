import { useCallback, useMemo, useState } from 'react';
import type { IPostCard } from '../../type';
import { MyButton } from '../../../shared/ui/Button/MyButton';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import style from './PostCard.module.css'
import type { Comment } from '../../entity/model/type';

const PostCard = ( props : IPostCard ) => {
  const [isShowMore, setIsShowMore] = useState(false)

   const toggleShowMore = useCallback(() => {
    setIsShowMore(prev => !prev);
  }, []);

  const commentsSection = useMemo(() => {
    if (!isShowMore) return null;
    return props.comments.map((comment : Comment) => {
      return <CommentList 
        key = { comment.id } 
        comment = { comment } 
      />
    });
  }, [ isShowMore, props.comments ]);
  
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
      <MyButton onClick = {toggleShowMore} className={style.button}>
        {!isShowMore 
          ?'show more...' 
          : 'hide comments...'
        }
      </MyButton>
      {commentsSection}
    </section>
  )
};

export default PostCard