export interface IActive {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILoginUser {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISpecFeature extends IActive, ILoginUser{}