using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TimeBox.API.Models
{
    class TaskGroupDto
    {
        public string TaskGroupId { get; set; }
        public string OwnerUserId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public List<TaskDto> Tasks { get; set; }
    }
}
