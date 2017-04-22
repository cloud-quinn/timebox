using System;
using System.Data.Entity;
using System.Linq;
using TimeBox.DataAccess.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace TimeBox.DataAccess.Services 
{
    public class UserService : IUserService
    {
        private UserContext _userContext;
        private UserManager<User> _userManager;
        private UserStore<User> _userStore;

        public UserService(UserContext userContext) 
        {
            _userContext = userContext;
            _userStore = new UserStore<User>(_userContext);
            _userManager = new Microsoft.AspNet.Identity.UserManager<User>(_userStore);
        }

        public IQueryable<User> GetUser()
        {
            return _userContext.Users;
        }

        public User GetUserById(Guid id)
        {
            if (id == null)
            {
                throw new ArgumentNullException();
            }
            return _userContext.Users.Find(id);
        }

        public User GetUserByUsername(string username)
        {
            if (username == null)
            {
                throw new ArgumentNullException();
            }
            return _userContext.Users.Find(username);
        }

        public User GetUserByEmailAddress(string emailAddress)
        {
            if (emailAddress == null)
            {
                throw new ArgumentNullException();
            }
            return _userContext.Users.Find(emailAddress);
        }

        public async Task<DbResult> SaveUser(User user)
        {
            if (user.Id == null)
            {
                var result = await _userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    var identity = await _userManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
                    try
                    {
                        _userContext.Users.Add(user);
                        _userContext.SaveChanges();
                    }
                    catch (Exception exception)
                    {
                        return new DbResult(false, exception.Message);
                    }
                    return new DbResult(true, "User created");
                }
                else
                {
                    return new DbResult(false, "Could not create user");
                }             
            }

            else
            {
                _userContext.Entry(user).State = EntityState.Modified;
            }
            
            try
            {
                _userContext.SaveChanges();
            }
            catch (Exception exception)
            {
                return new DbResult(false, exception.Message);
            }

            return new DbResult(true, "User saved");
        }

        public DbResult DeleteUser(Guid id)
        {
            User user = _userContext.Users.Find(id);
            if (user == null)
            {
                return new DbResult(false, "User not found");
            }

            _userContext.Users.Remove(user);
            try
            {
                _userContext.SaveChanges();
            }
            catch (Exception exception)
            {
                return new DbResult(false, exception.Message);
            }

            return new DbResult(true, "User deleted");
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                _userContext.Dispose();
            }
        }

        private bool UserIdExists(User user)
        {
            return _userContext.Users.Any(e => e.UserId == user.Id);
        }

        private bool UsernameExists(User user)
        {
            return _userContext.Users.Any(e => e.Username == user.Username);
        }

        private bool UserEmailAddressExists(User user)
        {
            return _userContext.Users.Any(e => e.EmailAddress == user.EmailAddress);
        }
    }
}

