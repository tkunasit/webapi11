import User from "../models/User.js";
import bcrypt from 'bcrypt';

const UserRegister = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const passwordEncrypt = bcrypt.hashSync(password, 10 )
      await User.create({name, email, password : passwordEncrypt})
                .then((result)=>{
                    res.status(201).json(result);
                })
                .catch((err)=>{
                    res.status(400).json({message: err.message})
                })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const UserLogin = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const UserLogout = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export { UserRegister, UserLogin, UserLogout } 