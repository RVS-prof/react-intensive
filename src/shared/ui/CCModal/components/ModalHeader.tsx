import styles from './Modal.module.css';
import { useModalContext } from './ModalContext';

export const ModalHeader = () => {
  const { post } = useModalContext();
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{post.title}</h1>
    </div>
  );
};