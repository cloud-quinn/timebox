using System;
using System.ComponentModel.DataAnnotations;

namespace TimeBox.DataAccess.Models
{
    public class Task: DbRecord
    {
        public string TaskId { get; set; }
        public string OwnerUserId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int MaxMinutes { get; set; }
        [Required]
        public string Points { get; set; }

    }
}
