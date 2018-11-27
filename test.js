db.createUser({
    user:'SantiagoBlas', 
    pwd: '1234', 
    roles: ['readWrite', 'dbAdmin']
});

db.clientes.insert({
    firstName: 'Isaac', 
    lastName: 'Asimov'
});

db.clientes.insert(
    [
        {
            firstName: 'Ernest', 
            lastName: 'Hemingway'
        },
        {
            firstName: 'Santiago', 
            lastName: 'Beitia'
        },
        {
            firstName: 'Gabriel', 
            lastName: 'García Márquez'
        }
    ]
);

db.clientes.find({firstName: 'Isaac'});

db.clientes.update(
    {firstName: 'Santiago'},
    {
        firstName: 'Santiago Blás',
        lastName: 'Beitia',
        gender: 'male'
    }
);

db.clientes.find().pretty();

db.clientes.find(
    {_id: ObjectId('5bfd455395b287abce1fec2d')}
);

db.clientes.update(
    {_id: ObjectId('5bfd455395b287abce1fec2d')},
    {
        firstName: 'Isaac', 
        lastName: 'Asimov',
        gender: 'male'
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd455395b287abce1fec2d')},
    {
        $set: {
            age: 100
        }
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd455395b287abce1fec2d')},
    {
        $inc: {
            age: 5
        }
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd455395b287abce1fec2d')},
    {
        $rename: {
            'gender': 'sex'
        }
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd455395b287abce1fec2d')},
    {
        $unset: {
            age: 1 //1 == true
        }
    }
);

db.clientes.update(
    {firstName: 'Julio'},
    {
        firstName: 'Julio',
        lastName: 'Cortazar'
    },
    {
        upsert: true
    }
)

db.clientes.remove(
    {firstName: 'Julio'}
);

db.clientes.insert(
    [
        {
            firstName: 'Julio',
            lastName: 'Verne'
        },
        {
            firstName: 'Julio',
            lastName: 'Cortazar'
        }
    ]
);

db.clientes.remove(
    {
        firstName: 'Julio'
    },
    {
        justOne: true
    }
);

db.clientes.find().pretty(); //se ve lindo

db.clientes.find(
    {
        $or : [
            {
                firstName: 'Ernest'
            },
            {
                firstName: 'Isaac'
            }
        ]
    }
);

db.clientes.insert(
    [
        {
            firstName: 'Eduardo', 
            lastName: 'Sacheri',
            age: 56
        },
        {
            firstName: 'Anne', 
            lastName: 'Perry',
            age: 30
        },
        {
            firstName: 'Hernán', 
            lastName: 'Casciari',
            age: 46
        }
    ]
);

db.clientes.find(
    {
        age: {
            $gt: 40
        }
    }
);

db.clientes.find(
    {
        age: {
            $lt: 40
        }
    }
);

db.clientes.find(
    {
        $or : [
            {
                age: {
                    $lt: 40
                }
            },
            {
                age: {
                    $gt: 50
                }
            }
        ]
    }
);

db.clientes.find(
    {
        age: {
            $lt: 40,
            $gt: 50
        }
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd549bbdbfb32cf70bb8e9')},
    {
        $set: {
            address: {
                city: 'Buenos Aires'
            }
        }
    }
);

db.clientes.update(
    {_id: ObjectId('5bfd511bbdbfb32cf70bb8e6')},
    {
        $set: {
            address: {
                city: 'Paris'
            }
        }
    }
);

db.clientes.find({
    'address.city': 'Buenos Aires'
});

db.clientes.find({
    firstName: {
        $regex: 'ne'
    }
});

db.clientes.find().sort({lastName:1}); //1: A-Z, -1: Z-A

db.clientes.count();

db.clientes.find({
    firstName: {
        $regex: '[aá]'
    }
}).count();

db.clientes.find({
    firstName: {
        $regex: '[aá]'
    }
}).sort({firstName: 1}).limit(3);

db.clientes.find().forEach(element => {
    print(element.firstName);
});