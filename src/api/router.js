import { renderToString } from "react-dom/server";
import { addProfileFromFormData, getAllProfiles } from "../repository/profiles";
import { loadImage } from "../repository/images";
import ProfileList from "../components/ProfileList";

export const routeHandlerMap = new Map();
export function addRouteHandler(urlPathName, routeHandlerObj) {
  routeHandlerMap.set(urlPathName, routeHandlerObj);
}

const indexHandlerObj = {
  GET: async (request) => Bun.file("./src/components/index.html"),
};
addRouteHandler("", indexHandlerObj);

const profilesHandlerObj = {};

profilesHandlerObj["GET"] = async (request) =>
  renderToString(<ProfileList profiles={getAllProfiles()} />);

profilesHandlerObj["POST"] = async (request) => {
  const profileFormData = await request.formData();
  await addProfileFromFormData(profileFormData);
  return renderToString(<ProfileList profiles={getAllProfiles()} />);
};

addRouteHandler("profiles", profilesHandlerObj);

const imageHandler = {};

imageHandler["GET"] = async (request) => {
  const url = new URL(request.url);
  const imageName = url.pathname.split("/")[2];
  return await loadImage(imageName);
};

addRouteHandler("image", imageHandler);
