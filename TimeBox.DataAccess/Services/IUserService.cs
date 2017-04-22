using System;
using System.Linq;
using TimeBox.DataAccess.Models;
using System.Threading.Tasks;

namespace TimeBox.DataAccess.Services
{
    public interface IUserService
    {

        IQueryable<User> GetUser();

        User GetUserById(Guid id);

        User GetUserByUsername(string username);
        User GetUserByEmailAddress(string emailAddress);
        Task<DbResult> SaveUser(User user);

        DbResult DeleteUser(Guid id);

    }
}

