import styles from './Modal.module.css';
import { useModalContext } from './ModalContext';

export const ModalBody = () => {
  const { post } = useModalContext();
  return <div className={styles.body}>
      <h3>
        {post.body}
      </h3>
    </div>;
};