import React from 'react';

// Типы для пропсов
interface WithLoadingProps {
  isLoading: boolean;
}

// HOC функция
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