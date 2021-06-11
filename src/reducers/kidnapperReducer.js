import { DISPLAY_KIDNAPPER } from '../action-types/kidnapping-action-types';
const initialState = [
  {
    id: "1",
    img: "https://www.fbi.gov/wanted/kidnap/liliana-and-daniella-moreno/@@images/image/thumb",
    title: "LILIANA AND DANIELLA MORENO",
    description: "The FBI's Miami Field Office's South Florida Violent Crime and Fugitive Task Force (SFVCTF) is seeking the public's assistance in locating Liliana Moreno and her daughter, Daniella Moreno, who have been missing from Doral, Florida, since May 30, 2016. They were allegedly last seen at or near the Home Depot located at 13895 Okeechobee Road in Hialeah, Florida. They have not been seen or heard from since that day. Liliana is described as a White (Hispanic) female born December 24, 1973. She has brown hair and brown eyes. Daniella is described as a White (Hispanic) female born October 4, 2007. She has brown hair and brown eyes. This investigation is being jointly conducted by the Miami-Dade Police Department, the City of Doral Police Department, and the FBI.",
    field_office: "Miami",
    url: "https://www.fbi.gov/wanted/kidnap/liliana-and-daniella-moreno",
    file: "https://www.fbi.gov/@@dvpdffiles/e/9/e96ab7a8e6a34e1db6b9a974086b2141/normal/dump_1.gif"
  },
  {
    id: "2",
    img: "https://www.fbi.gov/wanted/kidnap/tina-marie-finley/@@images/image/thumb",
    title: "TINA MARIE FINLEY",
    description: "Tina Marie Finley, a 25 year-old member of the Coeur d'Alene (Idaho) Tribe of Indians, has been missing since March 8, 1988. She was last seen in Plummer, Idaho, and was reported missing days later. The investigation suggests she may have been the victim of foul play. This case is being investigated by the FBI's Coeur d'Alene Resident Agency and the Coeur d'Alene Tribal Police Department.",
    field_office: "Salt Lake City",
    url: "https://www.fbi.gov/wanted/kidnap/tina-marie-finley",
    file: "https://www.fbi.gov/wanted/kidnap/tina-marie-finley/@@screenshot.gif"
  },
  {
    id: "3",
    img: "https://www.fbi.gov/wanted/kidnap/khadijah-rose-britton/@@images/image/thumb",
    title: "KHADIJAH ROSE BRITTON",
    description: "The Federal Bureau of Investigation (FBI) and the Mendocino County Sheriff's Department in California are seeking any information from the public that may help to locate Khadijah Rose Britton.  She was last seen at a residence in Covelo, California, on Friday, February 8, 2018, while being forced into a car at gunpoint by her ex-boyfriend.",
    field_office: "San Francisco",
    url: "https://www.fbi.gov/wanted/kidnap/khadijah-rose-britton",
    file: "https://www.fbi.gov/wanted/kidnap/khadijah-rose-britton/@@screenshot.gif"
  }
]
const kidnapperReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_KIDNAPPER:
      return state;
    default:
      return state;
  }
};
export default kidnapperReducer;