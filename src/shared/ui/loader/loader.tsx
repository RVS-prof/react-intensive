interface LoaderProps {
  isLoading: boolean;
  thirdPartyFunction: () => React.ReactNode;
}

const Loader = ( props : LoaderProps ) => {
  const loadingFunc = () => {
    return (
      <div>
        Загрузка...
      </div>
    )
  }

  return (
    <>
      {props.isLoading
        ? loadingFunc()
        : props.thirdPartyFunction()
      }
    </>
  )
}

export default Loader