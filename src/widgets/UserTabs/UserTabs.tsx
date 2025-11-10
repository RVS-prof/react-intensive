import { NavLink, useParams } from 'react-router-dom';
import type { TabItem } from './type';
import styles from './UserTabs.module.css';

const UserTabs = () => {
  const searchParams = useParams();
  const userId = searchParams.id

  const tabs: TabItem[] = [
    { path: `/user/${userId}/posts`, label: 'Посты', icon: '📚' },
    { path: `/user/${userId}/todos`, label: 'Задачи', icon: '💼' },
    { path: `/user/${userId}/albums`, label: 'Альбомы', icon: '📝' },
  ];

  return (
    <nav  
      role="tablist"
      aria-label="Навигация пользователя"
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => 
            `${styles.tab} ${isActive ? styles.active : ''}`
          }
          role="tab"
        >
          <span className={styles.tabContent}>
            {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
            <span className={styles.label}>{tab.label}</span>
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default UserTabs;