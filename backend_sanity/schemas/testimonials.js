export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            titls: 'Name',
            type:'string'
        },
        {
            name: 'company',
            titls: 'Company',
            type:'string'
        },
        {
            name: 'imageurl',
            titls: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feedback',
            titls: 'Feedback',
            type:'string'
        },

    ]
}