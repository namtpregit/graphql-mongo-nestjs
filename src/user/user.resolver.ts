import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [User])
  getUsers() {
    // Logic to fetch books from a data source
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    // Logic to create a new book in the data source
    // return this.usersService.createUser({ name, description }: any);
    return { id: '2', name, description };
  }
}
