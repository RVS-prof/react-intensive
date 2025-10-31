import React from 'react';
import type { WithLoadingProps } from '../../../types/types';

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return ({ isLoading, ...props }: P & WithLoadingProps) => {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner">Загрузка...</div>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };
}

export default withLoading;