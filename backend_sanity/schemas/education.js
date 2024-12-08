export default{
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        {
            name:'institution',
            title:'Name',
            type:'string'
        },
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {
            name:'degree',
            title:'Degree',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}