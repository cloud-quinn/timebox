using System.ComponentModel.DataAnnotations;

namespace TimeBox.API.Models
{
    class TaskDto
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
