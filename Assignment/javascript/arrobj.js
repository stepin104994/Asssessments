var mobiles=[
    {
        Mobile :'Oppo F15',
        Brand:'OPPO',
        price:20000,features:{'Version':'Android10','Memory':'128GB','Camera':'48MP'},
        accessories:['bluetooth','Earphone','Headphone']
    },
    {
        Mobile :'Vivi Y12',
        Brand:'VIVO',
        price:12000,features:{'Version':'Android9','Memory':'64GB','Camera':'16MP'},
        accessories:['bluetooth','Earphone']
    },
    {
        Mobile :'Honor Bee 4G',
        Brand:'HONOR',
        price:7000,features:{'Version':'Android8','Memory':'8GB','Camera':'8MP'},
        accessories:['Earphone']
    }
]
for (const attr in mobiles) {
    var mobile = mobiles[attr];
    if (mobile instanceof Array) {
        for (const i in mobile)
            console.log(mobile[i])
    } 
    else if (typeof mobile == 'object') {
        for (const j in mobile) {
             console.log(j + " : " + mobile[j])
        }
    } 
    else if (typeof mobile == 'function') {
        mobile();
    } 
    else {
        console.log(mobile)
    }
}


