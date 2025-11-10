import React from 'react';
import type { WithLoadingProps } from './type';
import style from './WithLoading.module.css'

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return ({ isLoading, ...props }: P & WithLoadingProps) => {
    if (isLoading) {
      return (
        <div className={style['loadingContainer']}>
          <div>Загрузка...</div>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };
}

export default withLoading;