export async function fetchImage(category, id) {
  // Replace this with a real API call...
  return {
    id,
    url: `/static/images/${category}/image${id}.jpg`,
    alt: 'Image',
    title: 'Image Title',
    description: 'Image Description',
  };
}
