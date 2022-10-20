import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './api/models/User.js'

dotenv.config()

mongoose.connect(process.env.DB_URI, async () => {
    console.log('conexion exitosa')
    // Crud basico

    const user = await User.create({ // el create regresa una promesa
      address: 'Direccion prueba',
      birthday: new Date(),
      contacts: ['reyna', 'carmen'],
      email: 'r@gmail.com',
      lastname: 'carmen',
      name: 'reyna',
      phone: '1234121212',
      role: 'client'
    })

    //READ: find() Regresa todos los ususarios que encuentre
    User.find()

    //UPDATE 
    User.updateMany({ // pide dos cosas, pide un filtro y un objeto update
      name: 'reyna' //filtro: filtra todos los usuarios de nombre reyna
    },
    {
      // name: 'otroName'
      role: 'admin' // segundo param: todos los usuarios de nombre reyna cambiar el role a admin
    }
    )

    // DELETE
    User.deleteOne()
  })