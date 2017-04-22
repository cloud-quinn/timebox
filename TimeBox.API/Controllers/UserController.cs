using System;
using System.Web.Http;
using System.Web.Http.Results;
using TimeBox.API.Models;
using TimeBox.DataAccess.Models;

namespace TimeBox.API.Controllers
{
    public class UserController : ApiController
    {
        private TimeBox.API.Services.IUserService _userService;

        public UserController(TimeBox.API.Services.IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/user/:id
        [HttpGet]
        public JsonResult<User> GetUser(Guid userId)
        {
            throw new NotImplementedException();
        }

        // POST: api/user/register
        [HttpPost]
        public JsonResult<DbResult> Register(UserDto user)
        {
            return Json(_userService.Register(user));
        }

    }
}