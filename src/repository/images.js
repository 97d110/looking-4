export async function storeImage({ id, firstName, lastName }, imageData) {
  if (!imageData)
    throw new Error(
      `Image was not saved! | name: ${firstName} ${lastName} | id: ${id}`
    );
  const imageName = `${id}.png`;
  await Bun.write(`images/${imageName}`, imageData);
  return imageName;
}

export async function loadImage(imageName) {
  try {
    const img = Bun.file(`images/${imageName}`);
    if (!img.exists) throw new Error("Image not found!");
    return img.stream();
  } catch (error) {
    console.error(error);
  }
}
