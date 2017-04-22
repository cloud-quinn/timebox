using Microsoft.AspNet.Identity.EntityFramework;
using TimeBox.DataAccess.Models;

namespace TimeBox.DataAccess
{
    /// <summary>
    ///  Context for storing users.
    /// </summary>
    public class UserContext : IdentityDbContext<User>
    {
        /// <summary>
        /// Constructor for the UsersContext.
        /// </summary>
        public UserContext() : base("TimeBox.DataAccess.UsersContext") { }

    }
}

