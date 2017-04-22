using System;
using System.ComponentModel.DataAnnotations;

namespace TimeBox.API.Models
{
    public class UserDto
    {
        public Guid UserId { get; set; }
        [Required, EmailAddress]
        public string EmailAddress { get; set; }
        public string Username { get; set; }
    }
}