using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TimeBox.DataAccess.Models
{
    public class TaskGroup: DbRecord
    {
        public string TaskGroupId { get; set; }
        public string OwnerUserId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public List<Task> Tasks { get; set; }

    }
}
