class UserService {
  async createUser(user_name, password) {
    console.log(user_name, password);
    return { user_name, password ,address:"henann"};
  }
}

module.exports = new UserService();
