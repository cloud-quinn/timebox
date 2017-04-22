using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeBox.DataAccess.Models
{
    public class DbResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }

        public DbResult(bool success = false, string message = "No message defined")
        {
            this.Success = success;
            this.Message = message;
        }
    }
}
