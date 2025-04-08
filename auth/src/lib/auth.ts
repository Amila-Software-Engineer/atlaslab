import { hash, compare ,genSalt} from 'bcrypt';

const saltRounds = 10

// const salt = genSalt(saltRounds, (err, salt) => {
//   if (err) {  
//       return err.message;
//   }
//     return salt
//   });



// export const hashPassword = (password: string | Buffer)=>{
//   return hash(password, salt, (err, hash) => {
//     if (err) {
//         return err.message;
//     }
//     console.log('Hashed password:', hash);
//     return hash;
//   });
// }

export const hashPassword = async (password: string | Buffer): Promise<string | Error> => {
  try {
    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  } catch (err) {
    return new Error(err.message);
  }
};