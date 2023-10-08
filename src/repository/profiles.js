import { storeImage } from "./images.js";

const profilesMap = new Map();

export function getAllProfiles() {
  const allProfiles = [];
  profilesMap.forEach((value) => {
    allProfiles.push({ ...value });
  });
  return allProfiles;
}

export async function addProfileFromFormData(profileFormData) {
  const id = crypto.randomUUID();
  const profile = {
    id,
    firstName: profileFormData.get("firstName"),
    lastName: profileFormData.get("lastName"),
  };
  const imagePath = await storeImage(profile, profileFormData.get("image"));
  profile.image = imagePath;
  profilesMap.set(id, profile);
}
