export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true, //user can be able to crop the image
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
