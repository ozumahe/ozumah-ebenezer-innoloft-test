export type ProductType = {
  picture: string;
  name: string;
  description: string;
  investmentEffort: string;
  type: { name: string };
  categories: { id: number; name: string }[];
  businessModels: { id: number; name: string }[];
  trl: { name: string };
  video: string;
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    position: string;
    profilePicture: string;
    sex: number;
  };
  company: {
    logo: string;
    name: string;
    address: {
      city: { name: string };
      country: { name: string };
      house: string;
      latitude: string;
      longitude: string;
      street: string;
      zipCode: string;
    };
  };
};

export type TrlType = { id: number; name: string };

export type ConfigType = {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
};
