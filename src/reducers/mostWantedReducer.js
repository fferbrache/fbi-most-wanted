import { DISPLAY_MOST_WANTED } from '../action-types/most-wanted-action-types';
import { ADD_TIP } from '../action-types/tip-action-types';

const initialState = [
  {
    id: "1",
    img: "https://www.fbi.gov/wanted/topten/alejandro-castillo/@@images/image/thumb",
    title: "ALEJANDRO ROSALES CASTILLO",
    description: "Alejandro Rosales Castillo is wanted for his alleged involvement in the murder of a co-worker in Charlotte, North Carolina, in 2016. The female victim’s vehicle was located at a bus station in Phoenix, Arizona, on August 15, 2016. On August 17, 2016, the victim’s body was located in a wooded area in Cabarrus County, North Carolina, with a gunshot wound to the head.",
    field_office: "Charlotte",
    url: "https://www.fbi.gov/wanted/topten/alejandro-castillo",
    video: "https://www.youtube.com/embed/cDBYA4uCBkY"
  },
  {
    id: "2",
    img: "https://www.fbi.gov/wanted/topten/arnoldo-jimenez/@@images/image/thumb",
    title: "ARNOLDO JIMENEZ",
    description: "Arnoldo Jimenez is wanted for allegedly killing his wife on May 12, 2012, the day after their wedding. He allegedly stabbed his wife to death in his black, four-door, 2006 Maserati, then allegedly dragged her body into the bathroom tub of her apartment in Burbank, Illinois. Jimenez was charged with first degree murder by the Circuit Court of Cook County, Illinois, and a state warrant was issued for his arrest on May 15, 2012. A federal arrest warrant was issued by the United States District Court, Northern District of Illinois, Eastern Division, on May 17, 2012, after Jimenez was charged federally with unlawful flight to avoid prosecution.",
    field_office: "Chicago",
    url: "https://www.fbi.gov/wanted/topten/arnoldo-jimenez",
    video: "https://www.youtube.com/embed/c6jOgMoBt_Y"
  },
  {
    id: "3",
    img: "https://www.fbi.gov/wanted/topten/jason-derek-brown/@@images/image/thumb",
    title: "JASON DEREK BROWN",
    description: "Jason Derek Brown is wanted for murder and armed robbery in Phoenix, Arizona. During November of 2004, Brown allegedly shot and killed an armored car guard outside a movie theater and then fled with the money.",
    field_office: "Phoenix",
    url: "https://www.fbi.gov/wanted/topten/jason-derek-brown"
  },
  {
    id: "4",
    img: "https://www.fbi.gov/wanted/topten/alexis-flores/@@images/image/thumb",
    title: "ALEXIS FLORES",
    description: "Alexis Flores is wanted for his alleged involvement in the kidnapping and murder of a five-year-old girl in Philadelphia, Pennsylvania. The girl was reported missing in late July of 2000, and was later found strangled to death in a nearby apartment in early August of 2000.",
    field_office: "Philadelphia",
    url: "https://www.fbi.gov/wanted/topten/alexis-flores"
  },
  {
    id: "5",
    img: "https://www.fbi.gov/wanted/topten/jose-rodolfo-villarreal-hernandez/@@images/image/thumb",
    title: "JOSE RODOLFO VILLARREAL-HERNANDEZ",
    description: "Jose Rodolfo Villarreal-Hernandez, also known as “El Gato,” is wanted for his alleged involvement in the interstate stalking and conspiracy to commit murder-for-hire of a 43-year-old male victim on May 22, 2013, in Southlake, Texas. A federal arrest warrant for these charges was issued on June 20, 2018. Villarreal-Hernandez allegedly holds an active leadership position in the Beltran Leyva drug-trafficking organization within the region of San Pedro Garza Garcia, Nuevo Leon, Mexico.",
    field_office: "Dallas",
    url: "https://www.fbi.gov/wanted/topten/jose-rodolfo-villarreal-hernandez"
  },
  {
    id: "6",
    img: "https://www.fbi.gov/wanted/topten/eugene-palmer/@@images/image/thumb",
    title: "EUGENE PALMER",
    description: "Eugene Palmer is wanted for allegedly shooting and killing his daughter-in-law on September 24, 2012, in Stony Point, New York.  After a local arrest warrant was issued for Palmer in Rockland County and he was charged with murder, a federal arrest warrant was issued on June 10, 2013, by the United States Court for the Southern District of New York after Palmer was charged with unlawful flight to avoid prosecution.",
    field_office: "New York",
    url: "https://www.fbi.gov/wanted/topten/eugene-palmer",
    video: "https://www.youtube.com/embed/XMLeeO2JFbQ"
  },
  {
    id: "7",
    img: "https://www.fbi.gov/wanted/topten/rafael-caro-quintero/@@images/image/thumb",
    title: "RAFAEL CARO-QUINTERO",
    description: "Rafael Caro-Quintero is wanted for his alleged involvement in the kidnapping and murder of a Drug Enforcement Administration Special Agent in 1985, in Mexico. Additionally, Caro-Quintero allegedly holds an active key leadership position directing the activities of the Sinaloa Cartel and the Caro-Quintero Drug Trafficking Organization within the region of Badiraguato, Sinaloa, Mexico.",
    field_office: null,
    url: "https://www.fbi.gov/wanted/topten/rafael-caro-quintero",
    video: "https://www.youtube.com/embed/dTXiH2hRmFs"
  },
  {
    id: "8",
    img: "https://www.fbi.gov/wanted/topten/bhadreshkumar-chetanbhai-patel/@@images/image/thumb",
    title: "BHADRESHKUMAR CHETANBHAI PATEL",
    description: "Bhadreshkumar Chetanbhai Patel is wanted for allegedly killing his wife by striking her multiple times with an object while they were both working at a donut shop in Hanover, Maryland, on April 12, 2015.  A local arrest warrant was issued in the District Court of Maryland for Anne Arundel County on April 13, 2015, and Patel was charged with first degree murder, second degree murder, first degree assault, second degree assault, and dangerous weapon with intent to injure. A federal arrest warrant was issued in the United States District Court, District of Maryland, Baltimore, Maryland, on April 20, 2015, after Patel was charged with unlawful flight to avoid prosecution.",
    field_office: "Baltimore",
    url: "https://www.fbi.gov/wanted/topten/bhadreshkumar-chetanbhai-patel",
    video: "https://www.youtube.com/embed/RTgkyjSV08g"
  },
  {
    id: "9",
    img: "https://www.fbi.gov/wanted/topten/robert-william-fisher/@@images/image/thumb",
    title: "ROBERT WILLIAM FISHER",
    description: "Robert William Fisher is wanted for allegedly killing his wife and two young children and then blowing up the house in which they all lived in Scottsdale, Arizona, in April of 2001.",
    field_office: "Phoenix",
    url: "https://www.fbi.gov/wanted/topten/robert-william-fisher",
    video: "https://www.youtube.com/embed/Su6TgLPQO7I"
  },
  {
    id: "10",
    img: "https://www.fbi.gov/wanted/topten/yaser-abdel-said/@@images/image/thumb",
    title: "YASER ABDEL SAID",
    description: "Yaser Abdel Said is wanted for his alleged involvement in the murders of his two teenaged daughters. The girls died of multiple gunshot wounds on January 1, 2008, in Irving, Texas.",
    field_office: "Dallas",
    url: "https://www.fbi.gov/wanted/topten/yaser-abdel-said"
  },
]
const mostWantedReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MOST_WANTED:
      return state;
    default:
      return state;
  }
};
export default mostWantedReducer;