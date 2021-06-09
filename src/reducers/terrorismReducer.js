import { DISPLAY_TERRORIST } from '../action-types/terrorism-action-types';
const initialState = [
  {
    id: "1",
    img: "https://www.fbi.gov/wanted/terrorinfo/amer-el-maati/@@images/image/thumb",
    title: "AMER EL-MAATI",
    description: "Amer El-Maati is wanted for questioning in connection with possible terrorist threats against the United States.",
    field_office: "Boston",
    url: "https://www.fbi.gov/wanted/terrorinfo/amer-el-maati"
  },
  {
    id: "2",
    img: "https://www.fbi.gov/wanted/cei/freddy-ivan-jandres-parada/@@images/image/thumb",
    title: "FREDDY IVAN JANDRES-PARADA",
    description: "Freddy Ivan Jandres-Parada is wanted for his alleged involvement in the direction of MS-13 activity in the United States, Mexico, and El Salvador.  He is alleged to be among the most senior leaders of MS-13 worldwide.  Jandres-Parada has been charged with several terrorism offenses for his alleged role in ordering numerous acts of violence against civilians, law enforcement, and rival gang members, as well as drug distribution and extortion schemes worldwide.  A federal arrest warrant was issued for Jandres-Parada in the United States District Court, Eastern District of New York, on December 16, 2020, after he was charged with Conspiracy to Provide and Conceal Material Support and Resources to Terrorists, Conspiracy to Commit Acts of Terrorism Transcending National Boundaries, Conspiracy to Finance Terrorism, and Narco-Terrorism Conspiracy. This case is being investigated as part of Joint Task Force Vulcan.",
    field_office: null,
    url: "https://www.fbi.gov/wanted/cei/freddy-ivan-jandres-parada"
  },
  {
    id: "3",
    img: "https://www.fbi.gov/wanted/dt/donna-joan-borup/@@images/image/thumb",
    title: "DONNA JOAN BORUP",
    description: "Donna Joan Borup is wanted for her alleged participation in a violent anti-apartheid demonstration at JFK International Airport in Queens, New York, on September 26, 1981. During the riot, Borup allegedly tossed a caustic substance into the eyes of a Port Authority Police Officer, leaving him partially blind. At the time, Borup was a member of the May 19th Communist Organization, a Marxist-Leninist organization which advocated the armed revolution and violent overthrow of the United States Government. Borup, along with some accomplices, was arrested and released on bail pending trial in May of 1982. On May 20, 1982, an arrest warrant was issued for Borup after she failed to appear for her trial on a Queens County indictment which charged her with riot in the first degree and assault in the first degree. On September 14, 1982, a federal arrest warrant was issued for Borup in the Eastern District of New York and she was charged with unlawful flight to avoid prosecution.",
    field_office: "New York",
    url: "https://www.fbi.gov/wanted/dt/donna-joan-borup"
  }
]
const terrorismReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_TERRORIST:
      return state;
    default:
      return state;
  }
};
export default terrorismReducer;