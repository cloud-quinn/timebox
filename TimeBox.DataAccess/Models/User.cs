using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations;

namespace TimeBox.DataAccess.Models
{
    public class User : IdentityUser
    {
        public string UserId { get; set; }
        [Required, EmailAddress]
        public string EmailAddress { get; set; }
        public string Username { get; set; }

    }
}