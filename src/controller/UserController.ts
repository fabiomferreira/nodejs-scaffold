import User from '../model/User';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export default class UserController {
  public save(user): Promise<User> {
    const errors = []
    if(!user.email) errors.push({message: 'Email é obrigatório'});
    if(!user.password) errors.push({message: 'Senha é obrigatório'});

    if(errors.length) {
      return Promise.reject({errors})
    }

    const hashPassword = bcrypt.hashSync(user.password, saltRounds);
    return User.create({...user, password: hashPassword});
  }

  public auth(login) {
    const errors = [];
    return User.findOne({
      where: {
        email: login.email,
      },
    })
    .then(user => {
      const result = bcrypt.compareSync(login.password, user.password);
      if(result) {
        return Promise.resolve({data: 'Success!'});
      } else {
        return Promise.reject({error: 'Usuário e/ou senha incorretos!'})
      }
    })
  }

  public fetchAll() {
      return User.findAll();
  }

  public fetchOneById(id) {
    return User.findByPk(id);
  }

  public update(id, user) {
    return User.update(user, { where: {id}  });
  }

}
