//using Microsoft.AspNet.Identity;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Threading.Tasks;
//using System.Web;
//using TimeBox.API.Models;

//namespace TimeBox.API.Services
//{

//    public class AuthService
//    {
//        public AuthService(
//        UserManager userManager,
//        IAuthenticationManager authManager)
//        {
//            UserManager = userManager;
//            AuthenticationManager = authManager;
//        }
//        private async Task<Session> Authenticate(UserDto user, bool persistent)
//        {
//            ClearSession(user.UserId);

//            var identity = await UserManager.CreateIdentityAsync(
//               user, DefaultAuthenticationTypes.ApplicationCookie);

//            AuthenticationManager.SignIn(
//               new AuthenticationProperties()
//               {
//                   IsPersistent = persistent
//               }, identity);
//        }

//        private bool ClearSession(Guid userId)
//        {
//            return true;
//        }
//    }
//}