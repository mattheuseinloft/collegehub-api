interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<any> {
    const user = {
      name,
      email,
      password,
    };

    return user;
  }
}

export default CreateUserService;
