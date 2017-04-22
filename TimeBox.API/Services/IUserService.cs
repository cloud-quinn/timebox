using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TimeBox.API.Models;
using TimeBox.DataAccess.Models;

namespace TimeBox.API.Services
{
    public interface IUserService
    {
        DbResult Register(UserDto user);
    }
}
